export default function AdminPage() {
    return (
        <div className="space-y-6 ">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8 shadow-2xl shadow-blue-500/10">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-4xl font-bold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                            Welcome to Admin Panel
                        </h1>
                        <p className="text-slate-300 text-lg">
                            Hoş geldiniz! Admin panelinizi yönetmeye başlayabilirsiniz.
                        </p>
                    </div>
                    <div className="hidden md:block">
                        <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/50 animate-pulse">
                            <span className="text-5xl">👋</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10 group">
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                            <span className="text-2xl">📊</span>
                        </div>
                        <div>
                            <p className="text-sm text-slate-400">Dashboard</p>
                            <p className="text-xl font-semibold text-white">Aktif</p>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10 group">
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                            <span className="text-2xl">⚡</span>
                        </div>
                        <div>
                            <p className="text-sm text-slate-400">Performance</p>
                            <p className="text-xl font-semibold text-white">Mükemmel</p>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all hover:shadow-lg hover:shadow-green-500/10 group">
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                            <span className="text-2xl">✓</span>
                        </div>
                        <div>
                            <p className="text-sm text-slate-400">Status</p>
                            <p className="text-xl font-semibold text-white">Online</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8">
                <h2 className="text-xl font-semibold text-white mb-6">Hızlı İşlemler</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { icon: '➕', label: 'Yeni Ekle', color: 'blue' },
                        { icon: '📝', label: 'Düzenle', color: 'purple' },
                        { icon: '📊', label: 'Raporlar', color: 'green' },
                        { icon: '⚙️', label: 'Ayarlar', color: 'orange' },
                    ].map((action, idx) => (
                        <button
                            key={idx}
                            className={`
                p-6 rounded-lg border border-slate-700/50 
                hover:border-${action.color}-500/50 
                bg-slate-900/40 hover:bg-slate-800/60
                transition-all hover:scale-105 hover:shadow-lg
                group
              `}
                        >
                            <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                                {action.icon}
                            </div>
                            <p className="text-sm text-slate-300 font-medium">{action.label}</p>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
