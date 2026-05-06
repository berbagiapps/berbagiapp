// Mundur satu tingkat keluar dari folder 'routes', lalu masuk ke 'src/generated/client'
const { PrismaClient } = require('../src/generated/client');
const prisma = new PrismaClient();

module.exports = prisma;