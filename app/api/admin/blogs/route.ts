import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET - List all blog posts
export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const status = searchParams.get('status'); // 'published', 'draft', or null for all
        const search = searchParams.get('search');

        const where: any = {};

        if (status === 'published') {
            where.published = true;
        } else if (status === 'draft') {
            where.published = false;
        }

        if (search) {
            where.OR = [
                { title: { contains: search } },
                { excerpt: { contains: search } },
                { content: { contains: search } }
            ];
        }

        const blogs = await prisma.blogPost.findMany({
            where,
            orderBy: { createdAt: 'desc' },
            select: {
                id: true,
                title: true,
                slug: true,
                excerpt: true,
                featuredImage: true,
                published: true,
                publishedAt: true,
                createdAt: true,
                updatedAt: true,
            }
        });

        return NextResponse.json(blogs);
    } catch (error) {
        console.error('Error fetching blogs:', error);
        return NextResponse.json(
            { error: 'Failed to fetch blogs' },
            { status: 500 }
        );
    }
}

// POST - Create new blog post
export async function POST(request: Request) {
    try {
        const body = await request.json();
        const {
            title,
            slug,
            excerpt,
            content,
            featuredImage,
            metaTitle,
            metaDescription,
            metaKeywords,
            published
        } = body;

        // Validate required fields
        if (!title || !slug || !content) {
            return NextResponse.json(
                { error: 'Title, slug, and content are required' },
                { status: 400 }
            );
        }

        // Check if slug already exists
        const existingBlog = await prisma.blogPost.findUnique({
            where: { slug }
        });

        if (existingBlog) {
            return NextResponse.json(
                { error: 'A blog post with this slug already exists' },
                { status: 400 }
            );
        }

        const blog = await prisma.blogPost.create({
            data: {
                title,
                slug,
                excerpt,
                content,
                featuredImage,
                metaTitle,
                metaDescription,
                metaKeywords,
                published: published || false,
                publishedAt: published ? new Date() : null
            }
        });

        return NextResponse.json(blog, { status: 201 });
    } catch (error) {
        console.error('Error creating blog:', error);
        console.error('Error details:', error instanceof Error ? error.message : 'Unknown error');
        return NextResponse.json(
            {
                error: 'Failed to create blog post',
                details: error instanceof Error ? error.message : 'Unknown error'
            },
            { status: 500 }
        );
    }
}
