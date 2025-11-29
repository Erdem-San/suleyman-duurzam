'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string | null;
    content: string;
    featuredImage: string | null;
    metaTitle: string | null;
    metaDescription: string | null;
    metaKeywords: string | null;
    publishedAt: Date | null;
    createdAt: Date;
}

export default function BlogDetailPage() {
    const params = useParams();
    const router = useRouter();
    const [blog, setBlog] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (params.slug) {
            fetchBlog(params.slug as string);
        }
    }, [params.slug]);

    const fetchBlog = async (slug: string) => {
        try {
            const response = await fetch(`/api/blogs/${slug}`);
            if (response.ok) {
                const data = await response.json();
                setBlog(data);

                // Update meta tags dynamically
                if (data.metaTitle) {
                    document.title = data.metaTitle;
                }
            } else {
                router.push('/blog');
            }
        } catch (error) {
            console.error('Error fetching blog:', error);
            router.push('/blog');
        } finally {
            setLoading(false);
        }
    };

    const formatDate = (date: Date | null) => {
        if (!date) return '';
        return new Date(date).toLocaleDateString('nl-NL', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const calculateReadTime = (content: string) => {
        const wordsPerMinute = 200;
        const words = content.trim().split(/\s+/).length;
        const minutes = Math.ceil(words / wordsPerMinute);
        return `${minutes} min`;
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-white">
                <Header />
                <div className="flex items-center justify-center min-h-[60vh]">
                    <div className="w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
                </div>
                <Footer />
            </div>
        );
    }

    if (!blog) {
        return null;
    }

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Article Container */}
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
                {/* Back to Blog */}
                <div className="mb-8">
                    <a
                        href="/blog"
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-green-600 font-medium transition-colors group"
                    >
                        <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Terug naar blog
                    </a>
                </div>

                {/* Article Header */}
                <header className="mb-12">
                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight font-montserrat">
                        {blog.title}
                    </h1>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm md:text-base">
                        {blog.publishedAt && (
                            <>
                                <time dateTime={new Date(blog.publishedAt).toISOString()} className="font-medium">
                                    {formatDate(blog.publishedAt)}
                                </time>
                                <span className="text-gray-400">•</span>
                            </>
                        )}
                        <span className="font-medium">{calculateReadTime(blog.content)} leestijd</span>
                    </div>
                </header>

                {/* Featured Image */}
                {blog.featuredImage && (
                    <div className="mb-12 -mx-4 sm:mx-0">
                        <div className="relative w-full aspect-[16/9] sm:rounded-xl overflow-hidden bg-gray-100">
                            <Image
                                src={blog.featuredImage}
                                alt={blog.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                )}

                {/* Article Content */}
                <div
                    className="prose prose-lg md:prose-xl max-w-none
                        prose-headings:font-montserrat prose-headings:font-bold prose-headings:text-gray-900 prose-headings:leading-tight
                        prose-h1:text-4xl prose-h1:mb-6 prose-h1:mt-12
                        prose-h2:text-3xl prose-h2:mb-5 prose-h2:mt-10
                        prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-8
                        prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                        prose-a:text-green-600 prose-a:no-underline prose-a:font-medium hover:prose-a:text-green-700 hover:prose-a:underline
                        prose-strong:text-gray-900 prose-strong:font-semibold
                        prose-ul:my-6 prose-ol:my-6
                        prose-li:text-gray-700 prose-li:my-2
                        prose-blockquote:border-l-4 prose-blockquote:border-green-500 prose-blockquote:bg-green-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:my-8 prose-blockquote:not-italic
                        prose-blockquote:text-gray-700
                        prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:text-gray-800 prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
                        prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-xl prose-pre:my-8
                        prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                />

                {/* Article Footer - Share */}
                <footer className="mt-16 pt-12 border-t border-gray-200">
                    <div className="space-y-6">
                        {/* Share Section */}
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-4 font-montserrat">
                                Deel dit artikel
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                <a
                                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                    Facebook
                                </a>
                                <a
                                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&text=${encodeURIComponent(blog.title)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-sky-500 text-white px-5 py-2.5 rounded-lg hover:bg-sky-600 transition-colors font-medium text-sm"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                    </svg>
                                    Twitter
                                </a>
                                <a
                                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-blue-700 text-white px-5 py-2.5 rounded-lg hover:bg-blue-800 transition-colors font-medium text-sm"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>
            </article>

            <Footer />
        </div>
    );
}
