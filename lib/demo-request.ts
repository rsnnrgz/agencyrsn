export type DemoRequestPayload = {
  name: string
  business: string
  phone: string
  email: string
  kvkkAccepted: boolean
}

export function validateDemoRequest(payload: DemoRequestPayload): string | null {
  const requiredFields: Array<keyof DemoRequestPayload> = ["name", "business", "phone", "email"]
  const hasMissingField = requiredFields.some((field) => !payload[field]?.toString().trim())

  if (hasMissingField) return "Lutfen tum alanlari doldurun."

  if (!payload.kvkkAccepted) return "KVKK aydinlatma metnini kabul etmelisiniz."

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(payload.email)) return "Gecerli bir e-posta adresi girin."

  const normalizedPhone = payload.phone.trim()
  if (!/^\d+$/.test(normalizedPhone) || normalizedPhone.length < 10) {
    return "Gecerli bir telefon numarasi girin."
  }

  return null
}
