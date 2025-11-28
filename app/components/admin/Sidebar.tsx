'use client';

import { useState } from 'react';

export default function Sidebar() {
    const [activeMenu, setActiveMenu] = useState('Dashboard');

    const menuItems = [
        {
            title: 'MENU',
            items: [
                { name: 'Dashboard', icon: '📊', hasSubmenu: true },
                { name: 'AI Asistant', icon: '🤖', badge: 'NEW', hasSubmenu: true },
                { name: 'E-commerce', icon: '🛒', badge: 'NEW', hasSubmenu: true },
                { name: 'Calendar', icon: '📅' },
                { name: 'User Profile', icon: '👤' },
                { name: 'Task', icon: '✓', hasSubmenu: true },
                { name: 'Forms', icon: '📝', hasSubmenu: true },
                { name: 'Tables', icon: '📋', hasSubmenu: true },
                { name: 'Pages', icon: '📄', hasSubmenu: true },
            ],
        },
        {
            title: 'SUPPORT',
            items: [
                { name: 'Chat', icon: '💬' },
                { name: 'Support Ticket', icon: '🎫', badge: 'NEW', hasSubmenu: true },
                { name: 'Email', icon: '✉️', hasSubmenu: true },
            ],
        },
        {
            title: 'OTHERS',
            items: [
                { name: 'Charts', icon: '📈', hasSubmenu: true },
                { name: 'UI Elements', icon: '🎨', hasSubmenu: true },
                { name: 'Authentication', icon: '🔐', hasSubmenu: true },
            ],
        },
    ];

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
                                    <button
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
                                            {item.badge && (
                                                <span className="px-2 py-0.5 text-[10px] font-semibold bg-green-500 text-white rounded-full">
                                                    {item.badge}
                                                </span>
                                            )}
                                        </div>
                                        {item.hasSubmenu && (
                                            <svg
                                                className={`w-4 h-4 transition-transform ${activeMenu === item.name ? 'rotate-180' : ''
                                                    }`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        )}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </nav>

            {/* Tailwind CSS Dashboard Badge */}
            <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-3 text-center">
                    <p className="text-xs text-slate-400">#1 Tailwind CSS Dashboard</p>
                </div>
            </div>
        </aside>
    );
}
