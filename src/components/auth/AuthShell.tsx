import Link from "next/link";
import type { ReactNode } from "react";

interface AuthShellProps {
    title: string;
    subtitle: string;
    children: ReactNode;
}

export default function AuthShell({ title, subtitle, children }: AuthShellProps) {
    return (
        <main className="mx-auto flex max-w-md flex-col gap-6 px-4 py-10">
            <header className="flex flex-col gap-1 text-center">
                <h1 className="text-2xl font-bold leading-8">{title}</h1>
                <p className="text-sm leading-5">{subtitle}</p>
            </header>

            <div className="rounded-2xl border border-base-300 bg-base-100 p-6">
                {children}
            </div>

            <Link href="/" className="text-center text-sm leading-5 hover:underline">
                ← হোম পেজে ফিরে যান
            </Link>
        </main>
    );
}