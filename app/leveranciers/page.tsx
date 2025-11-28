import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

const leveranciers = [
  {
    id: 'essent',
    name: 'Essent',
    logo: '',
    customers: '3,3 miljoen',
    description: 'Essent is de grootste energieleverancier van Nederland met meer dan 3,3 miljoen klanten. Ze bieden zowel vaste als variabele tarieven aan en hebben een breed scala aan energiecontracten. Essent staat bekend om betrouwbare service en goede klantenservice.',
    rating: 4.5,
    features: ['Vaste en variabele tarieven', '100% groene energie opties', 'Essent App voor energiebeheer', 'Goede klantenservice', 'Breed aanbod contracten'],
    color: 'from-blue-600 to-blue-700',
    stroom: '€0,25 per kWh',
    gas: '€1,35 per m³',
    vastrecht: '€12,50 per maand'
  },
  {
    id: 'eneco',
    name: 'Eneco',
    logo: '',
    customers: '2,5 miljoen',
    description: 'Eneco is een van de bekendste energieleveranciers van Nederland met 2,5 miljoen klanten. Ze focussen sterk op duurzame energie en bieden innovatieve oplossingen zoals zonnepanelen en dynamische tarieven. Eneco produceert zelf groene energie in Nederland.',
    rating: 4.6,
    features: ['100% groene stroom van eigen productie', 'Dynamische tarieven beschikbaar', 'Zonnepanelen aanbod', 'Eneco App met real-time inzicht', 'Lokale energieproductie'],
    color: 'from-green-600 to-green-700',
    stroom: '€0,27 per kWh',
    gas: '€1,40 per m³',
    vastrecht: '€13,00 per maand'
  },
  {
    id: 'vattenfall',
    name: 'Vattenfall',
    logo: '',
    customers: '2 miljoen',
    description: 'Vattenfall is een Scandinavische energiereus met 2 miljoen Nederlandse klanten. Ze zijn gespecialiseerd in windenergie en bieden vaste tarieven voor zekerheid. Vattenfall investeert sterk in duurzame energie en heeft een goede reputatie voor betrouwbaarheid.',
    rating: 4.4,
    features: ['Windenergie specialist', 'Vaste prijzen voor zekerheid', 'Uitstekende klantenservice', '100% groene energie opties', 'Transparante tarieven'],
    color: 'from-cyan-600 to-cyan-700',
    stroom: '€0,26 per kWh',
    gas: '€1,38 per m³',
    vastrecht: '€12,75 per maand'
  },
  {
    id: 'budget-energie',
    name: 'Budget Energie',
    logo: '',
    customers: '1 miljoen',
    description: 'Budget Energie is onderdeel van de Nuts Groep en biedt voordelige energie tegen scherpe tarieven. Met 1 miljoen klanten is Budget Energie een populaire keuze voor huishoudens die willen besparen. Ze bieden flexibele contracten zonder opzegkosten.',
    rating: 4.3,
    features: ['Zeer scherpe tarieven', 'Geen opzegkosten', 'Flexibele contractduur', 'Online energiebeheer', 'Goede prijs-kwaliteit verhouding'],
    color: 'from-orange-600 to-orange-700',
    stroom: '€0,23 per kWh',
    gas: '€1,30 per m³',
    vastrecht: '€11,50 per maand'
  },
  {
    id: 'greenchoice',
    name: 'Greenchoice',
    logo: '',
    customers: '600.000',
    description: 'Greenchoice is een 100% groene energieleverancier met focus op duurzaamheid en lokale energieproductie. Met 600.000 klanten is Greenchoice een populaire keuze voor milieubewuste consumenten. Ze bieden CO2-neutraal gas en lokale groene stroom.',
    rating: 4.7,
    features: ['100% groene energie', 'Lokale energieproductie', 'CO2-neutraal gas', 'Zonnepanelen mogelijkheden', 'Sterke duurzame focus'],
    color: 'from-emerald-600 to-emerald-700',
    stroom: '€0,28 per kWh',
    gas: '€1,45 per m³',
    vastrecht: '€13,50 per maand'
  },
  {
    id: 'engie',
    name: 'Engie',
    logo: '',
    customers: '800.000',
    description: 'Engie is een Franse energiereus met 800.000 Nederlandse klanten. Ze bieden innovatieve energieoplossingen en goede service. Engie heeft slimme energieoplossingen en een gebruiksvriendelijk online platform voor energiebeheer.',
    rating: 4.2,
    features: ['Innovatieve energieoplossingen', 'Uitstekende klantenservice', 'Flexibele tarieven', 'Slimme meters ondersteuning', 'Gebruiksvriendelijk online platform'],
    color: 'from-purple-600 to-purple-700',
    stroom: '€0,24 per kWh',
    gas: '€1,32 per m³',
    vastrecht: '€12,00 per maand'
  },
  {
    id: 'oxxio',
    name: 'Oxxio',
    logo: '',
    customers: '500.000',
    description: 'Oxxio is een Nederlandse energieleverancier met 500.000 klanten. Ze staan bekend om scherpe tarieven en transparante prijzen zonder verborgen kosten. Oxxio biedt eenvoudige energiecontracten met goede Nederlandse klantenservice.',
    rating: 4.1,
    features: ['Zeer scherpe tarieven', 'Volledig transparante prijzen', 'Nederlandse klantenservice', 'Geen verborgen kosten', 'Eenvoudige contracten'],
    color: 'from-red-600 to-red-700',
    stroom: '€0,22 per kWh',
    gas: '€1,28 per m³',
    vastrecht: '€11,00 per maand'
  },
  {
    id: 'pure-energie',
    name: 'Pure Energie',
    logo: '',
    customers: '400.000',
    description: 'Pure Energie is een 100% Nederlandse groene energieleverancier met 400.000 klanten. Ze produceren energie lokaal in Nederland en bieden transparante herkomst van energie. Pure Energie heeft een sterke focus op duurzaamheid en lokale productie.',
    rating: 4.5,
    features: ['100% Nederlandse energie', 'Lokale energieproductie', 'Transparante herkomst', 'Groene energie', 'Goede klantenservice'],
    color: 'from-yellow-600 to-yellow-700',
    stroom: '€0,27 per kWh',
    gas: '€1,42 per m³',
    vastrecht: '€13,25 per maand'
  },
  {
    id: 'vandebron',
    name: 'Vandebron',
    logo: '',
    customers: '300.000',
    description: 'Vandebron verbindt consumenten direct met lokale energieproducenten zonder tussenpersonen. Met 300.000 klanten biedt Vandebron transparante, lokale energie. Je weet precies van welke producent je energie komt.',
    rating: 4.6,
    features: ['Direct van producent', 'Lokale energieproductie', 'Zeer transparant', '100% groene energie', 'Unieke aanpak'],
    color: 'from-teal-600 to-teal-700',
    stroom: '€0,26 per kWh',
    gas: '€1,38 per m³',
    vastrecht: '€12,50 per maand'
  },
  {
    id: 'energiedirect',
    name: 'Energiedirect',
    logo: '',
    customers: '350.000',
    description: 'Energiedirect is een online energieleverancier met 350.000 klanten. Ze bieden scherpe tarieven en eenvoudig online beheer. Energiedirect heeft geen opzegkosten en biedt flexibele contracten voor betaalbare energie.',
    rating: 4.0,
    features: ['Scherpe tarieven', 'Eenvoudig online beheer', 'Geen opzegkosten', 'Flexibele contracten', 'Goede prijs-kwaliteit'],
    color: 'from-indigo-600 to-indigo-700',
    stroom: '€0,23 per kWh',
    gas: '€1,30 per m³',
    vastrecht: '€11,75 per maand'
  },
  {
    id: 'frank-energie',
    name: 'Frank Energie',
    logo: '',
    customers: '200.000',
    description: 'Frank Energie is een moderne energieleverancier met 200.000 klanten. Ze bieden dynamische tarieven en real-time energieprijzen via hun app. Frank Energie is transparant en biedt flexibiliteit met variabele tarieven.',
    rating: 4.4,
    features: ['Dynamische tarieven', 'Frank App met real-time prijzen', 'Volledig transparant', 'Flexibele aanpak', 'Moderne gebruikerservaring'],
    color: 'from-pink-600 to-pink-700',
    stroom: '€0,25 per kWh (variabel)',
    gas: '€1,35 per m³ (variabel)',
    vastrecht: '€12,00 per maand'
  },
  {
    id: 'mega',
    name: 'Mega',
    logo: '',
    customers: '250.000',
    description: 'Mega is een energieleverancier met focus op betaalbare energie en goede service. Met 250.000 klanten biedt Mega eenvoudige energiecontracten tegen scherpe tarieven. Ze hebben flexibele contracten en goed online beheer.',
    rating: 4.2,
    features: ['Betaalbare tarieven', 'Goede klantenservice', 'Flexibele contracten', 'Eenvoudig beheer', 'Betrouwbare leverancier'],
    color: 'from-amber-600 to-amber-700',
    stroom: '€0,24 per kWh',
    gas: '€1,33 per m³',
    vastrecht: '€12,25 per maand'
  }
];

export default function LeveranciersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-16 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{ 
            backgroundImage: 'url(/images/image16.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/60 via-green-700/60 to-green-800/60 z-10"></div>
        {/* Content */}
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Alle Energieleveranciers in Nederland
            </h1>
            <p className="text-xl text-green-100 mb-8">
              Vergelijk alle energieleveranciers en vind de beste deal voor jouw situatie
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="font-semibold">60+</span> Leveranciers
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="font-semibold">100%</span> Onafhankelijk
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="font-semibold">Gratis</span> Vergelijken
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Particuliere Energieleveranciers */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
            Particuliere Energieleveranciers
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Vind de beste energiedeal voor thuis. Vergelijk alle particuliere energieleveranciers op prijs, duurzaamheid en service. Stap vandaag nog over en bespaar honderden euro's op je energierekening.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
          {[
            '365 Energie',
            'ANWB Energie',
            'Budget Energie',
            'Clean Energy',
            'DELTA Energie',
            'EasyEnergy',
            'Eneco',
            'Energie VanOns',
            'energiedirect.nl',
            'EnergyZero',
            'Engie',
            'Essent',
            'Frank Energie',
            'Greenchoice',
            'GroeneStroomLokaal',
            'Groenpand',
            'Gulf Gas + Power',
            'HalloStroom',
            'Huismerk Energie',
            'Mega',
            'NextEnergy',
            'OM | Nieuwe Energie',
            'Oxxio',
            'Powerpeers',
            'Pure Energie',
            'Tibber',
            'UnitedConsumers',
            'Vandebron',
            'Vattenfall',
            'WoonEnergie',
            'Zonneplan'
          ].map((name) => {
            const slug = name.toLowerCase()
              .replace(/\s+/g, '-')
              .replace(/\./g, '')
              .replace(/\|/g, '')
              .replace(/\+/g, 'plus')
              .replace(/\//g, '-')
              .trim();
            
            return (
              <Link
                key={slug}
                href={`/leveranciers/${slug}`}
                className="bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-green-600 hover:shadow-lg transition-all duration-200 text-center group"
              >
                <div className="font-semibold text-gray-900 text-sm group-hover:text-green-600 transition-colors font-montserrat">
                  {name}
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA Button - Centered */}
        <div className="flex justify-center mb-16">
          <Link
            href="/particulier"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-green-700 hover:to-green-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-montserrat"
          >
            <span>Vergelijk Particuliere Energie</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Zakelijke Energieleveranciers */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
            Zakelijke Energieleveranciers (MKB & ZZP)
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Optimaliseer je zakelijke energiekosten. Vergelijk alle energieleveranciers voor MKB en ZZP. Ontvang advies op maat en vind het scherpste zakelijke energiecontract.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[
              'Budget Energie Zakelijk',
              'Delta Energie Zakelijk',
              'Eneco Zakelijk',
              'ENGIE Zakelijk',
              'Essent Zakelijk',
              'Greenchoice Zakelijk',
              'Pure Energie Zakelijk',
              'TotalEnergies Zakelijk',
              'Vandebron Zakelijk',
              'Vattenfall Zakelijk'
            ].map((name) => {
              const slug = name.toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/\./g, '')
                .replace(/\|/g, '')
                .replace(/\+/g, 'plus')
                .replace(/\//g, '-')
                .trim();
              
              return (
                <Link
                  key={slug}
                  href={`/leveranciers/${slug}`}
                  className="bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-green-600 hover:shadow-lg transition-all duration-200 text-center group"
                >
                  <div className="font-semibold text-gray-900 text-sm group-hover:text-green-600 transition-colors font-montserrat">
                    {name}
                  </div>
                </Link>
              );
            })}
          </div>

          {/* CTA Button - Centered */}
          <div className="flex justify-center mt-8">
            <Link
              href="/zakelijk"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-green-700 hover:to-green-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-montserrat"
            >
              <span>Vergelijk Zakelijke Energie</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Grootzakelijke Energieleveranciers */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
            Grootzakelijke Energieleveranciers
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Krijg grip op de energiemarkt voor grootverbruik. Een overzicht van alle specialisten voor grootzakelijke energie. Wij helpen met tenders, inkoopstrategieën en duurzaamheidsdoelstellingen.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[
              'Eneco Large Business',
              'ENGIE Large Business',
              'Essent Grootzakelijk',
              'Greenchoice Grootzakelijk',
              'Scholt Energy',
              'Shell Energy EU',
              'TotalEnergies Large Business',
              'Vattenfall Grootzakelijk'
            ].map((name) => {
              const slug = name.toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/\./g, '')
                .replace(/\|/g, '')
                .replace(/\+/g, 'plus')
                .replace(/\//g, '-')
                .trim();
              
              return (
                <Link
                  key={slug}
                  href={`/leveranciers/${slug}`}
                  className="bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-green-600 hover:shadow-lg transition-all duration-200 text-center group"
                >
                  <div className="font-semibold text-gray-900 text-sm group-hover:text-green-600 transition-colors font-montserrat">
                    {name}
                  </div>
                </Link>
              );
            })}
          </div>

          {/* CTA Button - Centered */}
          <div className="flex justify-center mt-8">
            <Link
              href="/grootzakelijk"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-green-700 hover:to-green-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-montserrat"
            >
              <span>Advies voor Grootverbruik</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
            Populaire Energieleveranciers
          </h2>
          <p className="text-gray-600 text-lg">
            Ontdek de beste energieleveranciers van Nederland en vergelijk hun aanbiedingen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leveranciers.map((leverancier) => (
            <Link
              key={leverancier.id}
              href={`/leveranciers/${leverancier.id}`}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className={`bg-gradient-to-r ${leverancier.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                    <svg className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-semibold">{leverancier.rating}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2 font-montserrat">{leverancier.name}</h3>
                <p className="text-white/90 text-sm">{leverancier.customers} klanten</p>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {leverancier.description}
                </p>
                
                {/* Tarieven */}
                <div className="bg-gray-50 rounded-lg p-3 mb-4">
                  <div className="text-xs text-gray-500 mb-2 font-semibold">Vanaf tarieven:</div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-gray-600">Stroom:</span>
                      <span className="font-semibold text-gray-900 ml-1">{leverancier.stroom}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Gas:</span>
                      <span className="font-semibold text-gray-900 ml-1">{leverancier.gas}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  {leverancier.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-green-600 font-semibold text-sm group-hover:text-green-700 transition-colors">
                    Bekijk details
                  </span>
                  <svg className="w-5 h-5 text-green-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-montserrat">
              Hoe kies je de beste energieleverancier?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2 font-montserrat">Vergelijk Tarieven</h3>
                <p className="text-gray-600 text-sm">
                  Bekijk en vergelijk de tarieven van alle leveranciers om de beste prijs te vinden
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2 font-montserrat">Check Beoordelingen</h3>
                <p className="text-gray-600 text-sm">
                  Lees klantbeoordelingen en ervaringen om de beste service te vinden
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2 font-montserrat">Kies Contract</h3>
                <p className="text-gray-600 text-sm">
                  Selecteer het contracttype dat het beste bij jouw situatie past
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

