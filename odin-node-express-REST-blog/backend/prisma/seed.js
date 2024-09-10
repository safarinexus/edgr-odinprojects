const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log("attempting to seed...");
  try {
    await prisma.uType.createMany({
      data: [
          { type_name: 'Basic' }, 
          { type_name: 'Author' },
          { type_name: 'Admin'}
      ],
    });
  
    await prisma.pType.createMany({
      data: [
        { type_name: 'Unpublished'}, 
        { type_name: 'Published' }
      ]
    })
    console.log("seed success!");
  } catch (err) { 
    console.log("seed failed..."); 
    console.error(err);
  } finally {
    console.log("exiting...");
  }
  
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
