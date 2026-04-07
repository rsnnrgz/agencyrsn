"use client"

import { Clock, Headphones, Heart, Sparkles, Trophy, Zap } from "lucide-react"

const reasons = [
  {
    icon: Heart,
    title: "Sektör Odaklı",
    description: "Sadece güzellik sektörü için tasarlandı. İhtiyaçlarınızı anlıyoruz.",
  },
  {
    icon: Zap,
    title: "Anında Kurulum",
    description: "5 dakikada kullanmaya başlayın. Teknik bilgi gerektirmez.",
  },
  {
    icon: Headphones,
    title: "7/24 Destek",
    description: "Her zaman yanınızdayız. WhatsApp ile anında destek alın.",
  },
  {
    icon: Trophy,
    title: "Kanıtlanmış Sonuçlar",
    description: "500+ işletme, ortalama %35 daha fazla müşteri dönüşü.",
  },
  {
    icon: Clock,
    title: "Zaman Kazandırır",
    description: "Haftada ortalama 10 saat manuel iş yükünden kurtulun.",
  },
  {
    icon: Sparkles,
    title: "Sürekli Güncelleme",
    description: "Yeni özellikler otomatik olarak eklenir. Ekstra ücret yok.",
  },
]

export function WhyUsSection() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Neden Biz?
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            BeautyFlow CRM&apos;i{" "}
            <span className="text-primary">Tercih Etmeniz İçin</span>{" "}
            6 Neden
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="text-center p-6"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <reason.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
