"use client";

export default function ContentLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="px-14 mt-[calc(var(--header-height))] pb-4 m-auto">{children}</div>
    </>
  );
}
