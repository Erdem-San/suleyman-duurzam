'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogCard from '../components/BlogCard';

interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string | null;
    featuredImage: string | null;
    publishedAt: Date | null;
}

export default function BlogPage() {
    const [blogs, setBlogs] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            const response = await fetch('/api/blogs');
            if (response.ok) {
                const data = await response.json();
                setBlogs(data);
            }
        } catch (error) {
            console.error('Error fetching blogs:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-montserrat">
                            Duurzaamheid Blog
                        </h1>
                        <p className="text-lg md:text-xl text-green-100 max-w-2xl mx-auto leading-relaxed">
                            Ontdek de laatste tips, trends en inzichten over duurzame energie en besparen op je energierekening
                        </p>
                    </div>
                </div>
            </section>

            {/* Blog Grid Section */}
            <section className="py-12 md:py-16 lg:py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        {loading ? (
                            /* Loading State */
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {[1, 2, 3, 4, 5, 6].map((i) => (
                                    <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden animate-pulse">
                                        <div className="h-56 bg-gray-200"></div>
                                        <div className="p-6 space-y-4">
                                            <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                                            <div className="h-6 bg-gray-200 rounded"></div>
                                            <div className="h-4 bg-gray-200 rounded"></div>
                                            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : blogs.length === 0 ? (
                            /* Empty State */
                            <div className="text-center py-20">
                                <div className="max-w-md mx-auto">
                                    <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3 font-montserrat">
                                        Nog geen blogs beschikbaar
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        We zijn hard aan het werk om interessante content voor je te maken. Kom binnenkort terug!
                                    </p>
                                </div>
                            </div>
                        ) : (
                            /* Blog Grid */
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {blogs.map((blog) => (
                                    <BlogCard
                                        key={blog.id}
                                        id={blog.id}
                                        title={blog.title}
                                        slug={blog.slug}
                                        excerpt={blog.excerpt}
                                        featuredImage={blog.featuredImage}
                                        publishedAt={blog.publishedAt}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
