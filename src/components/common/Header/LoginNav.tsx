"use client";

import { Button } from "@/components/Button";
import { signIn, useSession } from "next-auth/react";

export const LoginNav = () => {
  const { data: session, status } = useSession();

  if (status === "authenticated") {

    return (
      <div>
        <p>Olá, {session?.user?.name}!</p>
      </div>
    );
  }

  return <div><Button text="Entrar" onClick={() => signIn()} /></div>;
};
