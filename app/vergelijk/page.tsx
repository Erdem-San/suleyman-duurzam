'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ComparisonForm from '../components/ComparisonForm';
import Link from 'next/link';

export default function VergelijkPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{ 
            backgroundImage: 'url(/images/image15.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/60 via-green-700/60 to-green-800/60 z-10"></div>
        {/* Content */}
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-white/30 rounded-full px-4 py-2 mb-6 bg-white/10 backdrop-blur-sm">
              <svg className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-semibold text-white">Uitstekend 4.8/5 op Trustpilot</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white font-montserrat">
              Vergelijk Energie
              <span className="block text-white">
                en Bespaar
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-2xl mx-auto">
              Vergelijk alle energieleveranciers in Nederland en vind de beste deal. Bespaar tot wel <span className="font-bold text-white">€500 per jaar</span> op je energierekening.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-green-100">
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
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>60+ Leveranciers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="container mx-auto px-4 py-16 -mt-12 relative z-20" id="form">
        <div className="max-w-5xl mx-auto">
          {/* Cashback Badge */}
          <div className="flex justify-center mb-6">
            <div className="bg-yellow-400 rounded-full px-6 py-3 flex items-center gap-2 shadow-xl z-50 whitespace-nowrap">
              <svg className="w-5 h-5 text-yellow-900" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
              </svg>
              <span className="text-base font-bold text-yellow-900">TOT €500</span>
              <span className="text-sm font-semibold text-yellow-900">CASHBACK</span>
            </div>
          </div>

          {/* Form Container */}
          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              <ComparisonForm />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
                Waarom bij ons vergelijken?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Wij helpen je de beste energiedeal te vinden met onze uitgebreide vergelijkingstool
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-montserrat">Volledig Onafhankelijk</h3>
                <p className="text-gray-600 leading-relaxed">
                  Wij werken niet voor energieleveranciers. Onze vergelijking is 100% objectief en onafhankelijk.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-montserrat">Volledig Gratis</h3>
                <p className="text-gray-600 leading-relaxed">
                  Onze vergelijkingstool is volledig gratis. Geen verborgen kosten, geen abonnementen.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-montserrat">Snel & Eenvoudig</h3>
                <p className="text-gray-600 leading-relaxed">
                  Binnen 5 minuten heb je een overzicht van alle beschikbare energietarieven voor jouw situatie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
              Hoe werkt het?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              In 3 eenvoudige stappen vind je de beste energiedeal
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold shadow-lg">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-montserrat">Vul je gegevens in</h3>
              <p className="text-gray-600 leading-relaxed">
                Geef je postcode, huishoudgrootte en energieverbruik op. Dit duurt slechts 2 minuten.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold shadow-lg">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-montserrat">Vergelijk alle aanbiedingen</h3>
              <p className="text-gray-600 leading-relaxed">
                Bekijk alle beschikbare energietarieven van 60+ leveranciers op één overzichtelijke pagina.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold shadow-lg">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-montserrat">Kies en bespaar</h3>
              <p className="text-gray-600 leading-relaxed">
                Selecteer de beste deal en stap over. Wij regelen de overstap voor je, volledig gratis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat">
              Klaar om te besparen?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Start nu met vergelijken en vind de beste energiedeal voor jouw situatie
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#form"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Start Nu Vergelijken
              </a>
              <a
                href="tel:+31612345678"
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all"
              >
                Bel Ons Gratis
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

