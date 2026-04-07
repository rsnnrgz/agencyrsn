import { NextResponse } from "next/server"
import { validateDemoRequest, type DemoRequestPayload } from "@/lib/demo-request"

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as DemoRequestPayload
    const validationError = validateDemoRequest(payload)

    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 })
    }

    const webhookUrl = process.env.DEMO_REQUEST_WEBHOOK_URL
    if (!webhookUrl) {
      if (process.env.NODE_ENV !== "production") {
        return NextResponse.json({ ok: true, skippedWebhook: true }, { status: 201 })
      }
      return NextResponse.json(
        { error: "Sunucu entegrasyonu eksik. Lutfen destek ile iletisime gecin." },
        { status: 503 }
      )
    }

    let parsedWebhookUrl: URL
    try {
      parsedWebhookUrl = new URL(webhookUrl)
    } catch {
      return NextResponse.json(
        { error: "Sunucu entegrasyonu eksik. Lutfen destek ile iletisime gecin." },
        { status: 503 }
      )
    }

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 10_000)

    let upstreamResponse: Response
    try {
      upstreamResponse = await fetch(parsedWebhookUrl.toString(), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "landing-page",
          submittedAt: new Date().toISOString(),
          ...payload,
        }),
        cache: "no-store",
        signal: controller.signal,
      })
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") {
        return NextResponse.json(
          { error: "Talep su an zaman asimina ugradi. Lutfen tekrar deneyin." },
          { status: 504 }
        )
      }

      return NextResponse.json(
        { error: "Talep su an islenemiyor. Lutfen tekrar deneyin." },
        { status: 502 }
      )
    } finally {
      clearTimeout(timeoutId)
    }

    if (!upstreamResponse.ok) {
      return NextResponse.json(
        { error: "Talep su an islenemiyor. Lutfen tekrar deneyin." },
        { status: 502 }
      )
    }

    return NextResponse.json({ ok: true }, { status: 201 })
  } catch {
    return NextResponse.json({ error: "Gecersiz istek formati." }, { status: 400 })
  }
}
