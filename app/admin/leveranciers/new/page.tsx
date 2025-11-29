'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Category {
    id: string;
    name: string;
    slug: string;
}

export default function NewLeverancierPage() {
    const router = useRouter();
    const [saving, setSaving] = useState(false);
    const [categories, setCategories] = useState<Category[]>([]);

    const [formData, setFormData] = useState({
        name: '',
        slug: '',
        logo: '',
        customers: '',
        description: '',
        rating: '4.0',
        color: 'from-green-600 to-green-700',
        stroom: '€0,25 per kWh',
        gas: '€1,35 per m³',
        vastrecht: '€12,50 per maand',
        features: [''],
        voordelen: [''],
        nadelen: [''],
        categoryId: '',
        published: true
    });

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await fetch('/api/categories');
            if (response.ok) {
                const data = await response.json();
                setCategories(data);
            }
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);

        try {
            const response = await fetch('/api/leveranciers', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    features: formData.features.filter(f => f.trim()),
                    voordelen: formData.voordelen.filter(v => v.trim()),
                    nadelen: formData.nadelen.filter(n => n.trim())
                })
            });

            if (response.ok) {
                alert('Leverancier succesvol aangemaakt!');
                router.push('/admin/leveranciers');
            } else {
                const error = await response.json();
                alert(`Fout: ${error.error || 'Er is iets misgegaan'}`);
            }
        } catch (error) {
            console.error('Error creating leverancier:', error);
            alert('Fout bij aanmaken');
        } finally {
            setSaving(false);
        }
    };

    const addArrayItem = (field: 'features' | 'voordelen' | 'nadelen') => {
        setFormData({
            ...formData,
            [field]: [...formData[field], '']
        });
    };

    const removeArrayItem = (field: 'features' | 'voordelen' | 'nadelen', index: number) => {
        setFormData({
            ...formData,
            [field]: formData[field].filter((_, i) => i !== index)
        });
    };

    const updateArrayItem = (field: 'features' | 'voordelen' | 'nadelen', index: number, value: string) => {
        const newArray = [...formData[field]];
        newArray[index] = value;
        setFormData({
            ...formData,
            [field]: newArray
        });
    };

    return (
        <div className="p-8 max-w-4xl">
            <div className="mb-6">
                <div className="flex items-center gap-4 mb-4">
                    <Link
                        href="/admin/leveranciers"
                        className="text-gray-300 hover:text-white"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </Link>
                    <h1 className="text-white text-3xl font-bold">
                        Nieuwe Leverancier
                    </h1>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basis Info */}
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg shadow-sm p-6 text-white">
                    <h2 className="text-xl font-semibold text-white mb-4">Basis Informatie</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-white mb-2">
                                Naam *
                            </label>
                            <input
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => {
                                    const name = e.target.value;
                                    setFormData({ ...formData, name });
                                    // Auto-generate slug
                                    const slug = name.toLowerCase()
                                        .replace(/\s+/g, '-')
                                        .replace(/[^\w\-]+/g, '')
                                        .replace(/\-\-+/g, '-')
                                        .replace(/^-+/, '')
                                        .replace(/-+$/, '');
                                    setFormData(prev => ({ ...prev, slug, name }));
                                }}
                                className="bg-slate-900 border border-slate-700 w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-white mb-2">
                                Slug *
                            </label>
                            <input
                                type="text"
                                required
                                value={formData.slug}
                                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                                className=" bg-slate-900 border border-slate-700 w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-white mb-2">
                                Aantal Klanten
                            </label>
                            <input
                                type="text"
                                value={formData.customers}
                                onChange={(e) => setFormData({ ...formData, customers: e.target.value })}
                                placeholder="bijv. 3,3 miljoen"
                                className="bg-slate-900 border border-slate-700 w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-white mb-2">
                                Rating
                            </label>
                            <input
                                type="number"
                                step="0.1"
                                min="0"
                                max="5"
                                value={formData.rating}
                                onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
                                className="bg-slate-900 border border-slate-700 w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-white mb-2">
                                Categorie
                            </label>
                            <select
                                value={formData.categoryId}
                                onChange={(e) => setFormData({ ...formData, categoryId: e.target.value })}
                                className="bg-slate-900 border border-slate-700 w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                                <option value="">Geen categorie</option>
                                {categories.map(cat => (
                                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="mt-4">
                        <label className="block text-sm font-medium text-white mb-2">
                            Beschrijving
                        </label>
                        <textarea
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            rows={4}
                            className="bg-slate-900 text-white border border-slate-700 w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                </div>

                {/* Tarieven */}
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg shadow-sm p-6">
                    <h2 className="text-xl font-semibold text-white mb-4">Tarieven</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-white mb-2">Stroom</label>
                            <input
                                type="text"
                                value={formData.stroom}
                                onChange={(e) => setFormData({ ...formData, stroom: e.target.value })}
                                className="bg-slate-900 text-white border border-slate-700 w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white mb-2">Gas</label>
                            <input
                                type="text"
                                value={formData.gas}
                                onChange={(e) => setFormData({ ...formData, gas: e.target.value })}
                                className="bg-slate-900 text-white border border-slate-700 w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white mb-2">Vastrecht</label>
                            <input
                                type="text"
                                value={formData.vastrecht}
                                onChange={(e) => setFormData({ ...formData, vastrecht: e.target.value })}
                                className="bg-slate-900 text-white border border-slate-700 w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                    </div>
                </div>

                {/* Features */}
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg shadow-sm p-6">
                    <h2 className="text-xl font-semibold text-white mb-4">Kenmerken</h2>
                    {formData.features.map((feature, index) => (
                        <div key={index} className="flex gap-2 mb-2">
                            <input
                                type="text"
                                value={feature}
                                onChange={(e) => updateArrayItem('features', index, e.target.value)}
                                className="flex-1 px-4 py-2 bg-slate-900 text-white border border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Kenmerk"
                            />
                            <button
                                type="button"
                                onClick={() => removeArrayItem('features', index)}
                                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                            >
                                ×
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={() => addArrayItem('features')}
                        className="bg-blue-600 text-white mt-2 px-4 py-2 rounded-lg hover:bg-blue-700"
                    >
                        + Voeg kenmerk toe
                    </button>
                </div>

                {/* Voordelen */}
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg shadow-sm p-6">
                    <h2 className="text-xl font-semibold text-white mb-4">Voordelen</h2>
                    {formData.voordelen.map((voordeel, index) => (
                        <div key={index} className="flex gap-2 mb-2">
                            <input
                                type="text"
                                value={voordeel}
                                onChange={(e) => updateArrayItem('voordelen', index, e.target.value)}
                                className="flex-1 px-4 py-2 bg-slate-900 text-white border border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Voordeel"
                            />
                            <button
                                type="button"
                                onClick={() => removeArrayItem('voordelen', index)}
                                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                            >
                                ×
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={() => addArrayItem('voordelen')}
                        className="bg-blue-600 text-white mt-2 px-4 py-2 rounded-lg hover:bg-blue-700"
                    >
                        + Voeg voordeel toe
                    </button>
                </div>

                {/* Nadelen */}
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg shadow-sm p-6">
                    <h2 className="text-xl font-semibold text-white mb-4">Nadelen</h2>
                    {formData.nadelen.map((nadeel, index) => (
                        <div key={index} className="flex gap-2 mb-2">
                            <input
                                type="text"
                                value={nadeel}
                                onChange={(e) => updateArrayItem('nadelen', index, e.target.value)}
                                className="flex-1 px-4 py-2 bg-slate-900 text-white border border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Nadeel"
                            />
                            <button
                                type="button"
                                onClick={() => removeArrayItem('nadelen', index)}
                                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                            >
                                ×
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={() => addArrayItem('nadelen')}
                        className="bg-blue-600 text-white mt-2 px-4 py-2 rounded-lg hover:bg-blue-700"
                    >
                        + Voeg nadeel toe
                    </button>
                </div>

                {/* Published Toggle */}
                <div className="bg-slate-900 border border-slate-700 rounded-lg shadow-sm p-6">
                    <label className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={formData.published}
                            onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                            className="rounded border-slate-700 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm font-medium text-gray-300">Direct publiceren</span>
                    </label>
                </div>

                {/* Actions */}
                <div className="flex gap-4 justify-end">
                    <Link
                        href="/admin/leveranciers"
                        className="bg-slate-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-slate-600 transition-colors"
                    >
                        Annuleren
                    </Link>
                    <button
                        type="submit"
                        disabled={saving}
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
                    >
                        {saving ? 'Opslaan...' : 'Aanmaken'}
                    </button>
                </div>
            </form>
        </div>
    );
}
