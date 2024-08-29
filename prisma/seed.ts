import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

// Reutilização do Prisma Client (recomendado para ambientes serverless)
const prisma = new PrismaClient();

async function main() {
  try {
    // Criação do hash seguro da senha
    const hashedPassword = await hash("123456", 12);

    // Criação do usuário com a senha hasheada
    const user = await prisma.user.create({
      data: {
        name: "Pedro",
        email: "pedro@gmail.com",
        password: hashedPassword, // Use a senha hasheada
      },
    });

    console.log("User created:", user);
  } catch (err) {
    console.error("Error creating user:", err);
  } finally {
    // Desconectar do Prisma Client
    await prisma.$disconnect();
  }
}

main();
