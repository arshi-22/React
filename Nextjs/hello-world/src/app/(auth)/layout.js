"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";
import { useState } from "react";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "ForgotPassword", href: "/forgot-password" },
];

export default function AuthLayout({ children }) {
  const pathname = usePathname();
  const [input, setInput] = useState("");

  return (
    <div>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link
            href={link.href}
            key={link.name}
            className={
              isActive ? "font-bold mr-4 text-red-600" : "text-blue-500 mr-4"
            }
          >
            {link.name}
          </Link>
        );
      })}
      <div>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
      </div>

      {children}
    </div>
  );
}
