import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Starting seed...');

    // Categories oluştur
    const categories = await Promise.all([
        prisma.leverancierCategory.upsert({
            where: { slug: 'particulier' },
            update: {},
            create: {
                name: 'Particulier',
                slug: 'particulier',
                description: 'Energieleveranciers voor particulieren en huishoudens'
            }
        }),
        prisma.leverancierCategory.upsert({
            where: { slug: 'zakelijk' },
            update: {},
            create: {
                name: 'Zakelijk',
                slug: 'zakelijk',
                description: 'Energieleveranciers voor MKB en ZZP'
            }
        }),
        prisma.leverancierCategory.upsert({
            where: { slug: 'grootzakelijk' },
            update: {},
            create: {
                name: 'Grootzakelijk',
                slug: 'grootzakelijk',
                description: 'Energieleveranciers voor grootverbruik en grote bedrijven'
            }
        })
    ]);

    console.log('✅ Categories created');

    // Leveranciers data
    const leveranciersData = [
        // Populaire leveranciers met volledige details
        {
            name: 'Essent',
            slug: 'essent',
            customers: '3,3 miljoen',
            description: 'Essent is de grootste energieleverancier van Nederland met meer dan 3,3 miljoen klanten. Ze bieden zowel vaste als variabele tarieven aan en hebben een breed scala aan energiecontracten. Essent staat bekend om betrouwbare service en goede klantenservice.',
            rating: 4.5,
            features: ['Vaste en variabele tarieven', '100% groene energie opties', 'Essent App voor energiebeheer', 'Goede klantenservice', 'Breed aanbod contracten'],
            color: 'from-blue-600 to-blue-700',
            stroom: '€0,25 per kWh',
            gas: '€1,35 per m³',
            vastrecht: '€12,50 per maand',
            voordelen: ['Grootste energieleverancier van Nederland', 'Betrouwbare service en goede reputatie', 'Breed scala aan energiecontracten', 'Online tools voor energiebeheer', 'Goede klantenservice'],
            nadelen: ['Niet altijd de scherpste tarieven', 'Sommige contracten hebben opzegkosten'],
            categorySlug: 'particulier'
        },
        {
            name: 'Eneco',
            slug: 'eneco',
            customers: '2,5 miljoen',
            description: 'Eneco is een van de bekendste energieleveranciers van Nederland met 2,5 miljoen klanten. Ze focussen sterk op duurzame energie en bieden innovatieve oplossingen zoals zonnepanelen en dynamische tarieven. Eneco produceert zelf groene energie in Nederland.',
            rating: 4.6,
            features: ['100% groene stroom van eigen productie', 'Dynamische tarieven beschikbaar', 'Zonnepanelen aanbod', 'Eneco App met real-time inzicht', 'Lokale energieproductie'],
            color: 'from-green-600 to-green-700',
            stroom: '€0,27 per kWh',
            gas: '€1,40 per m³',
            vastrecht: '€13,00 per maand',
            voordelen: ['Sterke focus op duurzaamheid', 'Innovatieve energieoplossingen', 'Goede klantenservice', 'Zonnepanelen mogelijkheden', 'Dynamische tarieven voor flexibiliteit'],
            nadelen: ['Iets duurder dan budget leveranciers', 'Dynamische tarieven kunnen variëren'],
            categorySlug: 'particulier'
        },
        {
            name: 'Vattenfall',
            slug: 'vattenfall',
            customers: '2 miljoen',
            description: 'Vattenfall is een Scandinavische energiereus met 2 miljoen Nederlandse klanten. Ze zijn gespecialiseerd in windenergie en bieden vaste tarieven voor zekerheid. Vattenfall investeert sterk in duurzame energie en heeft een goede reputatie voor betrouwbaarheid.',
            rating: 4.4,
            features: ['Windenergie specialist', 'Vaste prijzen voor zekerheid', 'Uitstekende klantenservice', '100% groene energie opties', 'Transparante tarieven'],
            color: 'from-cyan-600 to-cyan-700',
            stroom: '€0,26 per kWh',
            gas: '€1,38 per m³',
            vastrecht: '€12,75 per maand',
            voordelen: ['Sterke focus op windenergie', 'Vaste tarieven voor zekerheid', 'Goede klantenservice', 'Transparante prijzen', 'Betrouwbare leverancier'],
            nadelen: ['Niet altijd de goedkoopste', 'Beperkte flexibiliteit in contracten'],
            categorySlug: 'particulier'
        },
        {
            name: 'Budget Energie',
            slug: 'budget-energie',
            customers: '1 miljoen',
            description: 'Budget Energie is onderdeel van de Nuts Groep en biedt voordelige energie tegen scherpe tarieven. Met 1 miljoen klanten is Budget Energie een populaire keuze voor huishoudens die willen besparen. Ze bieden flexibele contracten zonder opzegkosten.',
            rating: 4.3,
            features: ['Zeer scherpe tarieven', 'Geen opzegkosten', 'Flexibele contractduur', 'Online energiebeheer', 'Goede prijs-kwaliteit verhouding'],
            color: 'from-orange-600 to-orange-700',
            stroom: '€0,23 per kWh',
            gas: '€1,30 per m³',
            vastrecht: '€11,50 per maand',
            voordelen: ['Zeer scherpe tarieven', 'Geen opzegkosten', 'Flexibele contracten', 'Goede prijs-kwaliteit verhouding', 'Eenvoudig online beheer'],
            nadelen: ['Minder focus op duurzaamheid', 'Basis klantenservice'],
            categorySlug: 'particulier'
        },
        {
            name: 'Greenchoice',
            slug: 'greenchoice',
            customers: '600.000',
            description: 'Greenchoice is een 100% groene energieleverancier met focus op duurzaamheid en lokale energieproductie. Met 600.000 klanten is Greenchoice een populaire keuze voor milieubewuste consumenten. Ze bieden CO2-neutraal gas en lokale groene stroom.',
            rating: 4.7,
            features: ['100% groene energie', 'Lokale energieproductie', 'CO2-neutraal gas', 'Zonnepanelen mogelijkheden', 'Sterke duurzame focus'],
            color: 'from-emerald-600 to-emerald-700',
            stroom: '€0,28 per kWh',
            gas: '€1,45 per m³',
            vastrecht: '€13,50 per maand',
            voordelen: ['100% groene energie', 'Sterke focus op duurzaamheid', 'Lokale energieproductie', 'Uitstekende klantenservice', 'CO2-neutraal gas'],
            nadelen: ['Iets duurder dan gemiddeld', 'Minder flexibele contracten'],
            categorySlug: 'particulier'
        },
        {
            name: 'Engie',
            slug: 'engie',
            customers: '800.000',
            description: 'Engie is een Franse energiereus met 800.000 Nederlandse klanten. Ze bieden innovatieve energieoplossingen en goede service. Engie heeft slimme energieoplossingen en een gebruiksvriendelijk online platform voor energiebeheer.',
            rating: 4.2,
            features: ['Innovatieve energieoplossingen', 'Uitstekende klantenservice', 'Flexibele tarieven', 'Slimme meters ondersteuning', 'Gebruiksvriendelijk online platform'],
            color: 'from-purple-600 to-purple-700',
            stroom: '€0,24 per kWh',
            gas: '€1,32 per m³',
            vastrecht: '€12,00 per maand',
            voordelen: ['Innovatieve energieoplossingen', 'Goede klantenservice', 'Flexibele tarieven', 'Slimme energieoplossingen', 'Betrouwbare leverancier'],
            nadelen: ['Niet altijd de scherpste prijzen', 'Sommige diensten extra kosten'],
            categorySlug: 'particulier'
        },
        {
            name: 'Oxxio',
            slug: 'oxxio',
            customers: '500.000',
            description: 'Oxxio is een Nederlandse energieleverancier met 500.000 klanten. Ze staan bekend om scherpe tarieven en transparante prijzen zonder verborgen kosten. Oxxio biedt eenvoudige energiecontracten met goede Nederlandse klantenservice.',
            rating: 4.1,
            features: ['Zeer scherpe tarieven', 'Volledig transparante prijzen', 'Nederlandse klantenservice', 'Geen verborgen kosten', 'Eenvoudige contracten'],
            color: 'from-red-600 to-red-700',
            stroom: '€0,22 per kWh',
            gas: '€1,28 per m³',
            vastrecht: '€11,00 per maand',
            voordelen: ['Zeer scherpe tarieven', 'Transparante prijzen', 'Nederlandse klantenservice', 'Geen verborgen kosten', 'Eenvoudige contracten'],
            nadelen: ['Basis service niveau', 'Beperkte duurzame opties'],
            categorySlug: 'particulier'
        },
        {
            name: 'Pure Energie',
            slug: 'pure-energie',
            customers: '400.000',
            description: 'Pure Energie is een 100% Nederlandse groene energieleverancier met 400.000 klanten. Ze produceren energie lokaal in Nederland en bieden transparante herkomst van energie. Pure Energie heeft een sterke focus op duurzaamheid en lokale productie.',
            rating: 4.5,
            features: ['100% Nederlandse energie', 'Lokale energieproductie', 'Transparante herkomst', 'Groene energie', 'Goede klantenservice'],
            color: 'from-yellow-600 to-yellow-700',
            stroom: '€0,27 per kWh',
            gas: '€1,42 per m³',
            vastrecht: '€13,25 per maand',
            voordelen: ['100% Nederlandse energie', 'Lokale productie', 'Sterke duurzame focus', 'Goede klantenservice', 'Transparante herkomst'],
            nadelen: ['Iets duurder dan gemiddeld', 'Beperkte contractopties'],
            categorySlug: 'particulier'
        },
        {
            name: 'Vandebron',
            slug: 'vandebron',
            customers: '300.000',
            description: 'Vandebron verbindt consumenten direct met lokale energieproducenten zonder tussenpersonen. Met 300.000 klanten biedt Vandebron transparante, lokale energie. Je weet precies van welke producent je energie komt.',
            rating: 4.6,
            features: ['Direct van producent', 'Lokale energieproductie', 'Zeer transparant', '100% groene energie', 'Unieke aanpak'],
            color: 'from-teal-600 to-teal-700',
            stroom: '€0,26 per kWh',
            gas: '€1,38 per m³',
            vastrecht: '€12,50 per maand',
            voordelen: ['Directe verbinding met producenten', 'Lokale energieproductie', 'Zeer transparant', 'Unieke aanpak', 'Goede klantenservice'],
            nadelen: ['Kleinere leverancier', 'Beperkte beschikbaarheid'],
            categorySlug: 'particulier'
        },
        {
            name: 'Energiedirect',
            slug: 'energiedirect',
            customers: '350.000',
            description: 'Energiedirect is een online energieleverancier met 350.000 klanten. Ze bieden scherpe tarieven en eenvoudig online beheer. Energiedirect heeft geen opzegkosten en biedt flexibele contracten voor betaalbare energie.',
            rating: 4.0,
            features: ['Scherpe tarieven', 'Eenvoudig online beheer', 'Geen opzegkosten', 'Flexibele contracten', 'Goede prijs-kwaliteit'],
            color: 'from-indigo-600 to-indigo-700',
            stroom: '€0,23 per kWh',
            gas: '€1,30 per m³',
            vastrecht: '€11,75 per maand',
            voordelen: ['Scherpe tarieven', 'Eenvoudig online beheer', 'Geen opzegkosten', 'Flexibele contracten', 'Goede prijs-kwaliteit'],
            nadelen: ['Basis klantenservice', 'Minder persoonlijk contact'],
            categorySlug: 'particulier'
        },
        {
            name: 'Frank Energie',
            slug: 'frank-energie',
            customers: '200.000',
            description: 'Frank Energie is een moderne energieleverancier met 200.000 klanten. Ze bieden dynamische tarieven en real-time energieprijzen via hun app. Frank Energie is transparant en biedt flexibiliteit met variabele tarieven.',
            rating: 4.4,
            features: ['Dynamische tarieven', 'Frank App met real-time prijzen', 'Volledig transparant', 'Flexibele aanpak', 'Moderne gebruikerservaring'],
            color: 'from-pink-600 to-pink-700',
            stroom: '€0,25 per kWh (variabel)',
            gas: '€1,35 per m³ (variabel)',
            vastrecht: '€12,00 per maand',
            voordelen: ['Dynamische tarieven', 'Moderne app', 'Transparante real-time prijzen', 'Flexibele aanpak', 'Goede gebruikerservaring'],
            nadelen: ['Dynamische tarieven kunnen variëren', 'Kleinere leverancier'],
            categorySlug: 'particulier'
        },
        {
            name: 'Mega',
            slug: 'mega',
            customers: '250.000',
            description: 'Mega is een energieleverancier met focus op betaalbare energie en goede service. Met 250.000 klanten biedt Mega eenvoudige energiecontracten tegen scherpe tarieven. Ze hebben flexibele contracten en goed online beheer.',
            rating: 4.2,
            features: ['Betaalbare tarieven', 'Goede klantenservice', 'Flexibele contracten', 'Eenvoudig beheer', 'Betrouwbare leverancier'],
            color: 'from-amber-600 to-amber-700',
            stroom: '€0,24 per kWh',
            gas: '€1,33 per m³',
            vastrecht: '€12,25 per maand',
            voordelen: ['Betaalbare tarieven', 'Goede klantenservice', 'Flexibele contracten', 'Eenvoudig beheer', 'Betrouwbare leverancier'],
            nadelen: ['Minder focus op duurzaamheid', 'Basis service niveau'],
            categorySlug: 'particulier'
        }
    ];

    // Particuliere leveranciers isimleri (yukarıdakiler hariç)
    const particuliereNames = [
        '365 Energie', 'ANWB Energie', 'Clean Energy', 'DELTA Energie', 'EasyEnergy',
        'Energie VanOns', 'energiedirect.nl', 'EnergyZero', 'GroeneStroomLokaal',
        'Groenpand', 'Gulf Gas + Power', 'HalloStroom', 'Huismerk Energie',
        'NextEnergy', 'OM | Nieuwe Energie', 'Powerpeers', 'Tibber', 'UnitedConsumers',
        'WoonEnergie', 'Zonneplan'
    ];

    // Zakelijke leveranciers
    const zakelijkeNames = [
        'Budget Energie Zakelijk', 'Delta Energie Zakelijk', 'Eneco Zakelijk',
        'ENGIE Zakelijk', 'Essent Zakelijk', 'Greenchoice Zakelijk',
        'Pure Energie Zakelijk', 'TotalEnergies Zakelijk', 'Vandebron Zakelijk',
        'Vattenfall Zakelijk'
    ];

    // Grootzakelijke leveranciers
    const grootzakelijkeNames = [
        'Eneco Large Business', 'ENGIE Large Business', 'Essent Grootzakelijk',
        'Greenchoice Grootzakelijk', 'Scholt Energy', 'Shell Energy EU',
        'TotalEnergies Large Business', 'Vattenfall Grootzakelijk'
    ];

    // Default veri generator
    const createDefaultLeverancier = (name: string, categorySlug: string) => {
        const slug = name.toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/\./g, '')
            .replace(/\|/g, '')
            .replace(/\+/g, 'plus')
            .replace(/\//g, '-')
            .trim();

        return {
            name,
            slug,
            customers: categorySlug === 'grootzakelijk' ? 'Grootverbruik' : categorySlug === 'zakelijk' ? 'Zakelijk' : 'Particulier',
            description: `${name} is een energieleverancier die ${categorySlug === 'grootzakelijk' ? 'gespecialiseerd is in grootzakelijke energieoplossingen' : categorySlug === 'zakelijk' ? 'energiecontracten aanbiedt voor MKB en ZZP' : 'energiecontracten aanbiedt voor particulieren'}.`,
            rating: 4.0,
            features: ['Betrouwbare levering', 'Goede service', 'Flexibele contracten', 'Online beheer', 'Competitieve tarieven'],
            color: 'from-green-600 to-green-700',
            stroom: '€0,25 per kWh',
            gas: '€1,35 per m³',
            vastrecht: '€12,50 per maand',
            voordelen: ['Betrouwbare leverancier', 'Goede service', 'Flexibele contracten'],
            nadelen: ['Contacteer voor actuele tarieven', 'Beschikbaarheid kan variëren'],
            categorySlug
        };
    };

    // Tüm leveranciers'ı ekle
    const allLeveranciers = [
        ...leveranciersData,
        ...particuliereNames.map(name => createDefaultLeverancier(name, 'particulier')),
        ...zakelijkeNames.map(name => createDefaultLeverancier(name, 'zakelijk')),
        ...grootzakelijkeNames.map(name => createDefaultLeverancier(name, 'grootzakelijk'))
    ];

    // Categories map oluştur
    const categoriesMap: Record<string, string> = {
        'particulier': categories[0].id,
        'zakelijk': categories[1].id,
        'grootzakelijk': categories[2].id
    };

    // Leveranciers'ı database'e ekle
    for (const leverancier of allLeveranciers) {
        await prisma.leverancier.upsert({
            where: { slug: leverancier.slug },
            update: {},
            create: {
                name: leverancier.name,
                slug: leverancier.slug,
                customers: leverancier.customers,
                description: leverancier.description,
                rating: leverancier.rating,
                features: leverancier.features,
                color: leverancier.color,
                stroom: leverancier.stroom,
                gas: leverancier.gas,
                vastrecht: leverancier.vastrecht,
                voordelen: leverancier.voordelen,
                nadelen: leverancier.nadelen,
                categoryId: categoriesMap[leverancier.categorySlug],
                published: true
            }
        });
    }

    console.log(`✅ ${allLeveranciers.length} Leveranciers created`);
    console.log('🌱 Seed completed successfully!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
