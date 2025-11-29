'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/app/components/admin/Sidebar';
import Header from '@/app/components/admin/Header';

interface ContactMessage {
    id: string;
    name: string;
    email: string;
    phone: string | null;
    subject: string;
    message: string;
    status: 'UNREAD' | 'READ' | 'DRAFT';
    createdAt: string;
    updatedAt: string;
}

export default function ContactDetailPage({ params }: { params: { id: string } }) {
    const router = useRouter();
    const [contact, setContact] = useState<ContactMessage | null>(null);
    const [loading, setLoading] = useState(true);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const fetchContact = async () => {
        setLoading(true);
        try {
            const res = await fetch(`/api/admin/contact/${params.id}`);
            if (res.ok) {
                const data = await res.json();
                setContact(data);
            } else {
                router.push('/admin/contact');
            }
        } catch (error) {
            console.error('Failed to fetch contact:', error);
            router.push('/admin/contact');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchContact();
    }, [params.id]);

    const handleStatusChange = async (newStatus: 'UNREAD' | 'READ' | 'DRAFT') => {
        if (!contact) return;

        try {
            const res = await fetch(`/api/admin/contact/${params.id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: newStatus }),
            });

            if (res.ok) {
                setContact({ ...contact, status: newStatus });
            }
        } catch (error) {
            console.error('Failed to update status:', error);
        }
    };

    const handleDelete = async () => {
        try {
            const res = await fetch(`/api/admin/contact/${params.id}`, {
                method: 'DELETE',
            });

            if (res.ok) {
                router.push('/admin/contact');
            }
        } catch (error) {
            console.error('Failed to delete contact:', error);
        }
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('nl-NL', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        }).format(date);
    };

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'UNREAD':
                return <span className="px-3 py-1 text-sm font-semibold bg-blue-500/20 text-blue-300 rounded-full">Ongelezen</span>;
            case 'READ':
                return <span className="px-3 py-1 text-sm font-semibold bg-green-500/20 text-green-300 rounded-full">Gelezen</span>;
            case 'DRAFT':
                return <span className="px-3 py-1 text-sm font-semibold bg-yellow-500/20 text-yellow-300 rounded-full">Concept</span>;
            default:
                return null;
        }
    };

    if (loading) {
        return (
            <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
                <p className="text-slate-400 mt-4">Laden...</p>
            </div>
        );
    }

    if (!contact) {
        return null;
    }

    return (
        <>
            {/* Back Button */}
            <button
                onClick={() => router.push('/admin/contact')}
                className="flex items-center space-x-2 text-slate-400 hover:text-white mb-6 transition-all"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>Terug naar overzicht</span>
            </button>

            {/* Header */}
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 mb-6 backdrop-blur-sm">
                <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                            <h1 className="text-2xl font-bold text-white">{contact.subject}</h1>
                            {getStatusBadge(contact.status)}
                        </div>
                        <p className="text-slate-400 text-sm">{formatDate(contact.createdAt)}</p>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                    {contact.status !== 'READ' && (
                        <button
                            onClick={() => handleStatusChange('READ')}
                            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-all flex items-center space-x-2"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Markeer als gelezen</span>
                        </button>
                    )}
                    {contact.status === 'READ' && (
                        <button
                            onClick={() => handleStatusChange('UNREAD')}
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all flex items-center space-x-2"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span>Markeer als ongelezen</span>
                        </button>
                    )}
                    <button
                        onClick={() => setShowDeleteModal(true)}
                        className="px-4 py-2 bg-red-600/10 hover:bg-red-600/20 text-red-400 border border-red-600/30 rounded-lg font-medium transition-all flex items-center space-x-2"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        <span>Verwijderen</span>
                    </button>
                </div>
            </div>

            {/* Contact Info */}
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 mb-6 backdrop-blur-sm">
                <h2 className="text-lg font-semibold text-white mb-4">Contact Informatie</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <p className="text-sm text-slate-400 mb-1">Naam</p>
                        <p className="text-white font-medium">{contact.name}</p>
                    </div>
                    <div>
                        <p className="text-sm text-slate-400 mb-1">E-mail</p>
                        <a
                            href={`mailto:${contact.email}`}
                            className="text-blue-400 hover:text-blue-300 font-medium transition-all"
                        >
                            {contact.email}
                        </a>
                    </div>
                    {contact.phone && (
                        <div>
                            <p className="text-sm text-slate-400 mb-1">Telefoon</p>
                            <a
                                href={`tel:${contact.phone}`}
                                className="text-blue-400 hover:text-blue-300 font-medium transition-all"
                            >
                                {contact.phone}
                            </a>
                        </div>
                    )}
                </div>
            </div>

            {/* Message */}
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 backdrop-blur-sm">
                <h2 className="text-lg font-semibold text-white mb-4">Bericht</h2>
                <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700/30">
                    <p className="text-slate-200 whitespace-pre-wrap leading-relaxed">
                        {contact.message}
                    </p>
                </div>
            </div>

            {/* Delete Confirmation Modal */}
            {showDeleteModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] backdrop-blur-sm">
                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 max-w-md mx-4">
                        <h3 className="text-xl font-bold text-white mb-2">Bericht verwijderen?</h3>
                        <p className="text-slate-400 mb-6">
                            Weet je zeker dat je dit bericht wilt verwijderen? Deze actie kan niet ongedaan worden gemaakt.
                        </p>
                        <div className="flex space-x-3">
                            <button
                                onClick={() => setShowDeleteModal(false)}
                                className="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-all"
                            >
                                Annuleren
                            </button>
                            <button
                                onClick={handleDelete}
                                className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-all"
                            >
                                Verwijderen
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
