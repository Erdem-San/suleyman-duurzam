import Header from '../components/Header';
import Footer from '../components/Footer';
import ComparisonForm from '../components/ComparisonForm';

export default function ZakelijkPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white overflow-hidden">
        {/* Background Pattern - Çizgiler ve Desenler (Orijinal Koddan Korundu) */}
        <div className="absolute inset-0 opacity-20">
          {/* Diagonal Lines */}
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(255, 255, 255, 0.1) 10px,
              rgba(255, 255, 255, 0.1) 20px
            )`,
          }}></div>
          {/* Grid Pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}></div>
          {/* Circular Pattern */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        {/* İçerik - Kompakt Boyutlandırma (py-8, gap-8) Kullanıldı */}
        <div className="container mx-auto px-4 py-8 md:py-16 lg:py-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Sol Taraf - Yazılar */}
            <div className="text-left flex-shrink-0 md:pt-8">
              {/* Badge - İkinci Koddaki Boyutlandırma (px-3 py-1.5, text-xs) Kullanıldı */}
              <div className="inline-flex items-center gap-2 border border-white/30 rounded-full px-3 md:px-4 py-1.5 md:py-2 mb-4 md:mb-6 bg-white/10 backdrop-blur-sm">
                <svg className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-xs md:text-sm font-semibold text-white">Uitstekend 4.8/5 op Trustpilot</span>
              </div>

              {/* Main Heading - Boyutlandırma Küçültüldü (text-4xl, mb-4) */}
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight text-white">
                Onafhankelijk energie vergelijken,
                <span className="block text-white">
                  voor jou.
                </span>
              </h1>

              {/* Subheading - Boyutlandırma Küçültüldü (text-lg, mb-6) */}
              <p className="text-lg md:text-2xl text-green-100 mb-6 md:mb-8 max-w-xl">
                Vergelijk alle energieleveranciers onafhankelijk en vind de beste deal voor jouw bedrijf. Bespaar tot wel <span className="font-bold text-white">€500 per jaar</span> op je energierekening met onze gratis vergelijking.
              </p>

              {/* CTA Buttons - Daha Kompakt Boyutlandırma (px-6 py-3, gap-3) Kullanıldı */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-12">
                <a
                  href="/vergelijk"
                  className="w-full sm:w-auto bg-white text-green-600 px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-green-50 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-center"
                >
                  Start Vergelijken
                </a>
                <a
                  href="tel:+31612345678"
                  className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-white/10 transition-all text-center"
                >
                  Bel Ons Gratis
                </a>
              </div>

              {/* Trust Indicators - Boyutlandırma Küçültüldü (text-xs, w-5 h-5) */}
              <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-4 md:gap-8 text-xs md:text-sm text-green-100">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>100% Onafhankelijk</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Volledig Gratis</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Binnen 5 Minuten</span>
                </div>
              </div>
            </div>

            {/* Sağ Taraf - Form */}
            <div className="flex justify-center md:justify-end w-full z-10 self-start relative md:sticky md:top-4">
              {/* Cashback Badge - Daha Kompakt Boyutlandırma Kullanıldı */}
              <div className="absolute -top-4 md:-top-6 right-0 md:right-0 bg-yellow-500 rounded-full px-3 md:px-4 py-1.5 md:py-2 flex items-center gap-2 shadow-lg z-50 whitespace-nowrap">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-yellow-900" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                </svg>
                <span className="text-xs md:text-sm font-bold text-yellow-900">TOT €500</span>
                <span className="text-[10px] md:text-xs font-semibold text-yellow-900">CASHBACK</span>
              </div>
              <ComparisonForm />
            </div>
          </div>
        </div>
      </section>

      {/* Waarom Duurzaamgarant Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
                Waarom Duurzaamgarant?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Duurzaamgarant helpt je je energierekening te verlagen en bij te dragen aan een duurzame toekomst
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Reason 1 */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 border-2 border-green-200 hover:border-green-400 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-montserrat">Tot €500 Bespaar</h3>
                <p className="text-gray-700 leading-relaxed">
                  Vergelijk alle energieleveranciers en bespaar tot wel €500 per jaar op je energierekening. Wij vinden altijd de scherpste tarieven voor jouw situatie.
                </p>
              </div>

              {/* Reason 2 */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 border-2 border-green-200 hover:border-green-400 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-montserrat">100% Duurzaam</h3>
                <p className="text-gray-700 leading-relaxed">
                  Kies voor groene energie en draag bij aan een duurzame toekomst. Wij helpen je de beste groene energiedeal te vinden die bij jou past.
                </p>
              </div>

              {/* Reason 3 */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 border-2 border-green-200 hover:border-green-400 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-montserrat">Snel & Eenvoudig</h3>
                <p className="text-gray-700 leading-relaxed">
                  Binnen 5 minuten heb je een overzicht van alle beschikbare tarieven. Geen gedoe, geen verborgen kosten. Gewoon de beste deal.
                </p>
              </div>

              {/* Reason 4 */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 border-2 border-green-200 hover:border-green-400 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-montserrat">Volledig Onafhankelijk</h3>
                <p className="text-gray-700 leading-relaxed">
                  Wij werken niet voor energieleveranciers. Onze vergelijking is 100% objectief en onafhankelijk. Jij krijgt altijd het beste advies.
                </p>
              </div>

              {/* Reason 5 */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 border-2 border-green-200 hover:border-green-400 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-montserrat">Gratis Overstappen</h3>
                <p className="text-gray-700 leading-relaxed">
                  Wij regelen de hele overstap voor je, volledig gratis. Geen gedoe, geen papierwerk. Jij bespaart, wij regelen het.
                </p>
              </div>

              {/* Reason 6 */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 border-2 border-green-200 hover:border-green-400 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-montserrat">Persoonlijk Advies</h3>
                <p className="text-gray-700 leading-relaxed">
                  Ons team staat klaar om je te helpen met persoonlijk advies. Bel ons gratis of stuur een bericht voor al je vragen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hoe Werkt Duurzaamgarant Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
                Hoe Werkt Duurzaamgarant?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Duurzaamgarant helpt je je energierekening te verlagen. Zo werkt het:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Sol Taraf - Üst 2 Adım */}
              <div className="space-y-6">
                {/* Step 1 */}
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center flex-shrink-0 text-white text-2xl font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 font-montserrat">Vergelijk & Kies</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Vul je gegevens in en vergelijk alle beschikbare energietarieven. Wij tonen je direct de scherpste tarieven voor jouw situatie.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center flex-shrink-0 text-white text-2xl font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 font-montserrat">Wij Regelen Alles</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Kies je nieuwe energieleverancier en wij regelen de hele overstap voor je. Geen gedoe, geen papierwerk, volledig gratis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Orta - Görsel */}
              <div className="relative flex items-center justify-center">
                <img
                  src="/images/image14.png"
                  alt="Hoe Werkt Duurzaamgarant"
                  className="w-full h-auto max-w-lg object-contain"
                />
              </div>

              {/* Sağ Taraf - Alt 2 Adım */}
              <div className="space-y-6">
                {/* Step 3 */}
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center flex-shrink-0 text-white text-2xl font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 font-montserrat">Bespaar Direct</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Na de overstap begin je direct met besparen. Je nieuwe energieleverancier neemt alles over en jij geniet van lagere tarieven.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center flex-shrink-0 text-white text-2xl font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 font-montserrat">Blijf Op De Hoogte</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Wij houden je op de hoogte van nieuwe aanbiedingen en helpen je altijd de beste deal te vinden. Altijd gratis advies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verlaag Je Energierekening in 3 Eenvoudige Stappen Section */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat">
                Verlaag Je Energierekening in 3 Eenvoudige Stappen
              </h2>
              <p className="text-xl text-green-100 max-w-2xl mx-auto">
                Met Duurzaamgarant is het verlagen van je energierekening heel eenvoudig. Slechts 3 stappen en je begint met besparen.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Stap 1 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border-2 border-white/20 hover:border-white/40 transition-all">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-green-600 text-4xl font-bold shadow-lg">
                  1
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center font-montserrat">Vul Je Gegevens In</h3>
                <p className="text-green-100 leading-relaxed text-center">
                  Geef je postcode, huishoudgrootte en energieverbruik op. Dit duurt slechts 2 minuten en is volledig gratis.
                </p>
              </div>

              {/* Stap 2 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border-2 border-white/20 hover:border-white/40 transition-all">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-green-600 text-4xl font-bold shadow-lg">
                  2
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center font-montserrat">Vergelijk Alle Tarieven</h3>
                <p className="text-green-100 leading-relaxed text-center">
                  Bekijk alle beschikbare energietarieven van 60+ leveranciers op één overzichtelijke pagina. Wij tonen je direct de beste deals.
                </p>
              </div>

              {/* Stap 3 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border-2 border-white/20 hover:border-white/40 transition-all">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-green-600 text-4xl font-bold shadow-lg">
                  3
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center font-montserrat">Kies & Bespaar</h3>
                <p className="text-green-100 leading-relaxed text-center">
                  Selecteer de beste deal en stap over. Wij regelen de hele overstap voor je, volledig gratis. Begin direct met besparen!
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center mt-12">
              <a
                href="/vergelijk"
                className="inline-block bg-white text-green-600 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Start Nu Met Vergelijken
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Meest Gekozen door bezoekers Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
                Meest Gekozen door bezoekers
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Dit zijn de energieleveranciers waar onze bezoekers het vaakst voor kiezen.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Engie - Meest Gekozen */}
              <a
                href="/leveranciers/engie"
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border-2 border-green-500 relative"
              >
                {/* Badge */}
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                  Meest Gekozen
                </div>
                <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                      <svg className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm font-semibold">4.2</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 font-montserrat">Engie</h3>
                  <p className="text-white/90 text-sm">800.000 klanten</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    Engie is een Franse energiereus met innovatieve energieoplossingen en goede service.
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-green-600 font-semibold text-sm group-hover:text-green-700 transition-colors">
                      Bekijk details
                    </span>
                    <svg className="w-5 h-5 text-green-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>

              {/* Essent */}
              <a
                href="/leveranciers/essent"
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                      <svg className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm font-semibold">4.5</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 font-montserrat">Essent</h3>
                  <p className="text-white/90 text-sm">3,3 miljoen klanten</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    Essent is de grootste energieleverancier van Nederland met betrouwbare service.
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-green-600 font-semibold text-sm group-hover:text-green-700 transition-colors">
                      Bekijk details
                    </span>
                    <svg className="w-5 h-5 text-green-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>

              {/* Eneco */}
              <a
                href="/leveranciers/eneco"
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                      <svg className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm font-semibold">4.6</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 font-montserrat">Eneco</h3>
                  <p className="text-white/90 text-sm">2,5 miljoen klanten</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    Eneco focust sterk op duurzame energie en biedt innovatieve oplossingen.
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-green-600 font-semibold text-sm group-hover:text-green-700 transition-colors">
                      Bekijk details
                    </span>
                    <svg className="w-5 h-5 text-green-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>

              {/* Vattenfall */}
              <a
                href="/leveranciers/vattenfall"
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                      <svg className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm font-semibold">4.4</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 font-montserrat">Vattenfall</h3>
                  <p className="text-white/90 text-sm">2 miljoen klanten</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    Vattenfall is gespecialiseerd in windenergie en biedt vaste tarieven voor zekerheid.
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-green-600 font-semibold text-sm group-hover:text-green-700 transition-colors">
                      Bekijk details
                    </span>
                    <svg className="w-5 h-5 text-green-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>

              {/* Budget Energie */}
              <a
                href="/leveranciers/budget-energie"
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="bg-gradient-to-r from-orange-600 to-orange-700 p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                      <svg className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm font-semibold">4.3</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 font-montserrat">Budget Energie</h3>
                  <p className="text-white/90 text-sm">1 miljoen klanten</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    Budget Energie biedt voordelige energie tegen scherpe tarieven zonder opzegkosten.
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-green-600 font-semibold text-sm group-hover:text-green-700 transition-colors">
                      Bekijk details
                    </span>
                    <svg className="w-5 h-5 text-green-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>

              {/* Greenchoice */}
              <a
                href="/leveranciers/greenchoice"
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                      <svg className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm font-semibold">4.7</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 font-montserrat">Greenchoice</h3>
                  <p className="text-white/90 text-sm">600.000 klanten</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    Greenchoice is een 100% groene energieleverancier met focus op duurzaamheid.
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-green-600 font-semibold text-sm group-hover:text-green-700 transition-colors">
                      Bekijk details
                    </span>
                    <svg className="w-5 h-5 text-green-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Wat onze klanten zeggen Section */}
      <section className="bg-yellow-500 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-montserrat">
                Wat onze klanten zeggen
              </h2>
              <p className="text-lg text-white max-w-2xl mx-auto">
                Duizenden Nederlanders gingen je voor en besparen nu op hun energierekening.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Review 1 */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed flex-grow">
                  "Via Duurzaamgarant heb ik binnen 5 minuten de beste energiedeal gevonden. Ik bespaar nu €350 per jaar! Zeer tevreden met de service en het advies."
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100 mt-auto">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center text-white font-bold">
                    JD
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Jan de Vries</p>
                    <p className="text-sm text-gray-500">Amsterdam</p>
                  </div>
                </div>
              </div>

              {/* Review 2 */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed flex-grow">
                  "Fantastische ervaring! Het team heeft me geholpen om de perfecte groene energieleverancier te vinden. Mijn energierekening is met €280 per jaar gedaald."
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100 mt-auto">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center text-white font-bold">
                    MJ
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Maria Jansen</p>
                    <p className="text-sm text-gray-500">Rotterdam</p>
                  </div>
                </div>
              </div>

              {/* Review 3 */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed flex-grow">
                  "Zeer professioneel en snel! Ik had binnen een dag een overzicht van alle beschikbare tarieven. De overstap werd volledig geregeld, zonder gedoe."
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100 mt-auto">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center text-white font-bold">
                    PB
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Peter Bakker</p>
                    <p className="text-sm text-gray-500">Utrecht</p>
                  </div>
                </div>
              </div>

              {/* Review 4 */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed flex-grow">
                  "Eindelijk een vergelijkingssite die echt helpt! Ik bespaar nu €420 per jaar en heb gekozen voor 100% groene energie. Aanrader voor iedereen!"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100 mt-auto">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center text-white font-bold">
                    LS
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Lisa Smit</p>
                    <p className="text-sm text-gray-500">Den Haag</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}