const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log("attempting to seed...");
  const utypeCheck = await prisma.uType.findFirst();
  const ptypeCheck = await prisma.pType.findFirst();
  if (!utypeCheck) {
    await prisma.uType.createMany({
      data: [
          { type_name: 'Basic' }, 
          { type_name: 'Author' },
          { type_name: 'Admin'}
      ],
    });
  } else {
    console.log("uType already seeded.");
  }
  if (!ptypeCheck) {
    await prisma.pType.createMany({
      data: [
        { type_name: 'Unpublished'}, 
        { type_name: 'Published' }
      ]
    })
  } else {
    console.log("pType already seeded.");
  }
  return;
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
