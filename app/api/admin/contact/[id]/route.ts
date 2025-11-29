import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const contact = await prisma.contactMessage.findUnique({
            where: { id: params.id },
        });

        if (!contact || contact.isDeleted) {
            return NextResponse.json({ error: 'Contact not found' }, { status: 404 });
        }

        // Auto-mark as read when fetched
        if (contact.status === 'UNREAD') {
            await prisma.contactMessage.update({
                where: { id: params.id },
                data: { status: 'READ' },
            });
            contact.status = 'READ' as any;
        }

        return NextResponse.json(contact);
    } catch (error) {
        console.error('Get contact error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch contact' },
            { status: 500 }
        );
    }
}

export async function PATCH(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const body = await request.json();
        const { status } = body;

        if (!status || !['UNREAD', 'READ', 'DRAFT'].includes(status)) {
            return NextResponse.json(
                { error: 'Invalid status' },
                { status: 400 }
            );
        }

        const contact = await prisma.contactMessage.update({
            where: { id: params.id },
            data: { status },
        });

        return NextResponse.json(contact);
    } catch (error) {
        console.error('Update contact error:', error);
        return NextResponse.json(
            { error: 'Failed to update contact' },
            { status: 500 }
        );
    }
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        // Soft delete
        await prisma.contactMessage.update({
            where: { id: params.id },
            data: { isDeleted: true },
        });

        return NextResponse.json({ message: 'Contact deleted successfully' });
    } catch (error) {
        console.error('Delete contact error:', error);
        return NextResponse.json(
            { error: 'Failed to delete contact' },
            { status: 500 }
        );
    }
}
