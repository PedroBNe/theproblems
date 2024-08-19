import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { email, password } = await request.json();

  const userExists = await prisma.user.findUnique({ where: { email } });

  if (userExists) {
    return NextResponse.json(
      { message: "User already exists" },
      { status: 400 }
    );
  } else {
    const user = await prisma.user.create({
      data: {
        email,
        password,
      },
    });
    return NextResponse.json(user);
  }
}
