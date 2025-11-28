'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    naam: '',
    email: '',
    telefoon: '',
    onderwerp: '',
    bericht: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Form submit logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-16 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
          style={{ backgroundImage: 'url(/images/image10.jpg)' }}
        ></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/40 via-green-700/40 to-green-800/40"></div>
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
              Contact
            </h1>
            <p className="text-xl text-green-100">
              Neem contact met ons op voor al uw vragen
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Sol Taraf - Bereik Ons */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-montserrat">
                Bereik Ons
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                We geloven dat het zeer belangrijk is dat onze klanten en zakelijke partners constant tevreden zijn met onze diensten! Daarom staat ons klantenserviceteam elke dag tot uw beschikking om al uw vragen en/of opmerkingen te beantwoorden. Heeft u vragen of opmerkingen over onze diensten of onze zakelijke partnerschappen? Neem contact met ons op, laat ons uw vraag zo snel mogelijk beantwoorden.
              </p>

              {/* Contact Cards */}
              <div className="space-y-6">
                {/* E-mail */}
                <a
                  href="mailto:info@duurzaamgarant.nl"
                  className="flex items-start gap-4 p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-green-600 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1 font-montserrat">E-mail</h3>
                    <p className="text-gray-600">info@duurzaamgarant.nl</p>
                  </div>
                </a>

                {/* Telefoon */}
                <a
                  href="tel:+31612345678"
                  className="flex items-start gap-4 p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-green-600 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1 font-montserrat">Telefoon</h3>
                    <p className="text-gray-600">+31 6 12345678</p>
                  </div>
                </a>

                {/* Adres */}
                <div className="flex items-start gap-4 p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-green-600 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1 font-montserrat">Adres</h3>
                    <p className="text-gray-600">Hambakenwetering 1</p>
                    <p className="text-gray-600">5231 DD 's-Hertogenbosch</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sağ Taraf - Contact Form */}
            <div className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 rounded-xl p-8 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-montserrat">
                Stuur Bericht
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Volledige Naam */}
                <div>
                  <label htmlFor="naam" className="block text-sm font-semibold text-white mb-2">
                    Volledige Naam *
                  </label>
                  <input
                    type="text"
                    id="naam"
                    name="naam"
                    value={formData.naam}
                    onChange={handleChange}
                    placeholder="Uw naam en achternaam"
                    required
                    className="w-full px-4 py-3 border-2 border-white/30 bg-white/10 backdrop-blur-sm rounded-lg focus:ring-2 focus:ring-white focus:border-white transition-all text-white placeholder:text-white/70"
                  />
                </div>

                {/* E-mail */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="voorbeeld@email.com"
                    required
                    className="w-full px-4 py-3 border-2 border-white/30 bg-white/10 backdrop-blur-sm rounded-lg focus:ring-2 focus:ring-white focus:border-white transition-all text-white placeholder:text-white/70"
                  />
                </div>

                {/* Telefoon */}
                <div>
                  <label htmlFor="telefoon" className="block text-sm font-semibold text-white mb-2">
                    Telefoon
                  </label>
                  <input
                    type="tel"
                    id="telefoon"
                    name="telefoon"
                    value={formData.telefoon}
                    onChange={handleChange}
                    placeholder="+31 6 12345678"
                    className="w-full px-4 py-3 border-2 border-white/30 bg-white/10 backdrop-blur-sm rounded-lg focus:ring-2 focus:ring-white focus:border-white transition-all text-white placeholder:text-white/70"
                  />
                </div>

                {/* Onderwerp */}
                <div>
                  <label htmlFor="onderwerp" className="block text-sm font-semibold text-white mb-2">
                    Onderwerp *
                  </label>
                  <input
                    type="text"
                    id="onderwerp"
                    name="onderwerp"
                    value={formData.onderwerp}
                    onChange={handleChange}
                    placeholder="Berichtonderwerp"
                    required
                    className="w-full px-4 py-3 border-2 border-white/30 bg-white/10 backdrop-blur-sm rounded-lg focus:ring-2 focus:ring-white focus:border-white transition-all text-white placeholder:text-white/70"
                  />
                </div>

                {/* Uw Bericht */}
                <div>
                  <label htmlFor="bericht" className="block text-sm font-semibold text-white mb-2">
                    Uw Bericht *
                  </label>
                  <textarea
                    id="bericht"
                    name="bericht"
                    value={formData.bericht}
                    onChange={handleChange}
                    placeholder="Schrijf hier uw bericht..."
                    rows={6}
                    required
                    className="w-full px-4 py-3 border-2 border-white/30 bg-white/10 backdrop-blur-sm rounded-lg focus:ring-2 focus:ring-white focus:border-white transition-all text-white placeholder:text-white/70 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Bericht Verzenden
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps?q=Hambakenwetering+1,+5231+DD+'s-Hertogenbosch&hl=nl&z=14&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

