import { Instagram, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <h3 className="font-serif text-2xl font-bold mb-4">BeautyFlow CRM</h3>
              <p className="text-background/70 mb-6 max-w-sm leading-relaxed">
                Güzellik sektörü işletmeleri için tasarlanmış akıllı müşteri takip ve geri bildirim sistemi.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://instagram.com" 
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            {/* Links */}
            <div>
              <h4 className="font-semibold mb-4">Hızlı Linkler</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#features" className="text-background/70 hover:text-background transition-colors text-sm">
                    Özellikler
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-background/70 hover:text-background transition-colors text-sm">
                    Fiyatlandırma
                  </a>
                </li>
                <li>
                  <a href="#home" className="text-background/70 hover:text-background transition-colors text-sm">
                    Hakkımızda
                  </a>
                </li>
                <li>
                  <a href="#solution" className="text-background/70 hover:text-background transition-colors text-sm">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">İletişim</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-background/70 text-sm">
                  <Phone className="w-4 h-4" />
                  <span>0850 XXX XX XX</span>
                </li>
                <li className="flex items-center gap-2 text-background/70 text-sm">
                  <Mail className="w-4 h-4" />
                  <span>info@beautyflow.com</span>
                </li>
                <li className="flex items-start gap-2 text-background/70 text-sm">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>İstanbul, Türkiye</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Bottom */}
          <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/50 text-sm">
              &copy; 2026 BeautyFlow CRM. Tüm hakları saklıdır.
            </p>
            <div className="flex gap-6">
              <a href="/gizlilik" className="text-background/50 hover:text-background transition-colors text-sm">
                Gizlilik Politikası
              </a>
              <a href="/kullanim-sartlari" className="text-background/50 hover:text-background transition-colors text-sm">
                Kullanım Şartları
              </a>
              <a href="/kvkk" className="text-background/50 hover:text-background transition-colors text-sm">
                KVKK
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
