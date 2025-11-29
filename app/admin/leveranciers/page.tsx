'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

interface Leverancier {
    id: string;
    name: string;
    slug: string;
    customers: string;
    rating: number;
    published: boolean;
    category: {
        name: string;
        slug: string;
    } | null;
}

export default function AdminLeveranciersPage() {
    const searchParams = useSearchParams();
    const categoryFilter = searchParams?.get('category');

    const [leveranciers, setLeveranciers] = useState<Leverancier[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchLeveranciers();
    }, [categoryFilter]);

    const fetchLeveranciers = async () => {
        try {
            setLoading(true);
            let url = '/api/leveranciers';
            if (categoryFilter) {
                url += `?category=${categoryFilter}`;
            }
            const response = await fetch(url);
            const data = await response.json();
            // Ensure data is always an array
            setLeveranciers(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error('Error fetching leveranciers:', error);
            setLeveranciers([]); // Set empty array on error
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string, name: string) => {
        if (!confirm(`Weet je zeker dat je "${name}" wilt verwijderen?`)) {
            return;
        }

        try {
            const response = await fetch(`/api/leveranciers/${id}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                fetchLeveranciers();
            } else {
                alert('Fout bij verwijderen');
            }
        } catch (error) {
            console.error('Error deleting leverancier:', error);
            alert('Fout bij verwijderen');
        }
    };

    const filteredLeveranciers = leveranciers.filter(lev =>
        lev.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getCategoryBadgeColor = (categorySlug: string | undefined) => {
        switch (categorySlug) {
            case 'particulier':
                return 'bg-blue-100 text-blue-800';
            case 'zakelijk':
                return 'bg-green-100 text-green-800';
            case 'grootzakelijk':
                return 'bg-purple-100 text-purple-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="p-8">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-white mb-2">
                    Leveranciers Beheer
                </h1>
                <p className="text-gray-300">
                    {categoryFilter
                        ? `Categorie: ${categoryFilter.charAt(0).toUpperCase() + categoryFilter.slice(1)}`
                        : 'Alle energieleveranciers'
                    }
                </p>
            </div>

            {/* Actions Bar */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg shadow-sm p-6 mb-6">
                <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
                    <div className="flex-1">
                        <input
                            type="text"
                            placeholder="Zoek leverancier..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-4 py-2 bg-slate-900/50 border border-slate-600 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                    <Link
                        href="/admin/leveranciers/new"
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        Nieuwe Leverancier
                    </Link>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-slate-800/50 border border-slate-700 p-4 rounded-lg shadow-sm">
                    <div className="text-sm text-gray-400 mb-1">Totaal</div>
                    <div className="text-2xl font-bold text-white">{leveranciers.length}</div>
                </div>
                <div className="bg-slate-800/50 border border-slate-700 p-4 rounded-lg shadow-sm">
                    <div className="text-sm text-gray-400 mb-1">Gepubliceerd</div>
                    <div className="text-2xl font-bold text-green-400">
                        {leveranciers.filter(l => l.published).length}
                    </div>
                </div>
                <div className="bg-slate-800/50 border border-slate-700 p-4 rounded-lg shadow-sm">
                    <div className="text-sm text-gray-400 mb-1">Concept</div>
                    <div className="text-2xl font-bold text-orange-400">
                        {leveranciers.filter(l => !l.published).length}
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg shadow-sm overflow-hidden">
                {loading ? (
                    <div className="p-12 text-center">
                        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                        <p className="mt-4 text-gray-300">Laden...</p>
                    </div>
                ) : filteredLeveranciers.length === 0 ? (
                    <div className="p-12 text-center text-gray-400">
                        Geen leveranciers gevonden
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-slate-900/50 border-b border-slate-700">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                        Naam
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                        Categorie
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                        Klanten
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                        Rating
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">
                                        Acties
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700">
                                {filteredLeveranciers.map((lev) => (
                                    <tr key={lev.id} className="hover:bg-slate-700/30 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="font-medium text-white">{lev.name}</div>
                                            <div className="text-sm text-gray-400">{lev.slug}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getCategoryBadgeColor(lev.category?.slug)}`}>
                                                {lev.category?.name || '-'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                                            {lev.customers}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-1">
                                                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <span className="text-sm font-medium text-white">{lev.rating}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${lev.published
                                                ? 'bg-green-100 text-green-800'
                                                : 'bg-gray-100 text-gray-800'
                                                }`}>
                                                {lev.published ? 'Gepubliceerd' : 'Concept'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <div className="flex items-center justify-end gap-2">
                                                <Link
                                                    href={`/leveranciers/${lev.slug}`}
                                                    target="_blank"
                                                    className="text-gray-600 hover:text-gray-900 transition-colors"
                                                    title="Bekijk"
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                    </svg>
                                                </Link>
                                                <Link
                                                    href={`/admin/leveranciers/${lev.id}/edit`}
                                                    className="text-blue-600 hover:text-blue-900 transition-colors"
                                                    title="Bewerk"
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                    </svg>
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(lev.id, lev.name)}
                                                    className="text-red-600 hover:text-red-900 transition-colors"
                                                    title="Verwijder"
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}
