"use client"

import { AlertTriangle, Clock, MessageSquareX, TrendingDown } from "lucide-react"

const problems = [
  {
    icon: Clock,
    title: "Boşa Giden Randevular",
    description: "Müşteriler randevularını unutuyor, siz de boş koltuklara bakıyorsunuz. Her kaçırılan randevu, cebinizden çıkan para demek.",
  },
  {
    icon: MessageSquareX,
    title: "Kontrolsüz Negatif Yorumlar",
    description: "Memnun olmayan musteriler direkt Google'a gidiyor. Bir kotu yorum, onlarca potansiyel musteriyi kacirmaniza neden oluyor.",
  },
  {
    icon: TrendingDown,
    title: "Zayıf Müşteri Takibi",
    description: "Müşteri kapıdan çıktıktan sonra unutuluyor. Doğum günleri, özel günler... Hepsi kaçırılan fırsatlar.",
  },
  {
    icon: AlertTriangle,
    title: "Manuel İş Yükü",
    description: "WhatsApp'tan tek tek mesaj atmak, Excel'de musteri takibi yapmak... Zamaniniz bunlara mi harcansin?",
  },
]

export function ProblemSection() {
  return (
    <section className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Problem
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Müşterinizi Kapıdan Çıktıktan Sonra{" "}
            <span className="text-primary">Unutuyor musunuz?</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Guzellik sektorundeki isletmelerin %70&apos;i musteri takibinde basarisiz oluyor. 
            Bu, kaçırılan randevular, düşük müşteri sadakati ve kötü online itibar demek.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <problem.icon className="w-6 h-6 text-destructive group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
