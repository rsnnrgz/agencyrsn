"use client"

import { ArrowRight, Filter, Shield, Star, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ReviewSystemSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Visual - Review Flow */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                {/* Main Card */}
                <div className="bg-card rounded-3xl p-8 shadow-2xl shadow-primary/10 border border-border">
                  <h4 className="font-semibold text-foreground mb-6 flex items-center gap-2">
                    <Filter className="w-5 h-5 text-primary" />
                    Akıllı Yorum Filtreleme Sistemi
                  </h4>
                  
                  {/* Flow Visualization */}
                  <div className="space-y-4">
                    {/* Step 1 */}
                    <div className="flex items-center gap-4 p-4 bg-background rounded-xl border border-border">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-primary">1</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground text-sm">Hizmet sonrası anket gönderilir</p>
                        <p className="text-xs text-muted-foreground">Otomatik SMS/WhatsApp ile</p>
                      </div>
                    </div>
                    
                    {/* Arrow */}
                    <div className="flex justify-center">
                      <ArrowRight className="w-5 h-5 text-muted-foreground rotate-90" />
                    </div>
                    
                    {/* Step 2 - Branch */}
                    <div className="grid grid-cols-2 gap-4">
                      {/* Positive */}
                      <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <p className="text-xs font-medium text-green-800">4-5 Yıldız</p>
                        <p className="text-xs text-green-600 mt-1">Google&apos;a yonlendirilir</p>
                        <div className="mt-2 flex items-center gap-1">
                          <ThumbsUp className="w-3 h-3 text-green-600" />
                          <span className="text-xs text-green-700 font-medium">Herkese Açık</span>
                        </div>
                      </div>
                      
                      {/* Negative */}
                      <div className="p-4 bg-muted rounded-xl border border-border">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex">
                            {[1, 2, 3].map((star) => (
                              <Star key={star} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            ))}
                            {[4, 5].map((star) => (
                              <Star key={star} className="w-3 h-3 text-muted-foreground" />
                            ))}
                          </div>
                        </div>
                        <p className="text-xs font-medium text-foreground">1-3 Yıldız</p>
                        <p className="text-xs text-muted-foreground mt-1">Size özel bildirilir</p>
                        <div className="mt-2 flex items-center gap-1">
                          <Shield className="w-3 h-3 text-primary" />
                          <span className="text-xs text-primary font-medium">Gizli Kalır</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  İtibar Koruma
                </div>
              </div>
            </div>
            
            {/* Text Content */}
            <div className="order-1 lg:order-2">
              <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
                Öne Çıkan Özellik
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                Google İtibarınızı{" "}
                <span className="text-primary">Akıllıca Yönetin</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed text-pretty">
                Bir kötü Google yorumu, aylarca emek verdiğiniz itibarı saniyeler içinde yok edebilir. 
                Akilli Yorum Filtreleme Sistemi ile negatif yorumlari size ozel tutar, 
                pozitif yorumlari ise Google&apos;a yonlendirir.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-foreground">Memnun musteriler Google&apos;da gorunur</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-foreground">Memnuniyetsiz müşterilerle özel iletişim kurarsınız</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-foreground">Google puanınız doğal olarak yükselir</span>
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8"
                onClick={scrollToContact}
              >
                Bu Özelliği Deneyin
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
