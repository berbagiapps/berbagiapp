const { PrismaClient } = require('../src/generated/client');
const prisma = new PrismaClient();

async function main() {
  // Menghapus data user lama (jika ada) agar tidak bentrok
  await prisma.user.deleteMany({});

  // Memasukkan user admin baru
  const admin = await prisma.user.create({
    data: {
      name: "Admin Berbagi",
      email: "admin@gmail.com",
      password: "123456", // Sesuaikan jika kode login kamu pakai bcrypt, ganti dengan hash-nya
      role: "admin",
      isActive: true,
    },
  });

  console.log("✅ Seed database sukses! User admin berhasil dibuat:", admin.email);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });