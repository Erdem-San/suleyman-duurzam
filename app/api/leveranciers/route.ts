import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/leveranciers - Tüm leveranciers listesi
export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const category = searchParams.get('category');
        const published = searchParams.get('published');

        const where: any = {};

        if (published !== null) {
            where.published = published === 'true';
        }

        if (category) {
            const categoryRecord = await prisma.leverancierCategory.findUnique({
                where: { slug: category }
            });
            if (categoryRecord) {
                where.categoryId = categoryRecord.id;
            }
        }

        const leveranciers = await prisma.leverancier.findMany({
            where,
            include: {
                category: true
            },
            orderBy: {
                name: 'asc'
            }
        });

        return NextResponse.json(leveranciers);
    } catch (error) {
        console.error('Error fetching leveranciers:', error);
        return NextResponse.json(
            { error: 'Failed to fetch leveranciers' },
            { status: 500 }
        );
    }
}

// POST /api/leveranciers - Yeni leverancier ekleme (admin only)
export async function POST(request: NextRequest) {
    try {
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

        // Slug benzersizliğini kontrol et
        const existing = await prisma.leverancier.findUnique({
            where: { slug }
        });

        if (existing) {
            return NextResponse.json(
                { error: 'Slug already exists' },
                { status: 400 }
            );
        }

        const leverancier = await prisma.leverancier.create({
            data: {
                name,
                slug,
                logo,
                customers,
                description,
                rating: parseFloat(rating),
                color,
                stroom,
                gas,
                vastrecht,
                features,
                voordelen,
                nadelen,
                categoryId,
                published: published ?? true
            },
            include: {
                category: true
            }
        });

        return NextResponse.json(leverancier, { status: 201 });
    } catch (error) {
        console.error('Error creating leverancier:', error);
        return NextResponse.json(
            { error: 'Failed to create leverancier' },
            { status: 500 }
        );
    }
}
