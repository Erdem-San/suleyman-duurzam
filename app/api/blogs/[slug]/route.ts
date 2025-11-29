import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET - Get single published blog post by slug
export async function GET(
    request: Request,
    { params }: { params: { slug: string } }
) {
    try {
        const blog = await prisma.blogPost.findFirst({
            where: {
                slug: params.slug,
                published: true
            }
        });

        if (!blog) {
            return NextResponse.json(
                { error: 'Blog post not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(blog);
    } catch (error) {
        console.error('Error fetching blog:', error);
        return NextResponse.json(
            { error: 'Failed to fetch blog post' },
            { status: 500 }
        );
    }
}
