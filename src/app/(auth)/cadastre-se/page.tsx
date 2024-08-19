"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      router.push("/login");
    }
  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email: <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" />
        </label>
        <label>
          Password: <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
