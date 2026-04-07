"use client"

import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    name: "Zeynep Aktaş",
    role: "Salon Zeynep, Kuaför",
    location: "İstanbul, Kadıköy",
    content: "Randevu kacirma oranimiz %40'tan %8'e dustu. Artik bos koltuklara bakmiyorum, musterilerim her zaman geliyor.",
    rating: 5,
    initials: "ZA",
  },
  {
    name: "Ahmet Demir",
    role: "Beauty Center, Güzellik Merkezi",
    location: "Ankara, Çankaya",
    content: "Google puanimiz 3.8'den 4.7'ye cikti. Akilli yorum sistemi gercekten calisiyor. Artik kotu yorumlardan korkmuyorum.",
    rating: 5,
    initials: "AD",
  },
  {
    name: "Elif Yıldırım",
    role: "Glow Clinic, Medikal Estetik",
    location: "İzmir, Alsancak",
    content: "Dogum gunu mesajlari sayesinde musterilerimiz cok mutlu. 'Bizi hatirladiniz' diye tesekkur ediyorlar. Sadakat inanilmaz artti.",
    rating: 5,
    initials: "EY",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Müşteri Yorumları
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            İşletme Sahipleri{" "}
            <span className="text-primary">Ne Diyor?</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            500&apos;den fazla guzellik isletmesi BeautyFlow CRM ile daha fazla musteri kazaniyor.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-background rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 right-6">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <Quote className="w-4 h-4 text-primary-foreground" />
                </div>
              </div>
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6">
                &quot;{testimonial.content}&quot;
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">{testimonial.initials}</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
