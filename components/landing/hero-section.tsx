"use client"

import { Button } from "@/components/ui/button"
import { Calendar, Star, Users } from "lucide-react"

export function HeroSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToSolution = () => {
    document.getElementById("solution")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Subtle decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
            <Star className="w-4 h-4 fill-primary" />
            <span>Güzellik Sektörü İçin Özel Tasarlandı</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">
            Boşa Giden Randevulara ve{" "}
            <span className="text-primary">Kötü Yorumlara</span>{" "}
            Son Verin
          </h1>
          
          {/* Value Proposition */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
            Müşterilerinizi kapıdan çıktıktan sonra unutmayın. Otomatik hatırlatmalar, 
            akıllı yorum yönetimi ve kişisel dokunuşlarla müşteri sadakatini artırın.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30"
              onClick={scrollToContact}
            >
              Ücretsiz Demo Talep Et
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary/30 text-foreground hover:bg-primary/5 px-8 py-6 text-lg rounded-full"
              onClick={scrollToSolution}
            >
              Nasil Calisir?
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <span className="text-3xl font-bold text-foreground">%85</span>
              <span className="text-sm text-muted-foreground">Randevu Devam Oranı</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <span className="text-3xl font-bold text-foreground">4.8+</span>
              <span className="text-sm text-muted-foreground">Ortalama Google Puanı</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <span className="text-3xl font-bold text-foreground">500+</span>
              <span className="text-sm text-muted-foreground">Mutlu İşletme</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
