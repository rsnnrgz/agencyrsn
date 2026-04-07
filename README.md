# BeautyFlow Landing

Next.js tabanli BeautyFlow tanitim sayfasi.

## Kurulum

1. `npm install`
2. `.env.example` dosyasini `.env.local` olarak kopyalayin.
3. `DEMO_REQUEST_WEBHOOK_URL` degiskenine demo taleplerini alacak endpoint adresini verin.
4. `npm run dev`

## Scriptler

- `npm run dev`: gelistirme sunucusu
- `npm run build`: production build
- `npm run start`: production sunucusu
- `npm run lint`: ESLint kontrolu
- `npm run test`: Vitest testleri
- `npm run test:watch`: Vitest izleme modu

## Notlar

- Demo formu `POST /api/demo-request` endpoint'ine baglidir.
- Webhook degiskeni tanimli degilse endpoint `503` dondurur.
