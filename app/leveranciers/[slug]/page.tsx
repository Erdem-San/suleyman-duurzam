'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface Leverancier {
  id: string;
  name: string;
  slug: string;
  customers: string;
  description: string;
  rating: number;
  color: string;
  stroom: string;
  gas: string;
  vastrecht: string;
  features: string[];
  voordelen: string[];
  nadelen: string[];
}

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
  const [slug, setSlug] = useState<string>('');
  const [leverancier, setLeverancier] = useState<Leverancier | null>(null);
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState<any[]>([]);
  const [newReview, setNewReview] = useState({ name: '', rating: 5, comment: '' });
  const [showReviewForm, setShowReviewForm] = useState(false);

  useEffect(() => {
    const resolveParams = async () => {
      const resolvedParams = typeof params === 'object' && 'then' in params ? await params : params;
      setSlug(resolvedParams.slug);
    };
    resolveParams();
  }, [params]);

  useEffect(() => {
    if (slug) {
      fetchLeverancier();
      setReviews(getDefaultReviews(slug));
    }
  }, [slug]);

  const fetchLeverancier = async () => {
    try {
      const response = await fetch(`/api/leveranciers/slug/${slug}`);
      if (response.ok) {
        const data = await response.json();
        setLeverancier(data);
      }
    } catch (error) {
      console.error('Error fetching leverancier:', error);
    } finally {
      setLoading(false);
    }
  };

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

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
          <p className="mt-4 text-gray-600">Laden...</p>
        </div>
        <Footer />
      </div>
    );
  }

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
                <div className="text-2xl font-bold text-gray-900">{leverancier.stroom}</div>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="text-sm text-gray-600 mb-2">Gas</div>
                <div className="text-2xl font-bold text-gray-900">{leverancier.gas}</div>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="text-sm text-gray-600 mb-2">Vastrecht</div>
                <div className="text-2xl font-bold text-gray-900">{leverancier.vastrecht}</div>
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
