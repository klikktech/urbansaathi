"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-urban-dark-gray mb-2">
            Urban Saathi
          </h1>
          <h2 className="text-3xl font-bold text-urban-dark-gray mb-2">
            Sign Up
          </h2>
        </div>

        <div className="space-y-4">
          <Input placeholder="Name" value={name} onChange={setName} />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={setEmail}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={setPassword}
          />
          <Button text="Sign up" active={true} />
        </div>

        <div className="text-center mt-6 text-[var(--color-urban-black)]">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-[var(--color-urban-red)] underline"
          >
            Log in
          </Link>
        </div>
      </div>

      <Image
        src="/assets/rides.png"
        alt="Rides"
        width={200}
        height={200}
        className="absolute top-20 right-10 opacity-60"
      />
      <Image
        src="/assets/marketplace.png"
        alt="Marketplace"
        width={150}
        height={150}
        className="absolute bottom-20 left-10 opacity-60"
      />
    </div>
  );
}
