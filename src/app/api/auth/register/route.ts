import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs"; // Importa bcryptjs para hashear senhas

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { name, email, password } = await request.json();

  // Verifica se o usuário já existe
  const userExists = await prisma.user.findUnique({ where: { email } });

  if (userExists) {
    return NextResponse.json(
      { message: "User already exists" },
      { status: 400 }
    );
  }

  // Hasheia a senha antes de armazená-la no banco de dados
  const hashedPassword = await hash(password, 12);

  // Cria o usuário com a senha hasheada
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword, // Armazena a senha hasheada
    },
  });

  // Retorna a resposta com o novo usuário criado
  return NextResponse.json(user, { status: 201 });
}
