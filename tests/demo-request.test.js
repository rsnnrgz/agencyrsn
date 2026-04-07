import { describe, expect, it } from "vitest"
import { validateDemoRequest } from "@/lib/demo-request"

describe("validateDemoRequest", () => {
  it("returns null for valid payload", () => {
    const result = validateDemoRequest({
      name: "Ada Lovelace",
      business: "BeautyFlow",
      phone: "05551234567",
      email: "ada@example.com",
    })

    expect(result).toBeNull()
  })

  it("rejects invalid email", () => {
    const result = validateDemoRequest({
      name: "Ada Lovelace",
      business: "BeautyFlow",
      phone: "05551234567",
      email: "invalid-email",
    })

    expect(result).toBe("Gecerli bir e-posta adresi girin.")
  })
})
