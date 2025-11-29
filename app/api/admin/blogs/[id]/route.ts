import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET - Get single blog post
export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const blog = await prisma.blogPost.findUnique({
            where: { id: params.id }
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

// PUT - Update blog post
export async function PUT(
    request: Request,
    { params }: { params: { id: string } }
) {
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

        // Check if blog exists
        const existingBlog = await prisma.blogPost.findUnique({
            where: { id: params.id }
        });

        if (!existingBlog) {
            return NextResponse.json(
                { error: 'Blog post not found' },
                { status: 404 }
            );
        }

        // Check if slug is being changed and if it conflicts
        if (slug && slug !== existingBlog.slug) {
            const slugConflict = await prisma.blogPost.findUnique({
                where: { slug }
            });

            if (slugConflict) {
                return NextResponse.json(
                    { error: 'A blog post with this slug already exists' },
                    { status: 400 }
                );
            }
        }

        // Update publishedAt if publishing for the first time
        let publishedAt = existingBlog.publishedAt;
        if (published && !existingBlog.published) {
            publishedAt = new Date();
        } else if (!published) {
            publishedAt = null;
        }

        const blog = await prisma.blogPost.update({
            where: { id: params.id },
            data: {
                title,
                slug,
                excerpt,
                content,
                featuredImage,
                metaTitle,
                metaDescription,
                metaKeywords,
                published,
                publishedAt
            }
        });

        return NextResponse.json(blog);
    } catch (error) {
        console.error('Error updating blog:', error);
        return NextResponse.json(
            { error: 'Failed to update blog post' },
            { status: 500 }
        );
    }
}

// DELETE - Delete blog post
export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const blog = await prisma.blogPost.findUnique({
            where: { id: params.id }
        });

        if (!blog) {
            return NextResponse.json(
                { error: 'Blog post not found' },
                { status: 404 }
            );
        }

        await prisma.blogPost.delete({
            where: { id: params.id }
        });

        return NextResponse.json({ message: 'Blog post deleted successfully' });
    } catch (error) {
        console.error('Error deleting blog:', error);
        return NextResponse.json(
            { error: 'Failed to delete blog post' },
            { status: 500 }
        );
    }
}
