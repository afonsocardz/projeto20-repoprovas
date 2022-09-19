import { faker } from '@faker-js/faker';
import  prisma  from '../src/config/database';

async function main() {
  const meme = {
    url: faker.internet.url(),
    title: faker.lorem.word(2),
    description: faker.lorem.paragraph(1),
    author: faker.name.fullName()
  };

  await prisma.memes.upsert({
    where: { title: meme.title },
    update: {},
    create: meme
  });
}

main()
  .catch(e => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
