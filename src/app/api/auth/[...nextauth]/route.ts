import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import { compare } from "bcryptjs"; // Importe bcryptjs para comparar senhas

const prisma = new PrismaClient();

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        // Encontre o usuário pelo e-mail
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        // Se o usuário não for encontrado ou a senha estiver incorreta
        if (!user || !(await compare(credentials.password, user.password))) {
          return null;
        }

        // Retorne o usuário sem a senha
        return { id: user.id.toString(), email: user.email, name: user.name };
      },
    }),
  ],
  pages: {
    signIn: "/login", // Página de login personalizada
  },
  session: {
    strategy: "jwt", // Use JWT para sessões
  },
  callbacks: {
    async jwt({ token, user }) {
      // Adicione o ID do usuário ao token JWT, se disponível
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      // Adicione o ID do token à sessão do usuário
      if (token) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET, // Certifique-se de que a variável de ambiente está configurada
});

export { handler as GET, handler as POST }; // Exportação para métodos HTTP
