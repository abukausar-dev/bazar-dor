import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import FormField from "@/components/auth/FormField";
import UserAvatar from "@/components/common/UserAvatar";
import SignOutButton from "@/components/profile/SignOutButton";
import { getServerSession } from "@/lib/session";

export const metadata: Metadata = { title: "আমার প্রোফাইল" };

export default async function ProfilePage() {
    const session = await getServerSession();
    if (!session) {
        redirect("/signin?callbackUrl=%2Fprofile&reason=login-required");
    }

    const { user } = session;

    return (
        <main className="mx-auto max-w-xl space-y-6 px-4 py-6">
            <header className="flex flex-col gap-1">
                <h1 className="text-2xl font-bold leading-8">আমার প্রোফাইল</h1>
                <p className="text-sm leading-5">আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
            </header>

            <section
                aria-label="অ্যাকাউন্ট"
                className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-base-300 bg-base-100 p-5"
            >
                <div className="flex min-w-0 items-center gap-4">
                    <UserAvatar
                        name={user.name}
                        image={user.image}
                        className="size-14 shrink-0 rounded-xl"
                    />
                    <div className="min-w-0">
                        <p className="truncate text-lg font-semibold leading-6">{user.name}</p>
                        <p className="truncate text-sm leading-5">{user.email}</p>
                    </div>
                </div>
                <SignOutButton />
            </section>

            <section
                aria-labelledby="info-heading"
                className="rounded-2xl border border-base-300 bg-base-100 p-5"
            >
                <h2 id="info-heading" className="text-base font-semibold leading-6">
                    তথ্য
                </h2>
                <div className="mt-4 flex flex-col gap-4">
                    <FormField id="name" label="নাম" value={user.name} readOnly />
                    <Link href="/profile/update" className="btn btn-primary w-full">
                        আপডেট
                    </Link>
                </div>
            </section>
        </main>
    );
}