import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { prisma } from '@/lib/prisma'
import { verifyPassword } from '@/lib/auth'

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                username: { label: 'Kullanıcı Adı', type: 'text' },
                password: { label: 'Şifre', type: 'password' },
            },
            async authorize(credentials) {
                if (!credentials?.username || !credentials?.password) {
                    throw new Error('Kullanıcı adı ve şifre gerekli')
                }

                const user = await prisma.user.findUnique({
                    where: { username: credentials.username },
                })

                if (!user) {
                    throw new Error('Kullanıcı bulunamadı')
                }

                const isValid = await verifyPassword(
                    credentials.password,
                    user.password
                )

                if (!isValid) {
                    throw new Error('Geçersiz şifre')
                }

                return {
                    id: user.id,
                    username: user.username,
                    email: user.email,
                }
            },
        }),
    ],
    session: {
        strategy: 'jwt',
    },
    pages: {
        signIn: '/login',
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id
                token.username = user.username
            }
            return token
        },
        async session({ session, token }) {
            if (token && session.user) {
                session.user.id = token.id
                session.user.username = token.username
            }
            return session
        },
    },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
