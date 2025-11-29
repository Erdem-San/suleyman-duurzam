import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/leveranciers/[id] - Tek leverancier
export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> | { id: string } }
) {
    try {
        const { id } = typeof params === 'object' && 'then' in params ? await params : params;

        const leverancier = await prisma.leverancier.findUnique({
            where: { id },
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
        console.error('Error fetching leverancier:', error);
        return NextResponse.json(
            { error: 'Failed to fetch leverancier' },
            { status: 500 }
        );
    }
}

// PUT /api/leveranciers/[id] - Leverancier güncelleme (admin only)
export async function PUT(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> | { id: string } }
) {
    try {
        const { id } = typeof params === 'object' && 'then' in params ? await params : params;
        const body = await request.json();

        const {
            name,
            slug,
            logo,
            customers,
            description,
            rating,
            color,
            stroom,
            gas,
            vastrecht,
            features,
            voordelen,
            nadelen,
            categoryId,
            published
        } = body;

        // Eğer slug değiştiriliyorsa, benzersizliğini kontrol et
        if (slug) {
            const existing = await prisma.leverancier.findFirst({
                where: {
                    slug,
                    NOT: { id }
                }
            });

            if (existing) {
                return NextResponse.json(
                    { error: 'Slug already exists' },
                    { status: 400 }
                );
            }
        }

        const leverancier = await prisma.leverancier.update({
            where: { id },
            data: {
                ...(name !== undefined && { name }),
                ...(slug !== undefined && { slug }),
                ...(logo !== undefined && { logo }),
                ...(customers !== undefined && { customers }),
                ...(description !== undefined && { description }),
                ...(rating !== undefined && { rating: parseFloat(rating) }),
                ...(color !== undefined && { color }),
                ...(stroom !== undefined && { stroom }),
                ...(gas !== undefined && { gas }),
                ...(vastrecht !== undefined && { vastrecht }),
                ...(features !== undefined && { features }),
                ...(voordelen !== undefined && { voordelen }),
                ...(nadelen !== undefined && { nadelen }),
                ...(categoryId !== undefined && { categoryId }),
                ...(published !== undefined && { published })
            },
            include: {
                category: true
            }
        });

        return NextResponse.json(leverancier);
    } catch (error) {
        console.error('Error updating leverancier:', error);
        return NextResponse.json(
            { error: 'Failed to update leverancier' },
            { status: 500 }
        );
    }
}

// DELETE /api/leveranciers/[id] - Leverancier silme (admin only)
export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> | { id: string } }
) {
    try {
        const { id } = typeof params === 'object' && 'then' in params ? await params : params;

        await prisma.leverancier.delete({
            where: { id }
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error deleting leverancier:', error);
        return NextResponse.json(
            { error: 'Failed to delete leverancier' },
            { status: 500 }
        );
    }
}
