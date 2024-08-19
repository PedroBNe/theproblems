"use client"

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h1>Login</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          signIn("credentials", { email, password });
        }}
      >
        <label>
          Email: <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" />
        </label>
        <label>
          Password: <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
        </label>
        <button type="submit">Conecte-se</button>
      </form>
    </div>
  );
}
