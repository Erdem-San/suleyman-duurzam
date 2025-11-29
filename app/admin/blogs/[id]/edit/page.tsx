'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import ImageUpload from '@/app/components/admin/ImageUpload';
import RichTextEditor from '@/app/components/admin/RichTextEditor';

export default function EditBlogPage() {
    const router = useRouter();
    const params = useParams();
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    const [formData, setFormData] = useState({
        title: '',
        slug: '',
        excerpt: '',
        content: '',
        featuredImage: '',
        metaTitle: '',
        metaDescription: '',
        metaKeywords: '',
        published: false
    });

    useEffect(() => {
        fetchBlog();
    }, []);

    const fetchBlog = async () => {
        try {
            const response = await fetch(`/api/admin/blogs/${params.id}`);
            if (response.ok) {
                const data = await response.json();
                setFormData({
                    title: data.title || '',
                    slug: data.slug || '',
                    excerpt: data.excerpt || '',
                    content: data.content || '',
                    featuredImage: data.featuredImage || '',
                    metaTitle: data.metaTitle || '',
                    metaDescription: data.metaDescription || '',
                    metaKeywords: data.metaKeywords || '',
                    published: data.published || false
                });
            } else {
                alert('Blog post not found');
                router.push('/admin/blogs');
            }
        } catch (error) {
            console.error('Error fetching blog:', error);
            alert('Failed to load blog post');
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);

        try {
            const response = await fetch(`/api/admin/blogs/${params.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Blog post updated successfully!');
                router.push('/admin/blogs');
            } else {
                const error = await response.json();
                alert(`Error: ${error.error || 'Something went wrong'}`);
            }
        } catch (error) {
            console.error('Error updating blog:', error);
            alert('Failed to update blog post');
        } finally {
            setSaving(false);
        }
    };

    const handleDelete = async () => {
        if (!confirm('Are you sure you want to delete this blog post? This action cannot be undone.')) {
            return;
        }

        try {
            const response = await fetch(`/api/admin/blogs/${params.id}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                alert('Blog post deleted successfully');
                router.push('/admin/blogs');
            } else {
                alert('Failed to delete blog post');
            }
        } catch (error) {
            console.error('Error deleting blog:', error);
            alert('Failed to delete blog post');
        }
    };

    const generateSlug = (title: string) => {
        return title
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w\-]+/g, '')
            .replace(/\-\-+/g, '-')
            .replace(/^-+/, '')
            .replace(/-+$/, '');
    };

    if (loading) {
        return (
            <div className="p-8 flex items-center justify-center min-h-screen">
                <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="p-8 max-w-5xl mx-auto">
            {/* Header */}
            <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                        <Link
                            href="/admin/blogs"
                            className="text-slate-300 hover:text-white transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </Link>
                        <div>
                            <h1 className="text-white text-3xl font-bold">Edit Blog Post</h1>
                            <p className="text-slate-400 mt-1">Update your blog post details</p>
                        </div>
                    </div>
                    <button
                        type="button"
                        onClick={handleDelete}
                        className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        Delete Post
                    </button>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Featured Image */}
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                    <ImageUpload
                        value={formData.featuredImage}
                        onChange={(url) => setFormData({ ...formData, featuredImage: url })}
                        label="Featured Image"
                    />
                </div>

                {/* Basic Info */}
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                    <h2 className="text-xl font-semibold text-white mb-4">Basic Information</h2>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-white mb-2">
                                Title *
                            </label>
                            <input
                                type="text"
                                required
                                value={formData.title}
                                onChange={(e) => {
                                    const title = e.target.value;
                                    setFormData({ ...formData, title });
                                }}
                                placeholder="Enter blog post title"
                                className="w-full bg-slate-900 border border-slate-700 text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-white mb-2">
                                Slug *
                            </label>
                            <div className="flex items-center gap-2">
                                <span className="text-slate-500">/blog/</span>
                                <input
                                    type="text"
                                    required
                                    value={formData.slug}
                                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                                    placeholder="url-friendly-slug"
                                    className="flex-1 bg-slate-900 border border-slate-700 text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                <button
                                    type="button"
                                    onClick={() => setFormData({ ...formData, slug: generateSlug(formData.title) })}
                                    className="bg-slate-700 text-white px-4 py-3 rounded-lg hover:bg-slate-600 transition-colors text-sm"
                                >
                                    Generate
                                </button>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-white mb-2">
                                Excerpt
                            </label>
                            <textarea
                                value={formData.excerpt}
                                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                                placeholder="Short description of your blog post"
                                rows={3}
                                className="w-full bg-slate-900 border border-slate-700 text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            <p className="text-xs text-slate-500 mt-1">
                                This will be shown in blog listings and previews
                            </p>
                        </div>
                    </div>
                </div>

                {/* Content Editor */}
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                    <h2 className="text-xl font-semibold text-white mb-4">Content *</h2>
                    <RichTextEditor
                        value={formData.content}
                        onChange={(content) => setFormData({ ...formData, content })}
                        placeholder="Write your blog content here..."
                    />
                </div>

                {/* SEO Section */}
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                    <div className="flex items-center gap-2 mb-4">
                        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <h2 className="text-xl font-semibold text-white">SEO Optimization</h2>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-white mb-2">
                                Meta Title
                            </label>
                            <input
                                type="text"
                                value={formData.metaTitle}
                                onChange={(e) => setFormData({ ...formData, metaTitle: e.target.value })}
                                placeholder="SEO title (leave empty to use post title)"
                                className="w-full bg-slate-900 border border-slate-700 text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            <p className="text-xs text-slate-500 mt-1">
                                Recommended: 50-60 characters
                            </p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-white mb-2">
                                Meta Description
                            </label>
                            <textarea
                                value={formData.metaDescription}
                                onChange={(e) => setFormData({ ...formData, metaDescription: e.target.value })}
                                placeholder="Brief description for search engines"
                                rows={3}
                                className="w-full bg-slate-900 border border-slate-700 text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            <p className="text-xs text-slate-500 mt-1">
                                Recommended: 150-160 characters
                            </p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-white mb-2">
                                Meta Keywords
                            </label>
                            <input
                                type="text"
                                value={formData.metaKeywords}
                                onChange={(e) => setFormData({ ...formData, metaKeywords: e.target.value })}
                                placeholder="keyword1, keyword2, keyword3"
                                className="w-full bg-slate-900 border border-slate-700 text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            <p className="text-xs text-slate-500 mt-1">
                                Separate keywords with commas
                            </p>
                        </div>
                    </div>
                </div>

                {/* Publish Options */}
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                    <h2 className="text-xl font-semibold text-white mb-4">Publish Options</h2>
                    <label className="flex items-center gap-3 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={formData.published}
                            onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                            className="w-5 h-5 rounded border-slate-700 bg-slate-900 text-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-0"
                        />
                        <div>
                            <span className="text-white font-medium">Published</span>
                            <p className="text-sm text-slate-400">
                                Make this blog post visible to the public
                            </p>
                        </div>
                    </label>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between gap-4 pt-4">
                    <Link
                        href="/admin/blogs"
                        className="bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-600 transition-colors"
                    >
                        Cancel
                    </Link>
                    <button
                        type="submit"
                        disabled={saving}
                        className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-600 transition-all shadow-lg shadow-blue-500/30 disabled:opacity-50"
                    >
                        {saving ? 'Updating...' : 'Update Blog Post'}
                    </button>
                </div>
            </form>
        </div>
    );
}
