'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from "@/features/model/AuthContext";
import Login from "@/widgets/account/ui/Login";

export default function LoginPage() {
  return (
    <Login/>
  );
}