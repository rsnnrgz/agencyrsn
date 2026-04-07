"use client"

import { Bell, Calendar, Gift, MessageCircle, Shield, Star } from "lucide-react"

const features = [
  {
    icon: Calendar,
    title: "Akıllı Randevu Hatırlatma",
    feature: "Otomatik SMS/WhatsApp hatırlatması",
    benefit: "Koltuğunuz asla boş kalmaz, gelir kaybı yaşamazsınız",
  },
  {
    icon: Star,
    title: "Akıllı Yorum Filtreleme",
    feature: "4 yıldız altı yorumları içeride tutar",
    benefit: "İtibarınız korunur, sadece mutlu müşteriler görünür",
  },
  {
    icon: Gift,
    title: "Doğum Günü Kutlamaları",
    feature: "Otomatik kişisel mesaj gönderimi",
    benefit: "Müşteriniz kendini özel hisseder, sadakat artar",
  },
  {
    icon: Bell,
    title: "Mesleki Gün Kutlamaları",
    feature: "Özel günlerde otomatik mesajlar",
    benefit: "Bağınız güçlenir, müşteri sizi hatırlar",
  },
  {
    icon: MessageCircle,
    title: "Kampanya Bildirimleri",
    feature: "Toplu ve kişisel mesaj gönderimi",
    benefit: "Doluluk oranınız artar, gelir yükselir",
  },
  {
    icon: Shield,
    title: "Müşteri Veri Güvenliği",
    feature: "Şifreli ve güvenli veri saklama",
    benefit: "KVKK uyumlu, müşteri güveni sağlam",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Özellikler
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Sadece Özellik Değil,{" "}
            <span className="text-primary">Gerçek Sonuçlar</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Her özelliğimiz, işletmenize somut bir fayda sağlamak için tasarlandı.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-background rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Özellik:</span>
                  <p className="text-sm text-muted-foreground">{feature.feature}</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-xs font-medium text-primary uppercase tracking-wide">Fayda:</span>
                  <p className="text-sm text-foreground font-medium">{feature.benefit}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
