'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
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

export default function AdminContactPage() {
    const [contacts, setContacts] = useState<ContactMessage[]>([]);
    const [filteredContacts, setFilteredContacts] = useState<ContactMessage[]>([]);
    const [activeTab, setActiveTab] = useState<'all' | 'unread' | 'read'>('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);

    const fetchContacts = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/admin/contact');
            if (res.ok) {
                const data = await res.json();
                setContacts(data);
            }
        } catch (error) {
            console.error('Failed to fetch contacts:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchContacts();
    }, []);

    useEffect(() => {
        let filtered = contacts;

        // Filter by status tab
        if (activeTab !== 'all') {
            filtered = filtered.filter(c => c.status.toLowerCase() === activeTab);
        }

        // Filter by search query
        if (searchQuery) {
            filtered = filtered.filter(c =>
                c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                c.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                c.subject.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        setFilteredContacts(filtered);
    }, [contacts, activeTab, searchQuery]);

    const timeAgo = (date: string) => {
        const seconds = Math.floor((new Date().getTime() - new Date(date).getTime()) / 1000);
        if (seconds < 60) return 'zojuist';
        const minutes = Math.floor(seconds / 60);
        if (minutes < 60) return `${minutes} min geleden`;
        const hours = Math.floor(minutes / 60);
        if (hours < 24) return `${hours} uur geleden`;
        const days = Math.floor(hours / 24);
        return `${days} dag${days > 1 ? 'en' : ''} geleden`;
    };

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'UNREAD':
                return <span className="px-2 py-1 text-xs font-semibold bg-blue-500/20 text-blue-300 rounded-full">Ongelezen</span>;
            case 'READ':
                return <span className="px-2 py-1 text-xs font-semibold bg-green-500/20 text-green-300 rounded-full">Gelezen</span>;
            case 'DRAFT':
                return <span className="px-2 py-1 text-xs font-semibold bg-yellow-500/20 text-yellow-300 rounded-full">Concept</span>;
            default:
                return null;
        }
    };

    const stats = {
        total: contacts.length,
        unread: contacts.filter(c => c.status === 'UNREAD').length,
        read: contacts.filter(c => c.status === 'READ').length,
    };

    return (
        <>
            {/* Page Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-white mb-2">Contact Berichten</h1>
                <p className="text-slate-400">Beheer alle contactformulier berichten</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 backdrop-blur-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-slate-400 text-sm">Totaal Berichten</p>
                            <p className="text-3xl font-bold text-white mt-1">{stats.total}</p>
                        </div>
                        <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 backdrop-blur-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-slate-400 text-sm">Ongelezen</p>
                            <p className="text-3xl font-bold text-white mt-1">{stats.unread}</p>
                        </div>
                        <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                            <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 backdrop-blur-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-slate-400 text-sm">Gelezen</p>
                            <p className="text-3xl font-bold text-white mt-1">{stats.read}</p>
                        </div>
                        <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                            <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Filters and Search */}
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 mb-6 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                    {/* Tabs */}
                    <div className="flex space-x-2">
                        <button
                            onClick={() => setActiveTab('all')}
                            className={`px-4 py-2 rounded-lg font-medium transition-all ${activeTab === 'all'
                                ? 'bg-blue-600 text-white'
                                : 'bg-slate-700/50 text-slate-400 hover:text-white hover:bg-slate-700'
                                }`}
                        >
                            Alle ({stats.total})
                        </button>
                        <button
                            onClick={() => setActiveTab('unread')}
                            className={`px-4 py-2 rounded-lg font-medium transition-all ${activeTab === 'unread'
                                ? 'bg-blue-600 text-white'
                                : 'bg-slate-700/50 text-slate-400 hover:text-white hover:bg-slate-700'
                                }`}
                        >
                            Ongelezen ({stats.unread})
                        </button>
                        <button
                            onClick={() => setActiveTab('read')}
                            className={`px-4 py-2 rounded-lg font-medium transition-all ${activeTab === 'read'
                                ? 'bg-blue-600 text-white'
                                : 'bg-slate-700/50 text-slate-400 hover:text-white hover:bg-slate-700'
                                }`}
                        >
                            Gelezen ({stats.read})
                        </button>
                    </div>

                    {/* Search */}
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Zoek op naam, email of onderwerp..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10 pr-4 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-sm text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all w-full md:w-80"
                        />
                    </div>
                </div>
            </div>

            {/* Contact List */}
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden backdrop-blur-sm">
                {loading ? (
                    <div className="p-12 text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
                        <p className="text-slate-400 mt-4">Laden...</p>
                    </div>
                ) : filteredContacts.length > 0 ? (
                    <div className="divide-y divide-slate-700/50">
                        {filteredContacts.map((contact) => (
                            <Link
                                key={contact.id}
                                href={`/admin/contact/${contact.id}`}
                                className={`block p-6 hover:bg-slate-700/30 transition-all ${contact.status === 'UNREAD' ? 'bg-blue-500/5' : ''
                                    }`}
                            >
                                <div className="flex items-start justify-between">
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center space-x-3 mb-2">
                                            {contact.status === 'UNREAD' && (
                                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                            )}
                                            <h3 className={`text-lg font-semibold ${contact.status === 'UNREAD' ? 'text-white' : 'text-slate-300'
                                                }`}>
                                                {contact.name}
                                            </h3>
                                            {getStatusBadge(contact.status)}
                                        </div>
                                        <p className="text-sm text-slate-400 mb-1">{contact.email}</p>
                                        <p className="text-sm font-medium text-slate-200 mb-2">{contact.subject}</p>
                                        <p className="text-sm text-slate-500 line-clamp-2">
                                            {contact.message}
                                        </p>
                                    </div>
                                    <div className="ml-4 text-right flex-shrink-0">
                                        <p className="text-xs text-slate-400">{timeAgo(contact.createdAt)}</p>
                                        <svg className="w-5 h-5 text-slate-400 mt-2 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="p-12 text-center">
                        <svg className="w-16 h-16 text-slate-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                        </svg>
                        <p className="text-slate-400">Geen berichten gevonden</p>
                    </div>
                )}
            </div>
        </>
    );
}
