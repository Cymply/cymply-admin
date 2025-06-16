"use client";
import React from "react";

import { SidebarProvider } from "@/components/ui/sidebar";
import ContentLayout from "./content-layout";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <main className="relative w-full h-full bg-bg-page">
        <ContentLayout>{children}</ContentLayout>
      </main>
    </SidebarProvider>
  );
}
