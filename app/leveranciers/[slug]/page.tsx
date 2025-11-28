'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { useState } from 'react';

// Tüm leverancier verileri
const getAllLeveranciersData = () => {
  const baseData: { [key: string]: any } = {
    essent: {
      name: 'Essent',
      logo: '',
      customers: '3,3 miljoen',
      description: 'Essent is Nederland\'s grootste energieleverancier met meer dan 3,3 miljoen klanten. Met een breed aanbod aan energiecontracten, van vaste tot variabele tarieven, biedt Essent oplossingen voor elk huishouden.',
      rating: 4.5,
      features: ['Vaste tarieven beschikbaar', '100% groene energie opties', 'Online energiebeheer', 'Goede klantenservice', 'Flexibele contracten'],
      color: 'from-blue-600 to-blue-700',
      tarieven: { stroom: '€0,25 per kWh', gas: '€1,35 per m³', vastrecht: '€12,50 per maand' },
      voordelen: ['Grootste energieleverancier van Nederland', 'Betrouwbare service en goede reputatie', 'Breed scala aan energiecontracten', 'Online tools voor energiebeheer', 'Goede klantenservice'],
      nadelen: ['Niet altijd de scherpste tarieven', 'Sommige contracten hebben opzegkosten']
    },
    eneco: {
      name: 'Eneco',
      logo: '',
      customers: '2,5 miljoen',
      description: 'Eneco is een van de bekendste energieleveranciers van Nederland met een sterke focus op duurzame energie. Met 2,5 miljoen klanten biedt Eneco innovatieve energieoplossingen en zonnepanelen.',
      rating: 4.6,
      features: ['100% groene stroom', 'Dynamische tarieven', 'Zonnepanelen aanbod', 'Eneco App', 'Lokale energieproductie'],
      color: 'from-green-600 to-green-700',
      tarieven: { stroom: '€0,27 per kWh', gas: '€1,40 per m³', vastrecht: '€13,00 per maand' },
      voordelen: ['Sterke focus op duurzaamheid', 'Innovatieve energieoplossingen', 'Goede klantenservice', 'Zonnepanelen mogelijkheden', 'Dynamische tarieven voor flexibiliteit'],
      nadelen: ['Iets duurder dan budget leveranciers', 'Dynamische tarieven kunnen variëren']
    },
    vattenfall: {
      name: 'Vattenfall',
      logo: '',
      customers: '2 miljoen',
      description: 'Vattenfall is een Scandinavische energiereus met een sterke focus op duurzaamheid en windenergie. Met 2 miljoen Nederlandse klanten biedt Vattenfall betrouwbare energie tegen vaste tarieven.',
      rating: 4.4,
      features: ['Windenergie', 'Vaste prijzen', 'Goede service', 'Groene energie', 'Transparante tarieven'],
      color: 'from-cyan-600 to-cyan-700',
      tarieven: { stroom: '€0,26 per kWh', gas: '€1,38 per m³', vastrecht: '€12,75 per maand' },
      voordelen: ['Sterke focus op windenergie', 'Vaste tarieven voor zekerheid', 'Goede klantenservice', 'Transparante prijzen', 'Betrouwbare leverancier'],
      nadelen: ['Niet altijd de goedkoopste', 'Beperkte flexibiliteit in contracten']
    },
    'budget-energie': {
      name: 'Budget Energie',
      logo: '',
      customers: '1 miljoen',
      description: 'Budget Energie is onderdeel van de Nuts Groep en biedt voordelige energie tegen scherpe tarieven. Met 1 miljoen klanten is Budget Energie een populaire keuze voor huishoudens die willen besparen.',
      rating: 4.3,
      features: ['Lage tarieven', 'Geen opzegkosten', 'Flexibele contracten', 'Online beheer', 'Goede prijs-kwaliteit'],
      color: 'from-orange-600 to-orange-700',
      tarieven: { stroom: '€0,23 per kWh', gas: '€1,30 per m³', vastrecht: '€11,50 per maand' },
      voordelen: ['Zeer scherpe tarieven', 'Geen opzegkosten', 'Flexibele contracten', 'Goede prijs-kwaliteit verhouding', 'Eenvoudig online beheer'],
      nadelen: ['Minder focus op duurzaamheid', 'Basis klantenservice']
    },
    greenchoice: {
      name: 'Greenchoice',
      logo: '',
      customers: '600.000',
      description: 'Greenchoice is een 100% groene energieleverancier met focus op duurzaamheid en lokale energieproductie. Met 600.000 klanten is Greenchoice een populaire keuze voor milieubewuste consumenten.',
      rating: 4.7,
      features: ['100% groen', 'Lokale energie', 'CO2-neutraal', 'Zonnepanelen', 'Duurzame focus'],
      color: 'from-emerald-600 to-emerald-700',
      tarieven: { stroom: '€0,28 per kWh', gas: '€1,45 per m³', vastrecht: '€13,50 per maand' },
      voordelen: ['100% groene energie', 'Sterke focus op duurzaamheid', 'Lokale energieproductie', 'Uitstekende klantenservice', 'CO2-neutraal gas'],
      nadelen: ['Iets duurder dan gemiddeld', 'Minder flexibele contracten']
    },
    engie: {
      name: 'Engie',
      logo: '',
      customers: '800.000',
      description: 'Engie is een Franse energiereus met innovatieve energieoplossingen en goede service. Met 800.000 Nederlandse klanten biedt Engie betrouwbare energie en slimme energieoplossingen.',
      rating: 4.2,
      features: ['Innovatieve oplossingen', 'Goede klantenservice', 'Flexibele tarieven', 'Slimme meters', 'Online platform'],
      color: 'from-purple-600 to-purple-700',
      tarieven: { stroom: '€0,24 per kWh', gas: '€1,32 per m³', vastrecht: '€12,00 per maand' },
      voordelen: ['Innovatieve energieoplossingen', 'Goede klantenservice', 'Flexibele tarieven', 'Slimme energieoplossingen', 'Betrouwbare leverancier'],
      nadelen: ['Niet altijd de scherpste prijzen', 'Sommige diensten extra kosten']
    },
    oxxio: {
      name: 'Oxxio',
      logo: '',
      customers: '500.000',
      description: 'Oxxio is een Nederlandse energieleverancier met scherpe tarieven en transparante prijzen. Met 500.000 klanten biedt Oxxio eenvoudige energiecontracten zonder verborgen kosten.',
      rating: 4.1,
      features: ['Scherpe tarieven', 'Transparant', 'Nederlandse service', 'Geen verborgen kosten', 'Eenvoudig'],
      color: 'from-red-600 to-red-700',
      tarieven: { stroom: '€0,22 per kWh', gas: '€1,28 per m³', vastrecht: '€11,00 per maand' },
      voordelen: ['Zeer scherpe tarieven', 'Transparante prijzen', 'Nederlandse klantenservice', 'Geen verborgen kosten', 'Eenvoudige contracten'],
      nadelen: ['Basis service niveau', 'Beperkte duurzame opties']
    },
    'pure-energie': {
      name: 'Pure Energie',
      logo: '',
      customers: '400.000',
      description: 'Pure Energie is een 100% Nederlandse groene energieleverancier met lokale productie. Met 400.000 klanten biedt Pure Energie duurzame energie van Nederlandse bodem.',
      rating: 4.5,
      features: ['100% Nederlands', 'Lokale productie', 'Groene energie', 'Zonnepanelen', 'Duurzaam'],
      color: 'from-yellow-600 to-yellow-700',
      tarieven: { stroom: '€0,27 per kWh', gas: '€1,42 per m³', vastrecht: '€13,25 per maand' },
      voordelen: ['100% Nederlandse energie', 'Lokale productie', 'Sterke duurzame focus', 'Goede klantenservice', 'Transparante herkomst'],
      nadelen: ['Iets duurder dan gemiddeld', 'Beperkte contractopties']
    },
    vandebron: {
      name: 'Vandebron',
      logo: '',
      customers: '300.000',
      description: 'Vandebron verbindt consumenten direct met lokale energieproducenten. Met 300.000 klanten biedt Vandebron transparante, lokale energie zonder tussenpersonen.',
      rating: 4.6,
      features: ['Direct van producent', 'Lokaal', 'Transparant', 'Groene energie', 'Unieke aanpak'],
      color: 'from-teal-600 to-teal-700',
      tarieven: { stroom: '€0,26 per kWh', gas: '€1,38 per m³', vastrecht: '€12,50 per maand' },
      voordelen: ['Directe verbinding met producenten', 'Lokale energieproductie', 'Zeer transparant', 'Unieke aanpak', 'Goede klantenservice'],
      nadelen: ['Kleinere leverancier', 'Beperkte beschikbaarheid']
    },
    energiedirect: {
      name: 'Energiedirect',
      logo: '',
      customers: '350.000',
      description: 'Energiedirect is een online energieleverancier met scherpe tarieven en eenvoudig beheer. Met 350.000 klanten biedt Energiedirect betaalbare energie zonder gedoe.',
      rating: 4.0,
      features: ['Online beheer', 'Scherpe tarieven', 'Eenvoudig', 'Geen opzegkosten', 'Flexibel'],
      color: 'from-indigo-600 to-indigo-700',
      tarieven: { stroom: '€0,23 per kWh', gas: '€1,30 per m³', vastrecht: '€11,75 per maand' },
      voordelen: ['Scherpe tarieven', 'Eenvoudig online beheer', 'Geen opzegkosten', 'Flexibele contracten', 'Goede prijs-kwaliteit'],
      nadelen: ['Basis klantenservice', 'Minder persoonlijk contact']
    },
    'frank-energie': {
      name: 'Frank Energie',
      logo: '',
      customers: '200.000',
      description: 'Frank Energie is een moderne energieleverancier met dynamische tarieven en app-beheer. Met 200.000 klanten biedt Frank Energie transparante, real-time energieprijzen.',
      rating: 4.4,
      features: ['Dynamische tarieven', 'App', 'Transparant', 'Real-time prijzen', 'Modern'],
      color: 'from-pink-600 to-pink-700',
      tarieven: { stroom: '€0,25 per kWh (variabel)', gas: '€1,35 per m³ (variabel)', vastrecht: '€12,00 per maand' },
      voordelen: ['Dynamische tarieven', 'Moderne app', 'Transparante real-time prijzen', 'Flexibele aanpak', 'Goede gebruikerservaring'],
      nadelen: ['Dynamische tarieven kunnen variëren', 'Kleinere leverancier']
    },
    mega: {
      name: 'Mega',
      logo: '',
      customers: '250.000',
      description: 'Mega is een energieleverancier met focus op betaalbare energie en goede service. Met 250.000 klanten biedt Mega eenvoudige energiecontracten tegen scherpe tarieven.',
      rating: 4.2,
      features: ['Betaalbaar', 'Goede service', 'Flexibel', 'Eenvoudig', 'Betrouwbaar'],
      color: 'from-amber-600 to-amber-700',
      tarieven: { stroom: '€0,24 per kWh', gas: '€1,33 per m³', vastrecht: '€12,25 per maand' },
      voordelen: ['Betaalbare tarieven', 'Goede klantenservice', 'Flexibele contracten', 'Eenvoudig beheer', 'Betrouwbare leverancier'],
      nadelen: ['Minder focus op duurzaamheid', 'Basis service niveau']
    }
  };

  // Particuliere leveranciers
  const particuliere = [
    '365-energie', 'anwb-energie', 'clean-energy', 'delta-energie', 'easyenergy',
    'energie-vanons', 'energiedirect-nl', 'energyzero', 'groenestroomlokaal',
    'groenpand', 'gulf-gas-plus-power', 'hallostroom', 'huismerk-energie',
    'nextenergy', 'om-nieuwe-energie', 'powerpeers', 'tibber', 'unitedconsumers',
    'woonenergie', 'zonneplan'
  ];

  // Zakelijke leveranciers
  const zakelijke = [
    'budget-energie-zakelijk', 'delta-energie-zakelijk', 'eneco-zakelijk',
    'engie-zakelijk', 'essent-zakelijk', 'greenchoice-zakelijk',
    'pure-energie-zakelijk', 'totalenergies-zakelijk', 'vandebron-zakelijk',
    'vattenfall-zakelijk'
  ];

  // Grootzakelijke leveranciers
  const grootzakelijke = [
    'eneco-large-business', 'engie-large-business', 'essent-grootzakelijk',
    'greenchoice-grootzakelijk', 'scholt-energy', 'shell-energy-eu',
    'totalenergies-large-business', 'vattenfall-grootzakelijk'
  ];

  // Default data generator
  const getDefaultData = (name: string, type: 'particulier' | 'zakelijk' | 'grootzakelijk' = 'particulier') => {
    const baseName = name.replace(/-zakelijk$/, '').replace(/-grootzakelijk$/, '').replace(/-large-business$/, '');
    const displayName = name
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (l) => l.toUpperCase())
      .replace(/Zakelijk/g, 'Zakelijk')
      .replace(/Grootzakelijk/g, 'Grootzakelijk')
      .replace(/Large Business/g, 'Large Business');

    return {
      name: displayName,
      logo: '',
      customers: type === 'grootzakelijk' ? 'Grootverbruik' : type === 'zakelijk' ? 'Zakelijk' : 'Particulier',
      description: `${displayName} is een energieleverancier die ${type === 'grootzakelijk' ? 'gespecialiseerd is in grootzakelijke energieoplossingen' : type === 'zakelijk' ? 'energiecontracten aanbiedt voor MKB en ZZP' : 'energiecontracten aanbiedt voor particulieren'}.`,
      rating: 4.0,
      features: ['Betrouwbare levering', 'Goede service', 'Flexibele contracten', 'Online beheer', 'Competitieve tarieven'],
      color: 'from-green-600 to-green-700',
      tarieven: { stroom: '€0,25 per kWh', gas: '€1,35 per m³', vastrecht: '€12,50 per maand' },
      voordelen: ['Betrouwbare leverancier', 'Goede service', 'Flexibele contracten'],
      nadelen: ['Contacteer voor actuele tarieven', 'Beschikbaarheid kan variëren']
    };
  };

  // Add all particuliere
  particuliere.forEach(slug => {
    if (!baseData[slug]) {
      baseData[slug] = getDefaultData(slug, 'particulier');
    }
  });

  // Add all zakelijke
  zakelijke.forEach(slug => {
    if (!baseData[slug]) {
      baseData[slug] = getDefaultData(slug, 'zakelijk');
    }
  });

  // Add all grootzakelijke
  grootzakelijke.forEach(slug => {
    if (!baseData[slug]) {
      baseData[slug] = getDefaultData(slug, 'grootzakelijk');
    }
  });

  return baseData;
};

const leveranciersData = getAllLeveranciersData();

// Default yorumlar
const getDefaultReviews = (slug: string) => {
  const reviews: { [key: string]: Array<{ name: string; rating: number; comment: string; date: string }> } = {
    essent: [
      { name: 'Jan de Vries', rating: 5, comment: 'Uitstekende service en betrouwbare levering. Zeer tevreden!', date: '2 weken geleden' },
      { name: 'Maria Jansen', rating: 4, comment: 'Goede tarieven en makkelijk online beheer.', date: '1 maand geleden' },
      { name: 'Peter Bakker', rating: 4, comment: 'Klantenservice reageert snel op vragen.', date: '3 weken geleden' }
    ],
    eneco: [
      { name: 'Lisa van der Berg', rating: 5, comment: '100% groene energie en goede app. Aanrader!', date: '1 week geleden' },
      { name: 'Tom Smit', rating: 4, comment: 'Dynamische tarieven werken goed voor ons.', date: '2 maanden geleden' }
    ]
  };
  return reviews[slug] || [
    { name: 'Anoniem', rating: 4, comment: 'Goede service en betrouwbare leverancier.', date: '1 maand geleden' }
  ];
};

export default function LeverancierDetailPage({ params }: { params: Promise<{ slug: string }> | { slug: string } }) {
  const slug = typeof params === 'object' && 'then' in params ? '' : params.slug;
  const leverancier = leveranciersData[slug];
  const [reviews, setReviews] = useState(getDefaultReviews(slug));
  const [newReview, setNewReview] = useState({ name: '', rating: 5, comment: '' });
  const [showReviewForm, setShowReviewForm] = useState(false);

  if (!leverancier) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Leverancier niet gevonden</h1>
          <Link href="/leveranciers" className="text-green-600 hover:text-green-700">
            Terug naar leveranciers
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (newReview.name && newReview.comment) {
      setReviews([{
        ...newReview,
        date: 'Vandaag'
      }, ...reviews]);
      setNewReview({ name: '', rating: 5, comment: '' });
      setShowReviewForm(false);
    }
  };

  const averageRating = reviews.length > 0
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
    : leverancier.rating.toFixed(1);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className={`bg-gradient-to-r ${leverancier.color} text-white py-16`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl font-bold mb-2 font-montserrat">{leverancier.name}</h1>
              <p className="text-white/90 text-lg">{leverancier.customers} klanten</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`w-5 h-5 ${star <= Math.round(parseFloat(averageRating)) ? 'text-yellow-300' : 'text-white/30'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="font-semibold text-lg ml-2">{averageRating} / 5.0</span>
              </div>
              <span className="text-white/80 text-sm">({reviews.length} {reviews.length === 1 ? 'beoordeling' : 'beoordelingen'})</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Description */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-montserrat">Over {leverancier.name}</h2>
            <p className="text-gray-600 leading-relaxed text-lg">{leverancier.description}</p>
          </div>

          {/* Tarieven */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 font-montserrat">Tarieven</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="text-sm text-gray-600 mb-2">Stroom</div>
                <div className="text-2xl font-bold text-gray-900">{leverancier.tarieven.stroom}</div>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="text-sm text-gray-600 mb-2">Gas</div>
                <div className="text-2xl font-bold text-gray-900">{leverancier.tarieven.gas}</div>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="text-sm text-gray-600 mb-2">Vastrecht</div>
                <div className="text-2xl font-bold text-gray-900">{leverancier.tarieven.vastrecht}</div>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">* Tarieven kunnen variëren per contracttype en regio</p>
          </div>

          {/* Features */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 font-montserrat">Kenmerken</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {leverancier.features.map((feature: string, index: number) => (
                <div key={index} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Voordelen en Nadelen */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 font-montserrat">Voordelen</h2>
              <ul className="space-y-3">
                {leverancier.voordelen.map((voordeel: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{voordeel}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 font-montserrat">Nadelen</h2>
              <ul className="space-y-3">
                {leverancier.nadelen.map((nadeel: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{nadeel}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 font-montserrat">Beoordelingen</h2>
              <button
                onClick={() => setShowReviewForm(!showReviewForm)}
                className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-all"
              >
                {showReviewForm ? 'Annuleren' : 'Beoordeling Toevoegen'}
              </button>
            </div>

            {/* Review Form */}
            {showReviewForm && (
              <form onSubmit={handleSubmitReview} className="bg-gray-50 rounded-lg p-6 mb-6">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Naam</label>
                  <input
                    type="text"
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Beoordeling</label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setNewReview({ ...newReview, rating: star })}
                        className="focus:outline-none"
                      >
                        <svg
                          className={`w-8 h-8 ${star <= newReview.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Jouw beoordeling</label>
                  <textarea
                    value={newReview.comment}
                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    rows={4}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-all"
                >
                  Beoordeling Verzenden
                </button>
              </form>
            )}

            {/* Reviews List */}
            <div className="space-y-6">
              {reviews.map((review, index) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">{review.name}</div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                              key={star}
                              className={`w-4 h-4 ${star <= review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 mt-2">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl shadow-lg p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4 font-montserrat">Klaar om over te stappen?</h2>
            <p className="text-green-100 mb-6">Vergelijk {leverancier.name} met andere leveranciers en vind de beste deal</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#vergelijk"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-all"
              >
                Start Vergelijken
              </Link>
              <Link
                href="/leveranciers"
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all"
              >
                Bekijk Alle Leveranciers
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
