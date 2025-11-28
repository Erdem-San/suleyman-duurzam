import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4 w-full">
              <img
                src="/images/logo1.png"
                alt="Duurzaamgarant Logo"
                className="h-20 w-auto max-w-[320px] object-contain brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 text-sm mb-4 text-center md:text-left">
              Onafhankelijk advies voor de beste energietarieven. Wij helpen je besparen op je energierekening.
            </p>
            <div className="flex gap-3 justify-center md:justify-start w-full">
              <a 
                href="https://instagram.com/duurzaamgarant" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 group"
              >
                <svg className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.26 1.699-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://twitter.com/duurzaamgarant" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 group"
              >
                <svg className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com/company/duurzaamgarant" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 group"
              >
                <svg className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4 text-white">Snelle Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-orange-400 transition-colors">
                  Particulier
                </Link>
              </li>
              <li>
                <Link href="/zakelijk" className="hover:text-orange-400 transition-colors">
                  Zakelijk
                </Link>
              </li>
              <li>
                <Link href="/grootzakelijk" className="hover:text-orange-400 transition-colors">
                  Grootzakelijk
                </Link>
              </li>
              <li>
                <Link href="/vergelijk" className="hover:text-orange-400 transition-colors">
                  Vergelijk
                </Link>
              </li>
              <li>
                <Link href="/leveranciers" className="hover:text-orange-400 transition-colors">
                  Leveranciers
                </Link>
              </li>
              <li>
                <Link href="/over-ons" className="hover:text-orange-400 transition-colors">
                  Over Ons
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-orange-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Providers */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-bold text-lg mb-4 text-white">Populaire Leveranciers</h3>
            <ul className="grid grid-cols-4 gap-x-4 gap-y-2 text-gray-400">
              <li>
                <Link href="/leveranciers/365-energie" className="hover:text-orange-400 transition-colors text-sm">
                  365 Energie
                </Link>
              </li>
              <li>
                <Link href="/leveranciers/anwb-energie" className="hover:text-orange-400 transition-colors text-sm">
                  ANWB Energie
                </Link>
              </li>
              <li>
                <Link href="/leveranciers/budget-energie" className="hover:text-orange-400 transition-colors text-sm">
                  Budget Energie
                </Link>
              </li>
              <li>
                <Link href="/leveranciers/clean-energy" className="hover:text-orange-400 transition-colors text-sm">
                  Clean Energy
                </Link>
              </li>
              <li>
                <Link href="/leveranciers/delta-energie" className="hover:text-orange-400 transition-colors text-sm">
                  DELTA Energie
                </Link>
              </li>
              <li>
                <Link href="/leveranciers/easyenergy" className="hover:text-orange-400 transition-colors text-sm">
                  EasyEnergy
                </Link>
              </li>
              <li>
                <Link href="/leveranciers/eneco" className="hover:text-orange-400 transition-colors text-sm">
                  Eneco
                </Link>
              </li>
              <li>
                <Link href="/leveranciers/energie-vanons" className="hover:text-orange-400 transition-colors text-sm">
                  Energie VanOns
                </Link>
              </li>
              <li>
                <Link href="/leveranciers/energiedirect-nl" className="hover:text-orange-400 transition-colors text-sm">
                  energiedirect.nl
                </Link>
              </li>
              <li>
                <Link href="/leveranciers/energyzero" className="hover:text-orange-400 transition-colors text-sm">
                  EnergyZero
                </Link>
              </li>
              <li>
                <Link href="/leveranciers/engie" className="hover:text-orange-400 transition-colors text-sm">
                  Engie
                </Link>
              </li>
              <li>
                <Link href="/leveranciers/essent" className="hover:text-orange-400 transition-colors text-sm">
                  Essent
                </Link>
              </li>
              <li>
                <Link href="/leveranciers/frank-energie" className="hover:text-orange-400 transition-colors text-sm">
                  Frank Energie
                </Link>
              </li>
              <li>
                <Link href="/leveranciers/greenchoice" className="hover:text-orange-400 transition-colors text-sm">
                  Greenchoice
                </Link>
              </li>
              <li>
                <Link href="/leveranciers/groenestroomlokaal" className="hover:text-orange-400 transition-colors text-sm">
                  GroeneStroomLokaal
                </Link>
              </li>
              <li>
                <Link href="/leveranciers/groenpand" className="hover:text-orange-400 transition-colors text-sm">
                  Groenpand
                </Link>
              </li>
              <li>
                <Link href="/leveranciers/gulf-gas-power" className="hover:text-orange-400 transition-colors text-sm">
                  Gulf Gas + Power
                </Link>
              </li>
              <li>
                <Link href="/leveranciers/hallostroom" className="hover:text-orange-400 transition-colors text-sm">
                  HalloStroom
                </Link>
              </li>
              <li>
                <Link href="/leveranciers/huismerk-energie" className="hover:text-orange-400 transition-colors text-sm">
                  Huismerk Energie
                </Link>
              </li>
              <li>
                <Link href="/leveranciers/mega" className="hover:text-orange-400 transition-colors text-sm">
                  Mega
                </Link>
              </li>
              <li>
                <Link href="/leveranciers/nextenergy" className="hover:text-orange-400 transition-colors text-sm">
                  NextEnergy
                </Link>
              </li>
              <li>
                <Link href="/leveranciers/om-nieuwe-energie" className="hover:text-orange-400 transition-colors text-sm">
                  OM | Nieuwe Energie
                </Link>
              </li>
              <li>
                <Link href="/leveranciers/oxxio" className="hover:text-orange-400 transition-colors text-sm">
                  Oxxio
                </Link>
              </li>
              <li>
                <Link href="/leveranciers/powerpeers" className="hover:text-orange-400 transition-colors text-sm">
                  Powerpeers
                </Link>
              </li>
              <li>
                <Link href="/leveranciers/pure-energie" className="hover:text-orange-400 transition-colors text-sm">
                  Pure Energie
                </Link>
              </li>
              <li>
                <Link href="/leveranciers/tibber" className="hover:text-orange-400 transition-colors text-sm">
                  Tibber
                </Link>
              </li>
              <li>
                <Link href="/leveranciers/unitedconsumers" className="hover:text-orange-400 transition-colors text-sm">
                  UnitedConsumers
                </Link>
              </li>
              <li>
                <Link href="/leveranciers/vandebron" className="hover:text-orange-400 transition-colors text-sm">
                  Vandebron
                </Link>
              </li>
              <li>
                <Link href="/leveranciers/vattenfall" className="hover:text-orange-400 transition-colors text-sm">
                  Vattenfall
                </Link>
              </li>
              <li>
                <Link href="/leveranciers/woonenergie" className="hover:text-orange-400 transition-colors text-sm">
                  WoonEnergie
                </Link>
              </li>
              <li>
                <Link href="/leveranciers/zonneplan" className="hover:text-orange-400 transition-colors text-sm">
                  Zonneplan
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Contact Info - Above the line */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start gap-6 md:gap-8 text-gray-400">
            {/* Telefoon */}
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+31612345678" className="hover:text-orange-400 transition-colors">
                +31 6 12345678
              </a>
            </div>
            {/* Email */}
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:info@duurzaamgarant.nl" className="hover:text-orange-400 transition-colors">
                info@duurzaamgarant.nl
              </a>
            </div>
            {/* Adres */}
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Hambakenwetering 1, 5231 DD 's-Hertogenbosch</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2025 Duurzaamgarant. Alle rechten voorbehouden.</p>
            <div className="flex gap-6">
              <Link href="/privacybeleid" className="hover:text-orange-400 transition-colors">
                Privacybeleid
              </Link>
              <Link href="/algemene-voorwaarden" className="hover:text-orange-400 transition-colors">
                Algemene Voorwaarden
              </Link>
              <Link href="/cookies" className="hover:text-orange-400 transition-colors">
                Cookiebeleid
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
