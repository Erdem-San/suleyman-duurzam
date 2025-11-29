import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET - List all published blog posts
export async function GET() {
    try {
        const blogs = await prisma.blogPost.findMany({
            where: {
                published: true
            },
            orderBy: {
                publishedAt: 'desc'
            },
            select: {
                id: true,
                title: true,
                slug: true,
                excerpt: true,
                featuredImage: true,
                publishedAt: true,
                createdAt: true,
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
