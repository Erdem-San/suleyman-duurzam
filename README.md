# Tarife Danışmanı - Enerji Karşılaştırma Platformu

Modern bir enerji karşılaştırma ve danışmanlık platformu. Next.js, TypeScript ve Tailwind CSS ile geliştirilmiştir.

## Özellikler

- 🏠 **Ana Sayfa**: Hero section, karşılaştırma formu ve özellikler
- 📊 **Karşılaştırma Formu**: Posta kodu, hane büyüklüğü ve güneş paneli bilgileri ile tüketim tahmini
- 🏢 **Sağlayıcılar Listesi**: Tüm enerji sağlayıcılarını görüntüleme
- 📄 **Sağlayıcı Detay Sayfaları**: Her sağlayıcı için detaylı bilgi, özellikler ve fiyatlandırma
- 📱 **Responsive Tasarım**: Mobil, tablet ve masaüstü uyumlu
- 🎨 **Modern UI/UX**: Tailwind CSS ile şık ve kullanıcı dostu arayüz

## Teknolojiler

- **Next.js 16** - React framework
- **TypeScript** - Tip güvenliği
- **Tailwind CSS** - Utility-first CSS framework
- **React 19** - UI kütüphanesi

## Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Production build
npm run build

# Production sunucusunu başlat
npm start
```

## Proje Yapısı

```
app/
├── components/          # Yeniden kullanılabilir bileşenler
│   ├── Header.tsx      # Üst navigasyon
│   ├── Footer.tsx      # Alt bilgi
│   └── ComparisonForm.tsx  # Karşılaştırma formu
├── saglayicilar/       # Sağlayıcılar listesi sayfası
├── saglayici/[slug]/   # Sağlayıcı detay sayfaları
├── page.tsx            # Ana sayfa
├── layout.tsx          # Root layout
└── globals.css         # Global stiller
```

## Özellikler

### Ana Sayfa
- Hero section ile başlık ve açıklama
- Trustpilot değerlendirmeleri
- Cashback teklifleri
- Karşılaştırma formu
- Neden bizi seçmelisiniz bölümü
- Nasıl çalışır adımları
- Popüler sağlayıcılar
- Müşteri yorumları

### Karşılaştırma Formu
- Posta kodu, ev numarası ve ek bilgiler
- Mevcut sağlayıcı seçimi
- Hane büyüklüğü seçimi (1-5 kişi)
- Güneş paneli sayısı
- Otomatik tüketim tahmini

### Sağlayıcılar
- Tüm sağlayıcıların listesi
- Her sağlayıcı için detay sayfası
- Özellikler ve fiyatlandırma bilgileri
- Değerlendirme puanları

## Geliştirme

Proje Next.js App Router kullanıyor. Yeni sayfalar eklemek için `app/` dizini altında klasör oluşturun.

## Lisans

MIT
