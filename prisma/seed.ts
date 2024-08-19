import { PrismaClient } from "@prisma/client";

async function main() {
  const prisma = new PrismaClient();

  try {
    const user = await prisma.user.create({
      data: {
        name: "Pedro",
        email: "pedro@gmail.com",
        password: "123456",
      },
    });
    console.log("User created:", user);
  } catch (err) {
    console.error("Error creating user:", err);
  } finally {
    await prisma.$disconnect();
  }
}

main();
