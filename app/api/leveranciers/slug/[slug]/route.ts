import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/leveranciers/slug/[slug] - Slug'a göre leverancier getir
export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ slug: string }> | { slug: string } }
) {
    try {
        const { slug } = typeof params === 'object' && 'then' in params ? await params : params;

        const leverancier = await prisma.leverancier.findUnique({
            where: { slug },
            include: {
                category: true
            }
        });

        if (!leverancier) {
            return NextResponse.json(
                { error: 'Leverancier not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(leverancier);
    } catch (error) {
        console.error('Error fetching leverancier by slug:', error);
        return NextResponse.json(
            { error: 'Failed to fetch leverancier' },
            { status: 500 }
        );
    }
}
