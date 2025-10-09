// backend/db-populate.js
const { PrismaClient } = require('./generated/prisma'); // or '@prisma/client'
const prisma = new PrismaClient();

const sampleExpenses = [
  { date: new Date('2023-04-01T12:00:00Z'), description: 'Lunch at cafe',    payer: 'Alice', amount: 12.5 },
  { date: new Date('2023-04-02T09:30:00Z'), description: 'Train ticket',     payer: 'Bob',   amount: 2.9 },
  { date: new Date('2023-04-03T18:45:00Z'), description: 'Office supplies',  payer: 'Alice', amount: 23.0 }
];

async function main() {
  // createMany is fast. If you want returned records, use create in a loop or find after createMany.
  await prisma.expense.createMany({
    data: sampleExpenses,
    skipDuplicates: true, // requires a unique constraint to be meaningful
  });

  const all = await prisma.expense.findMany();
  console.log('Inserted/Found rows:', JSON.stringify(all, null, 2));
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
