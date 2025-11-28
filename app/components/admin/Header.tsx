'use client';

export default function Header() {
    return (
        <header className="h-[73px] bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
            <div className="flex items-center justify-between h-full px-6">
                {/* Search Bar */}
                <div className="flex-1 max-w-xl">
                    {/*
                <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Search or type command..."
                            className="w-full pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-sm text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                            <kbd className="px-2 py-1 text-xs font-semibold text-slate-400 bg-slate-700/50 border border-slate-600 rounded">
                                ⌘ K
                            </kbd>
                        </div>
                    </div>
                */}
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
                    <button className="relative p-2 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full ring-2 ring-slate-900"></span>
                    </button>

                    {/* User Profile */}
                    <div className="flex items-center space-x-3 pl-4 border-l border-slate-700/50">
                        <div className="text-right">
                            <p className="text-sm font-medium text-white">Musharof</p>
                            <p className="text-xs text-slate-400">Admin</p>
                        </div>
                        <button className="relative group">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center ring-2 ring-slate-700 group-hover:ring-blue-500 transition-all">
                                <span className="text-white font-semibold text-sm">M</span>
                            </div>
                        </button>
                        <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            </div>
        </header>
    );
}
