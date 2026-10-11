import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import UpdateProfileForm from "@/components/profile/UpdateProfileForm";
import { getServerSession } from "@/lib/session";

export const metadata: Metadata = { title: "তথ্য আপডেট" };

export default async function UpdateProfilePage() {
    const session = await getServerSession();
    if (!session) {
        redirect("/signin?callbackUrl=%2Fprofile%2Fupdate&reason=login-required");
    }

    return (
        <main className="mx-auto max-w-xl space-y-6 px-4 py-6">
            <header className="flex flex-col gap-1">
                <h1 className="text-2xl font-bold leading-8">তথ্য আপডেট করুন</h1>
                <p className="text-sm leading-5">আপনার নাম বদলে সংরক্ষণ করুন।</p>
            </header>

            <section className="rounded-2xl border border-base-300 bg-base-100 p-5">
                <UpdateProfileForm currentName={session.user.name} />
            </section>

            <Link href="/profile" className="inline-block text-sm leading-5 hover:underline">
                ← প্রোফাইলে ফিরে যান
            </Link>
        </main>
    );
}