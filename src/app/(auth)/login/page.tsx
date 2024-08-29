"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Executa o login com credenciais
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      setError("Email ou senha incorretos. Tente novamente."); // Mensagem de erro personalizada
    } else {
      // Redireciona para a página inicial ou qualquer outra página
      router.push("/");
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:{" "}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email" // Ajuste para o tipo email
            required // Torna obrigatório
            className="text-black"
          />
        </label>
        <label>
          Password:{" "}
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required // Torna obrigatório
            className="text-black"
          />
        </label>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Conecte-se</button>
      </form>
      <div>
        <Link href="/cadastre-se">Não possui conta ainda ?</Link>
      </div>
    </div>
  );
}
