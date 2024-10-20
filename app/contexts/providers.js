"use client";
import { SessionProvider } from "next-auth/react";

export function Providers(props) {
  return <SessionProvider>{props.children}</SessionProvider>;
}
