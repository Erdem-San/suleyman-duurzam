'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
    const pathname = usePathname();
    const [activeMenu, setActiveMenu] = useState('Dashboard');
    const [openSubmenu, setOpenSubmenu] = useState<string | null>('Leveranciers');

    const menuItems = [
        {
            title: 'İÇERİK YÖNETİMİ',
            items: [
                { name: 'Dashboard', icon: '📊', href: '/admin' },
                {
                    name: 'Leveranciers',
                    icon: '🏢',
                    hasSubmenu: true,
                    submenuItems: [
                        { name: 'Alle Leveranciers', icon: '📋', href: '/admin/leveranciers' },
                        { name: 'Particulier', icon: '🏠', href: '/admin/leveranciers?category=particulier' },
                        { name: 'Zakelijk', icon: '🏢', href: '/admin/leveranciers?category=zakelijk' },
                        { name: 'Grootzakelijk', icon: '🏭', href: '/admin/leveranciers?category=grootzakelijk' },
                        { name: 'Yeni Ekle', icon: '➕', href: '/admin/leveranciers/new' },
                    ]
                },
                {
                    name: 'Blog',
                    icon: '✍️',
                    hasSubmenu: true,
                    submenuItems: [
                        { name: 'Alle Blogs', icon: '📝', href: '/admin/blogs' },
                        { name: 'Nieuwe Blog', icon: '➕', href: '/admin/blogs/new' },
                    ]
                },
                {
                    name: 'Contact',
                    icon: '📞',
                    href: '/admin/contact'
                },
            ],
        },
        {
            title: 'AYARLAR',
            items: [
                { name: 'Site Ayarları', icon: '⚙️', href: '/admin/settings' },
                { name: 'Profil', icon: '👤', href: '/admin/profile' },
            ],
        },
    ];

    // Set active menu based on current pathname
    useEffect(() => {
        if (pathname === '/admin') {
            setActiveMenu('Dashboard');
        } else if (pathname?.startsWith('/admin/leveranciers')) {
            setActiveMenu('Leveranciers');
            setOpenSubmenu('Leveranciers');

            // Check for specific submenu items
            if (pathname === '/admin/leveranciers/new') {
                setActiveMenu('Yeni Ekle');
            } else if (pathname === '/admin/leveranciers') {
                setActiveMenu('Alle Leveranciers');
            }
        } else if (pathname?.startsWith('/admin/blogs')) {
            setActiveMenu('Blog');
            setOpenSubmenu('Blog');

            // Check for specific submenu items
            if (pathname === '/admin/blogs/new') {
                setActiveMenu('Nieuwe Blog');
            } else if (pathname === '/admin/blogs') {
                setActiveMenu('Alle Blogs');
            }
        } else if (pathname?.startsWith('/admin/contact')) {
            setActiveMenu('Contact');
        } else if (pathname?.startsWith('/admin/settings')) {
            setActiveMenu('Site Ayarları');
        } else if (pathname?.startsWith('/admin/profile')) {
            setActiveMenu('Profil');
        }
    }, [pathname]);

    return (
        <aside className="fixed left-0 top-0 h-screen w-64 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-r border-slate-700/50 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
            {/* Logo */}
            <div className="flex items-center px-6 py-5 border-b border-slate-700/50">
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">D</span>
                    </div>
                    <span className="text-white font-semibold text-lg">Duurzaamgarant</span>
                </div>
                <button className="ml-auto text-slate-400 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Menu Sections */}
            <nav className="py-4">
                {menuItems.map((section, sectionIdx) => (
                    <div key={sectionIdx} className="mb-6">
                        <h3 className="px-6 mb-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                            {section.title}
                        </h3>
                        <ul className="space-y-1 px-3">
                            {section.items.map((item, itemIdx) => (
                                <li key={itemIdx}>
                                    {item.href && !item.hasSubmenu ? (
                                        <Link
                                            href={item.href}
                                            onClick={() => setActiveMenu(item.name)}
                                            className={`
                      w-full flex items-center justify-between px-3 py-2.5 rounded-lg
                      transition-all duration-200 group
                      ${activeMenu === item.name
                                                    ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/30'
                                                    : 'text-slate-300 hover:bg-slate-800/50 hover:text-white'
                                                }
                    `}
                                        >
                                            <div className="flex items-center space-x-3">
                                                <span className="text-lg">{item.icon}</span>
                                                <span className="font-medium text-sm">{item.name}</span>
                                            </div>
                                        </Link>
                                    ) : (
                                        <button
                                            onClick={() => {
                                                setActiveMenu(item.name);
                                                if (item.hasSubmenu) {
                                                    setOpenSubmenu(openSubmenu === item.name ? null : item.name);
                                                }
                                            }}
                                            className={`
                      w-full flex items-center justify-between px-3 py-2.5 rounded-lg
                      transition-all duration-200 group
                      ${activeMenu === item.name
                                                    ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/30'
                                                    : 'text-slate-300 hover:bg-slate-800/50 hover:text-white'
                                                }
                    `}
                                        >
                                            <div className="flex items-center space-x-3">
                                                <span className="text-lg">{item.icon}</span>
                                                <span className="font-medium text-sm">{item.name}</span>
                                            </div>
                                            {item.hasSubmenu && (
                                                <svg
                                                    className={`w-4 h-4 transition-transform ${openSubmenu === item.name ? 'rotate-180' : ''
                                                        }`}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            )}
                                        </button>
                                    )}

                                    {/* Submenu Items */}
                                    {item.hasSubmenu && openSubmenu === item.name && item.submenuItems && (
                                        <ul className="mt-1 ml-6 space-y-1">
                                            {item.submenuItems.map((subItem: any, subIdx: number) => (
                                                <li key={subIdx}>
                                                    {subItem.href ? (
                                                        <Link
                                                            href={subItem.href!}
                                                            onClick={() => setActiveMenu(subItem.name)}
                                                            className={`
                                                                w-full flex items-center justify-between px-3 py-2 rounded-lg
                                                                transition-all duration-200 text-sm
                                                                ${activeMenu === subItem.name
                                                                    ? 'bg-blue-500/20 text-blue-300'
                                                                    : 'text-slate-400 hover:bg-slate-800/30 hover:text-slate-200'
                                                                }
                                                            `}
                                                        >
                                                            <div className="flex items-center space-x-2">
                                                                <span className="text-base">{subItem.icon}</span>
                                                                <span>{subItem.name}</span>
                                                            </div>
                                                            {subItem.count && (
                                                                <span className="text-xs bg-slate-700 text-slate-300 px-2 py-0.5 rounded-full">
                                                                    {subItem.count}
                                                                </span>
                                                            )}
                                                        </Link>
                                                    ) : (
                                                        <button
                                                            onClick={() => setActiveMenu(subItem.name)}
                                                            className={`
                                                                w-full flex items-center justify-between px-3 py-2 rounded-lg
                                                                transition-all duration-200 text-sm
                                                                ${activeMenu === subItem.name
                                                                    ? 'bg-blue-500/20 text-blue-300'
                                                                    : 'text-slate-400 hover:bg-slate-800/30 hover:text-slate-200'
                                                                }
                                                            `}
                                                        >
                                                            <div className="flex items-center space-x-2">
                                                                <span className="text-base">{subItem.icon}</span>
                                                                <span>{subItem.name}</span>
                                                            </div>
                                                            {subItem.count && (
                                                                <span className="text-xs bg-slate-700 text-slate-300 px-2 py-0.5 rounded-full">
                                                                    {subItem.count}
                                                                </span>
                                                            )}
                                                        </button>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </nav>

            {/* Ana Sayfaya Git */}
            <div className="absolute bottom-4 left-4 right-4">
                <a
                    href="/"
                    className="w-full text-slate-400 hover:bg-slate-800/50 hover:text-white border border-slate-800 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span>Ana Sayfaya Git</span>
                </a>
            </div>
        </aside>
    );
}
