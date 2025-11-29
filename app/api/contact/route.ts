import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { naam, email, telefoon, onderwerp, bericht } = body;

        // Validation
        if (!naam || !email || !onderwerp || !bericht) {
            return NextResponse.json(
                { error: 'Naam, email, onderwerp en bericht zijn verplicht' },
                { status: 400 }
            );
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Ongeldig e-mailadres' },
                { status: 400 }
            );
        }

        // Create contact message
        const contactMessage = await prisma.contactMessage.create({
            data: {
                name: naam,
                email: email,
                phone: telefoon || null,
                subject: onderwerp,
                message: bericht,
                status: 'UNREAD',
            },
        });

        return NextResponse.json(
            {
                message: 'Bericht succesvol verzonden',
                id: contactMessage.id
            },
            { status: 201 }
        );
    } catch (error) {
        console.error('==================== CONTACT FORM ERROR ====================');
        console.error('Full error object:', error);
        console.error('Error message:', error instanceof Error ? error.message : 'Unknown error');
        console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');
        console.error('===========================================================');
        return NextResponse.json(
            { error: 'Er is iets misgegaan. Probeer het later opnieuw.' },
            { status: 500 }
        );
    }
}
