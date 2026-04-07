"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Loader2 } from "lucide-react"

export function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    phone: "",
    email: "",
    kvkkAccepted: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return

    setIsSubmitting(true)
    setErrorMessage("")

    try {
      // Use FormData directly from the form element for Netlify compatibility
      const formDataToSend = new FormData(formRef.current)

      const response = await fetch(window.location.pathname, {
        method: "POST",
        headers: { "Accept": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formDataToSend as any).toString(),
      })

      if (!response.ok) {
        throw new Error("Talep gönderilirken bir hata oluştu.")
      }

      setIsSubmitted(true)
      setFormData({
        name: "",
        business: "",
        phone: "",
        email: "",
        kvkkAccepted: false,
      })
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Beklenmeyen bir hata oluştu.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 lg:py-32 bg-primary/5 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-2xl shadow-primary/10 border border-border">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                Hemen <span className="text-primary">Ücretsiz Demo</span> Talep Edin
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-pretty">
                7 gunluk ucretsiz deneme ile BeautyFlow CRM&apos;in isletmenize nasil fayda saglayacagini gorun. 
                Kredi kartı gerekmez.
              </p>
            </div>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Talebiniz Alındı!
                </h3>
                <p className="text-muted-foreground">
                  En kısa sürede sizinle iletişime geçeceğiz.
                </p>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-6"
                data-netlify="true"
                name="demo-request"
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="demo-request" />
                <p className="hidden">
                  <label>
                    Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
                  </label>
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Adınız Soyadınız <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="Adınızı girin"
                    />
                  </div>
                  <div>
                    <label htmlFor="business" className="block text-sm font-medium text-foreground mb-2">
                      İşletme Adı <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      id="business"
                      name="business"
                      required
                      value={formData.business}
                      onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="İşletme adınızı girin"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Telefon Numarası <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="05XX XXX XX XX"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      E-posta Adresi <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="ornek@email.com"
                    />
                  </div>
                </div>
                
                <div className="flex items-start gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="kvkk"
                    name="kvkkAccepted"
                    required
                    checked={formData.kvkkAccepted}
                    onChange={(e) => setFormData({ ...formData, kvkkAccepted: e.target.checked })}
                    className="mt-1 w-4 h-4 rounded border-border text-primary focus:ring-primary"
                  />
                  <label htmlFor="kvkk" className="text-sm text-muted-foreground">
                    <span className="text-destructive">*</span>{" "}
                    <a href="/kvkk" target="_blank" className="underline hover:text-primary">
                      KVKK Aydınlatma Metni
                    </a>{" "}
                    kapsamında kişisel verilerimin işlenmesini kabul ediyorum.
                  </label>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button 
                    type="submit"
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Gönderiliyor...
                      </>
                    ) : (
                      <>
                        Ücretsiz Demo Talep Et
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
                
                <p className="text-center text-sm text-muted-foreground">
                  Bilgileriniz güvende. Spam yapmayız.
                </p>
                {errorMessage && (
                  <p className="text-center text-sm text-destructive">{errorMessage}</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
