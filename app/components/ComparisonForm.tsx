'use client';

import { useState, useMemo } from 'react';
import { usePathname } from 'next/navigation';

export default function ComparisonForm() {
  const pathname = usePathname();
  
  // Her render'da localStorage'dan currentHome değerini oku
  // Bu sayede Header'daki değişiklikler anında yansır
  const getCurrentHome = () => {
    if (typeof window === 'undefined') return '/';
    
    // Önce pathname'e göre belirle
    if (pathname?.startsWith('/zakelijk')) {
      return '/zakelijk';
    } else if (pathname?.startsWith('/grootzakelijk')) {
      return '/grootzakelijk';
    } else {
      // localStorage'dan oku
      const storedHome = localStorage.getItem('currentHome');
      return storedHome || '/';
    }
  };
  
  // currentHome'u her render'da güncelle
  const currentHomeValue = getCurrentHome();
  
  // Leverancier seçenekleri currentHomeValue'ya göre memoize et
  const leveranciers = useMemo(() => {
    let source = 'particulier';
    
    if (currentHomeValue === '/zakelijk' || pathname?.startsWith('/zakelijk')) {
      source = 'zakelijk';
    } else if (currentHomeValue === '/grootzakelijk' || pathname?.startsWith('/grootzakelijk')) {
      source = 'grootzakelijk';
    } else {
      source = 'particulier';
    }
    
    if (source === 'zakelijk') {
      return [
        { value: 'budget-energie-zakelijk', label: 'Budget Energie Zakelijk' },
        { value: 'delta-energie-zakelijk', label: 'Delta Energie Zakelijk' },
        { value: 'eneco-zakelijk', label: 'Eneco Zakelijk' },
        { value: 'engie-zakelijk', label: 'ENGIE Zakelijk' },
        { value: 'essent-zakelijk', label: 'Essent Zakelijk' },
        { value: 'greenchoice-zakelijk', label: 'Greenchoice Zakelijk' },
        { value: 'pure-energie-zakelijk', label: 'Pure Energie Zakelijk' },
        { value: 'totalenergies-zakelijk', label: 'TotalEnergies Zakelijk' },
        { value: 'vandebron-zakelijk', label: 'Vandebron Zakelijk' },
        { value: 'vattenfall-zakelijk', label: 'Vattenfall Zakelijk' },
      ];
    } else if (source === 'grootzakelijk') {
      return [
        { value: 'eneco-large-business', label: 'Eneco Large Business' },
        { value: 'engie-large-business', label: 'ENGIE Large Business' },
        { value: 'essent-grootzakelijk', label: 'Essent Grootzakelijk' },
        { value: 'greenchoice-grootzakelijk', label: 'Greenchoice Grootzakelijk' },
        { value: 'scholt-energy', label: 'Scholt Energy' },
        { value: 'shell-energy-eu', label: 'Shell Energy EU' },
        { value: 'totalenergies-large-business', label: 'TotalEnergies Large Business' },
        { value: 'vattenfall-grootzakelijk', label: 'Vattenfall Grootzakelijk' },
      ];
    } else {
      // Particulier (default)
      return [
        { value: '365-energie', label: '365 Energie' },
        { value: 'anwb-energie', label: 'ANWB Energie' },
        { value: 'budget-energie', label: 'Budget Energie' },
        { value: 'clean-energy', label: 'Clean Energy' },
        { value: 'delta-energie', label: 'DELTA Energie' },
        { value: 'easyenergy', label: 'EasyEnergy' },
        { value: 'eneco', label: 'Eneco' },
        { value: 'energie-vanons', label: 'Energie VanOns' },
        { value: 'energiedirect-nl', label: 'energiedirect.nl' },
        { value: 'energyzero', label: 'EnergyZero' },
        { value: 'engie', label: 'Engie' },
        { value: 'essent', label: 'Essent' },
        { value: 'frank-energie', label: 'Frank Energie' },
        { value: 'greenchoice', label: 'Greenchoice' },
        { value: 'groenestroomlokaal', label: 'GroeneStroomLokaal' },
        { value: 'groenpand', label: 'Groenpand' },
        { value: 'gulf-gas-power', label: 'Gulf Gas + Power' },
        { value: 'hallostroom', label: 'HalloStroom' },
        { value: 'huismerk-energie', label: 'Huismerk Energie' },
        { value: 'mega', label: 'Mega' },
        { value: 'nextenergy', label: 'NextEnergy' },
        { value: 'om-nieuwe-energie', label: 'OM | Nieuwe Energie' },
        { value: 'oxxio', label: 'Oxxio' },
        { value: 'powerpeers', label: 'Powerpeers' },
        { value: 'pure-energie', label: 'Pure Energie' },
        { value: 'tibber', label: 'Tibber' },
        { value: 'unitedconsumers', label: 'UnitedConsumers' },
      ];
    }
  }, [currentHomeValue, pathname]);
  const [formData, setFormData] = useState({
    postcode: '',
    huisnummer: '',
    toevoeging: '',
    leverancier: '',
    huishouden: '2',
    zonnepanelen: 0,
  });

  const [estimatedUsage, setEstimatedUsage] = useState({
    stroom: '2.300',
    gas: '1.000',
  });

  const [showManualInput, setShowManualInput] = useState(false);
  const [manualUsage, setManualUsage] = useState({
    stroom: '',
    gas: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const updateZonnepanelen = (delta: number) => {
    const newValue = Math.max(0, formData.zonnepanelen + delta);
    setFormData({ ...formData, zonnepanelen: newValue });
  };

  const calculateUsage = () => {
    const baseStroom = parseInt(formData.huishouden) * 1150;
    const baseGas = parseInt(formData.huishouden) * 500;
    setEstimatedUsage({
      stroom: baseStroom.toLocaleString('nl-NL'),
      gas: baseGas.toLocaleString('nl-NL'),
    });
  };

  const resetForm = () => {
    setFormData({
      postcode: '',
      huisnummer: '',
      toevoeging: '',
      leverancier: '',
      huishouden: '2',
      zonnepanelen: 0,
    });
    setEstimatedUsage({
      stroom: '2.300',
      gas: '1.000',
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-2xl relative self-start max-h-[90vh] overflow-y-auto overflow-x-hidden flex-shrink-0">

      {/* Başlık */}
      <div className="flex items-center gap-3 mb-6 flex-nowrap">
        <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center flex-shrink-0">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h2 className="text-xl font-bold text-gray-900 whitespace-nowrap font-montserrat">Vergelijk het volledige energieaanbod</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Adres Bilgileri */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Postcode</label>
            <input
              type="text"
              placeholder="1234AB"
              value={formData.postcode}
              onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 placeholder:text-gray-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Huisnr.</label>
            <input
              type="text"
              placeholder="10"
              value={formData.huisnummer}
              onChange={(e) => setFormData({ ...formData, huisnummer: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 placeholder:text-gray-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Toev.</label>
            <input
              type="text"
              placeholder="A"
              value={formData.toevoeging}
              onChange={(e) => setFormData({ ...formData, toevoeging: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 placeholder:text-gray-300"
            />
          </div>
        </div>

        {/* Mevcut Sağlayıcı */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Huidige leverancier
            </label>
            <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="relative">
            <select
              value={formData.leverancier}
              onChange={(e) => setFormData({ ...formData, leverancier: e.target.value })}
              className={`w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none bg-white ${
                formData.leverancier ? 'text-gray-900' : 'text-gray-400'
              }`}
            >
              <option value="" disabled>Kies je leverancier...</option>
              {leveranciers.map((leverancier) => (
                <option key={leverancier.value} value={leverancier.value}>
                  {leverancier.label}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Hane Büyüklüğü ve Güneş Paneli - Yan Yana */}
        <div className="grid grid-cols-2 gap-6">
          {/* Hane Büyüklüğü */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Grootte van je huishouden
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((num) => (
                <label
                  key={num}
                  className={`flex-1 cursor-pointer border-2 rounded-lg p-3 text-center transition-all ${
                    formData.huishouden === num.toString()
                      ? 'border-blue-600 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-gray-300 text-gray-900 bg-white'
                  }`}
                >
                  <input
                    type="radio"
                    name="huishouden"
                    value={num}
                    checked={formData.huishouden === num.toString()}
                    onChange={(e) => {
                      setFormData({ ...formData, huishouden: e.target.value });
                      calculateUsage();
                    }}
                    className="hidden"
                  />
                  <span className="text-lg font-semibold">{num}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Güneş Paneli */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Aantal zonnepanelen
            </label>
            <div className="flex items-center border-2 border-gray-200 rounded-lg overflow-hidden">
              <button
                type="button"
                onClick={() => updateZonnepanelen(-1)}
                className="w-12 h-12 flex items-center justify-center border-r border-gray-200 hover:bg-gray-50 text-gray-700 flex-shrink-0"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              </button>
              <div className="flex-1 flex items-center justify-center gap-2 py-3 pr-4">
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="5" fill="currentColor"/>
                  <path d="M12 1v4M12 19v4M23 12h-4M5 12H1M19.07 4.93l-2.83 2.83M7.76 16.24l-2.83 2.83M19.07 19.07l-2.83-2.83M7.76 7.76L4.93 4.93" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span className="text-xl font-bold text-gray-900">{formData.zonnepanelen}</span>
              </div>
              <button
                type="button"
                onClick={() => updateZonnepanelen(1)}
                className="w-12 h-12 flex items-center justify-center border-l border-gray-200 hover:bg-gray-50 text-gray-700 flex-shrink-0"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Tahmini Kullanım */}
        <div className="bg-slate-900 rounded-t-lg p-4 mb-0">
          <p className="text-base font-semibold text-white mb-3 text-center tracking-wide" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>Geschat jaarverbruik:</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
              </svg>
              <span className="font-semibold text-white">{estimatedUsage.stroom} kWh</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold text-white">{estimatedUsage.gas} m³</span>
            </div>
          </div>
        </div>

        {/* Manuel Tüketim Girişi */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            showManualInput ? 'max-h-96 opacity-100 mb-4' : 'max-h-0 opacity-0 mb-0'
          }`}
        >
          <div className="bg-white border border-gray-200 rounded-lg p-3">
            <h3 className="text-sm font-bold text-gray-800 mb-2">Mijn jaarverbruik</h3>
            <div className="grid grid-cols-2 gap-2">
              {/* Stroom */}
              <div>
                <div className="flex items-center gap-1.5 mb-1">
                  <svg className="w-3.5 h-3.5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
                  </svg>
                  <label className="text-xs font-medium text-gray-700">Stroom (kWh)</label>
                </div>
                <input
                  type="text"
                  placeholder="bv. 2300"
                  value={manualUsage.stroom}
                  onChange={(e) => setManualUsage({ ...manualUsage, stroom: e.target.value })}
                  className="w-full px-2.5 py-1.5 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 placeholder:text-gray-400 text-sm"
                />
              </div>
              {/* Gas */}
              <div>
                <div className="flex items-center gap-1.5 mb-1">
                  <svg className="w-3.5 h-3.5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <label className="text-xs font-medium text-gray-700">Gas (m³)</label>
                </div>
                <input
                  type="text"
                  placeholder="bv. 1000"
                  value={manualUsage.gas}
                  onChange={(e) => setManualUsage({ ...manualUsage, gas: e.target.value })}
                  className="w-full px-2.5 py-1.5 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 placeholder:text-gray-400 text-sm"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Butonlar */}
        <div className="space-y-3 -mt-6">
          <button
            type="button"
            onClick={() => setShowManualInput(!showManualInput)}
            className="w-full text-green-600 text-sm font-semibold hover:text-green-700 transition-colors text-center flex items-center justify-center gap-2 py-1"
          >
            {showManualInput ? (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Verberg
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                Ik wil mijn verbruik zelf invullen
              </>
            )}
          </button>
          <button
            type="submit"
            disabled={!formData.postcode || !formData.huisnummer}
            className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 rounded-lg font-semibold text-lg hover:from-green-700 hover:to-green-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 shadow-lg"
          >
            Bekijk alle energieprijzen
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Reset Butonu */}
        <button
          type="button"
          onClick={resetForm}
          className="w-full flex items-center justify-center gap-2 text-gray-500 text-sm hover:text-gray-700 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          Begin opnieuw met vergelijken
        </button>
      </form>
    </div>
  );
}
