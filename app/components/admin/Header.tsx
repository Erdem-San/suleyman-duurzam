'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

interface ContactMessage {
    id: string;
    name: string;
    subject: string;
    createdAt: string;
}

export default function Header() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [notifOpen, setNotifOpen] = useState(false);
    const [unreadCount, setUnreadCount] = useState(0);
    const [recentContacts, setRecentContacts] = useState<ContactMessage[]>([]);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const notifRef = useRef<HTMLDivElement>(null);

    // Fetch unread count and recent messages
    const fetchNotifications = async () => {
        try {
            // Get unread count
            const countRes = await fetch('/api/admin/contact/unread');
            if (countRes.ok) {
                const data = await countRes.json();
                setUnreadCount(data.count);
            }

            // Get recent unread contacts
            const contactsRes = await fetch('/api/admin/contact?status=unread');
            if (contactsRes.ok) {
                const contacts = await contactsRes.json();
                setRecentContacts(contacts.slice(0, 5));
            }
        } catch (error) {
            console.error('Failed to fetch notifications:', error);
        }
    };

    // Fetch on mount and every 30 seconds
    useEffect(() => {
        fetchNotifications();
        const interval = setInterval(fetchNotifications, 30000);
        return () => clearInterval(interval);
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
            if (notifRef.current && !notifRef.current.contains(event.target as Node)) {
                setNotifOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Format time ago
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

    return (
        <header className="relative h-[73px] bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50 z-50">
            <div className="flex items-center justify-between h-full px-6">
                {/* Search Bar */}
                <div className="flex-1 max-w-xl">
                </div>

                {/* Right Side Actions */}
                <div className="flex items-center space-x-4 ml-6">
                    {/* Theme Toggle */}
                    <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                    </button>

                    {/* Notifications */}
                    <div className="relative" ref={notifRef}>
                        <button
                            onClick={() => setNotifOpen(!notifOpen)}
                            className="relative p-2 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                            {unreadCount > 0 && (
                                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full ring-2 ring-slate-900"></span>
                            )}
                        </button>

                        {/* Notification Dropdown */}
                        {notifOpen && (
                            <div className="absolute right-0 mt-2 w-80 bg-slate-800 border border-slate-700/50 rounded-lg shadow-xl shadow-black/50 overflow-hidden z-[999]">
                                <div className="p-3 border-b border-slate-700/50 flex items-center justify-between">
                                    <h3 className="text-sm font-semibold text-white">Meldingen</h3>
                                    {unreadCount > 0 && (
                                        <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded-full">
                                            {unreadCount}
                                        </span>
                                    )}
                                </div>

                                {recentContacts.length > 0 ? (
                                    <div className="max-h-96 overflow-y-auto">
                                        {recentContacts.map((contact) => (
                                            <Link
                                                key={contact.id}
                                                href={`/admin/contact/${contact.id}`}
                                                onClick={() => setNotifOpen(false)}
                                                className="block px-4 py-3 hover:bg-slate-700/30 transition-all border-b border-slate-700/30 last:border-b-0"
                                            >
                                                <div className="flex items-start space-x-3">
                                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-sm font-medium text-white truncate">
                                                            {contact.name}
                                                        </p>
                                                        <p className="text-xs text-slate-400 truncate">
                                                            {contact.subject}
                                                        </p>
                                                        <p className="text-xs text-slate-500 mt-1">
                                                            {timeAgo(contact.createdAt)}
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="p-8 text-center">
                                        <svg className="w-12 h-12 text-slate-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <p className="text-sm text-slate-400">Geen nieuwe berichten</p>
                                    </div>
                                )}

                                <Link
                                    href="/admin/contact"
                                    onClick={() => setNotifOpen(false)}
                                    className="block p-3 text-center text-sm text-blue-400 hover:text-blue-300 hover:bg-slate-700/30 transition-all border-t border-slate-700/50"
                                >
                                    Alle berichten bekijken
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* User Profile with Dropdown */}
                    <div className="relative" ref={dropdownRef}>
                        <div className="flex items-center space-x-3 pl-4 border-l border-slate-700/50">
                            <div className="text-right">
                                <p className="text-sm font-medium text-white">Admin</p>
                                <p className="text-xs text-slate-400">Yönetici</p>
                            </div>
                            <button
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="relative group"
                            >
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center ring-2 ring-slate-700 group-hover:ring-blue-500 transition-all">
                                    <span className="text-white font-semibold text-sm">A</span>
                                </div>
                            </button>
                            <svg
                                className={`w-4 h-4 text-slate-400 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>

                        {/* Dropdown Menu */}
                        {dropdownOpen && (
                            <div className="absolute right-0 mt-2 w-56 bg-slate-800 border border-slate-700/50 rounded-lg shadow-xl shadow-black/50 overflow-hidden z-[999]">
                                <div className="p-3 border-b border-slate-700/50">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                                            <span className="text-white font-semibold text-sm">A</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-white">Admin</p>
                                            <p className="text-xs text-slate-400">Yönetici</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="py-2">
                                    <a
                                        href="/admin"
                                        className="flex items-center space-x-3 px-4 py-2.5 text-sm text-slate-300 hover:bg-slate-700/50 hover:text-white transition-all"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span>Admin Paneli</span>
                                    </a>

                                    <button
                                        onClick={() => {
                                            window.location.href = '/api/auth/signout';
                                        }}
                                        className="w-full flex items-center space-x-3 px-4 py-2.5 text-sm text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                        </svg>
                                        <span>Çıkış Yap</span>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}
