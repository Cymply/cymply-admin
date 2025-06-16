"use client";

export default function ContentLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="mt-[calc(var(--header-height))] m-auto">{children}</div>
    </>
  );
}
