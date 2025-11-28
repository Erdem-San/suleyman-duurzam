import { PrismaClient } from '@prisma/client'
import { hashPassword } from '../lib/auth'

const prisma = new PrismaClient()

async function createAdmin() {
    const username = process.argv[2]
    const password = process.argv[3]

    if (!username || !password) {
        console.error('❌ Kullanım: npm run create-admin <kullanıcı_adı> <şifre>')
        process.exit(1)
    }

    try {
        // Check if user already exists
        const existingUser = await prisma.user.findUnique({
            where: { username },
        })

        if (existingUser) {
            console.error(`❌ "${username}" kullanıcı adı zaten mevcut!`)
            process.exit(1)
        }

        // Hash password and create user
        const hashedPassword = await hashPassword(password)

        const user = await prisma.user.create({
            data: {
                username,
                password: hashedPassword,
            },
        })

        console.log('✅ Admin kullanıcısı başarıyla oluşturuldu!')
        console.log(`👤 Kullanıcı Adı: ${user.username}`)
        console.log(`🆔 ID: ${user.id}`)
        console.log(`📅 Oluşturulma: ${user.createdAt}`)
        console.log('\n🔐 Şimdi giriş yapabilirsiniz: http://localhost:3002/login')
    } catch (error) {
        console.error('❌ Hata oluştu:', error)
        process.exit(1)
    } finally {
        await prisma.$disconnect()
    }
}

createAdmin()
