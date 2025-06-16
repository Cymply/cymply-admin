"use client";
import { SidebarProvider } from "@/components/ui/sidebar";
import ContentLayout from "./content-layout";
import { AdminSidebar } from "@/widgets/sidebar/ui";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AdminSidebar />
      <main className="relative w-full h-full bg-bg-page">
        <ContentLayout>{children}</ContentLayout>
      </main>
    </SidebarProvider>
  );
}
