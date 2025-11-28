import Header from '../components/Header';
import Footer from '../components/Footer';

export default function OverOnsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-16 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
          style={{ backgroundImage: 'url(/images/image9.jpg)' }}
        ></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/40 via-green-700/40 to-green-800/40"></div>
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
              Over Ons
            </h1>
            <p className="text-xl text-green-100">
              Duurzaam Garant - Jouw partner in verduurzaming
            </p>
          </div>
        </div>
      </section>

      {/* Wie Zijn Wij Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-8">
            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="/images/image7.webp"
                alt="Ons Team"
                className="w-full h-auto rounded-xl object-cover shadow-lg transform group-hover:scale-110 transition duration-500 ease-in-out"
              />
            </div>
            <div className="relative">
              <div className="mb-6">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-montserrat leading-tight">
                  Wie Zijn Wij
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-green-700 rounded-full"></div>
              </div>
              <div className="space-y-5 text-gray-700 leading-relaxed text-lg">
                <p className="text-gray-800 font-medium">
                  Duurzaam Garant is ontstaan vanuit de gedachte dat je woning op veel manieren kan worden verduurzaamd en je energierekening op veel manieren kan worden verlaagd.
                </p>
                <p>
                  Een duurzame woning zorgt voor een betere wereld, voor lagere maandlasten en voor meer wooncomfort. En als het een beetje meezit, maakt het de waarde van je woning ook nog hoger. Dat maakt het leven leuker! Daarom willen wij zoveel mogelijk huizen verduurzamen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ons Verhaal Section */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-5 gap-12 items-center">
              <div className="md:col-span-2 order-2 md:order-1">
                <div className="space-y-6 text-white leading-relaxed">
                  <p className="text-xl md:text-2xl font-medium">
                    Er zijn zo veel mogelijkheden om je huis te verduurzamen, dat je als huiseigenaar wel wat hulp kunt gebruiken. Die hulp bieden wij. Door je zonder gedoe van een persoonlijk en helder advies te voorzien. Maar ook door je betrouwbare producten tegen een scherpe prijs aan te bieden en door te zorgen voor een feilloze installatie bij jou thuis.
                  </p>
                  <p className="text-lg md:text-xl text-white/95">
                    Zet nu ook de eerste stap naar een duurzamer huis en start met de scan voor een gratis advies. Meer weten? Ons team staat voor je klaar!
                  </p>
                </div>
              </div>
              <div className="md:col-span-3 relative order-1 md:order-2 group overflow-hidden rounded-xl ml-16 md:ml-28">
                <img
                  src="/images/image8.jpg"
                  alt="Ons Verhaal"
                  className="w-full h-auto rounded-xl shadow-2xl object-cover transform group-hover:scale-110 transition duration-500 ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ons Kantoor Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center font-montserrat">
            Ons Kantoor
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden">
                <img
                  src="/images/image3.png"
                  alt="Ons Kantoor"
                  className="w-full h-auto object-cover"
                />
                <div className="bg-gradient-to-t from-black/70 to-transparent absolute bottom-0 left-0 right-0 p-8">
                  <h4 className="text-white text-2xl font-bold mb-2 font-montserrat">Ons Kantoor</h4>
                  <p className="text-green-100">Duurzaam Garant Team</p>
                  <p className="text-white/80 text-sm mt-2">Ons kantoor waar we werken aan een duurzamere toekomst</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat">Klaar om te verduurzamen?</h2>
            <p className="text-xl text-green-100 mb-8">
              Start vandaag nog met een gratis advies en ontdek hoe je je woning kunt verduurzamen
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#vergelijk"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition-all shadow-lg"
              >
                Start Gratis Scan
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
