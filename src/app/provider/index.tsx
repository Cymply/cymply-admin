'use client';

import React, { ReactNode } from 'react';
import {AuthProvider} from "@/features/model/AuthContext";

interface ProvidersProps {
  children: ReactNode;
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
};