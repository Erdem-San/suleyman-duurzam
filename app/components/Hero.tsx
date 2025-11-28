import ComparisonForm from './ComparisonForm';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Sol Taraf - Yazılar */}
          <div className="text-left flex-shrink-0 pt-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-white/30 rounded-full px-4 py-2 mb-6 bg-white/10 backdrop-blur-sm">
              <svg className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-semibold text-white">Uitstekend 4.8/5 op Trustpilot</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
              Vind de beste
              <span className="block text-white">
                energietarieven
              </span>
              voor jouw situatie
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-xl">
              Vergelijk alle energieleveranciers en bespaar tot wel <span className="font-bold text-white">€500 per jaar</span> op je energierekening
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="/vergelijk"
                className="w-full sm:w-auto bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Start Vergelijken
              </a>
              <a
                href="tel:+31612345678"
                className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all"
              >
                Bel Ons Gratis
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 text-sm text-green-100">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>100% Onafhankelijk</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Volledig Gratis</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Binnen 5 Minuten</span>
              </div>
            </div>
          </div>

          {/* Sağ Taraf - Form */}
          <div className="flex justify-end w-full self-start sticky top-4 relative">
            {/* Cashback Badge - Hero ile Form Arası */}
            <div className="absolute -top-6 right-0 bg-yellow-500 rounded-full px-4 py-2 flex items-center gap-2 shadow-lg z-50 whitespace-nowrap">
              <svg className="w-5 h-5 text-yellow-900" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
              </svg>
              <span className="text-sm font-bold text-yellow-900">TOT €500</span>
              <span className="text-xs font-semibold text-yellow-900">CASHBACK</span>
            </div>
            <ComparisonForm />
          </div>
        </div>
      </div>
    </section>
  );
}
