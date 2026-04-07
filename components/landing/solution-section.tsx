"use client"

import { Bot, Sparkles, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SolutionSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="solution" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
                Çözüm
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                7/24 Çalışan{" "}
                <span className="text-primary">Dijital Asistanınız</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-pretty">
                BeautyFlow CRM, siz uyurken bile müşterilerinizle ilgilenen akıllı bir asistan. 
                Randevu hatırlatmalarından doğum günü kutlamalarına, yorum yönetiminden 
                kampanya bildirimlerine kadar her şey otomatik.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Kurulum 5 Dakika</h4>
                    <p className="text-muted-foreground text-sm">Teknik bilgi gerektirmez. Hemen kullanmaya başlayın.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Tamamen Otomatik</h4>
                    <p className="text-muted-foreground text-sm">Bir kez kurun, sistem sizin yerinize çalışsın.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Kişiselleştirilmiş Deneyim</h4>
                    <p className="text-muted-foreground text-sm">Her müşteri kendini özel hissetsin.</p>
                  </div>
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8"
                onClick={scrollToContact}
              >
                Hemen Deneyin
              </Button>
            </div>
            
            {/* Visual */}
            <div className="relative">
              <div className="bg-card rounded-3xl p-8 shadow-2xl shadow-primary/10 border border-border">
                {/* Mock Dashboard */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-border">
                    <span className="font-semibold text-foreground">Bugünün Özeti</span>
                    <span className="text-xs text-muted-foreground">Canlı</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-background rounded-xl p-4">
                      <span className="text-2xl font-bold text-foreground">12</span>
                      <p className="text-xs text-muted-foreground">Gönderilen Hatırlatma</p>
                    </div>
                    <div className="bg-background rounded-xl p-4">
                      <span className="text-2xl font-bold text-primary">3</span>
                      <p className="text-xs text-muted-foreground">Doğum Günü Mesajı</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-background rounded-xl">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-xs font-medium text-primary">AY</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">Ayşe Yılmaz</p>
                        <p className="text-xs text-muted-foreground">Randevu hatırlatması gönderildi</p>
                      </div>
                      <span className="text-xs text-muted-foreground">2dk önce</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-background rounded-xl">
                      <div className="w-8 h-8 rounded-full bg-accent/30 flex items-center justify-center">
                        <span className="text-xs font-medium text-accent-foreground">MK</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">Mehmet Kaya</p>
                        <p className="text-xs text-muted-foreground">5 yıldız yorum bıraktı!</p>
                      </div>
                      <span className="text-xs text-muted-foreground">15dk önce</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                Otomatik Çalışıyor
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
