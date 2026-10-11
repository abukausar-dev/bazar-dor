"use client";

import { ChevronDown, LogOut, User } from "lucide-react";
import Link from "next/link";
import UserAvatar from "@/components/common/UserAvatar";
import { useSignOut } from "@/hooks/use-sign-out";
import { authClient } from "@/lib/auth-client";

function closeMenu() {
    (document.activeElement as HTMLElement | null)?.blur();
}

export default function AuthButtons() {
    const { data: session, isPending } = authClient.useSession();
    const { signOut, isPending: isSigningOut } = useSignOut();

    async function handleSignOut() {
        closeMenu();
        await signOut();
    }

    if (isPending) {
        return <div className="skeleton h-10 w-32 rounded-lg" aria-label="লোড হচ্ছে" />;
    }

    if (!session) {
        return (
            <div className="flex items-center gap-2">
                <Link href="/signin" className="btn btn-ghost btn-sm sm:btn-md">
                    সাইন ইন
                </Link>
                <Link href="/signup" className="btn btn-primary btn-sm sm:btn-md">
                    সাইন আপ
                </Link>
            </div>
        );
    }

    const { user } = session;
    const firstName = user.name.split(" ")[0];

    return (
        <div className="dropdown dropdown-end">
            <button
                type="button"
                tabIndex={0}
                className="btn btn-ghost btn-sm gap-2 sm:btn-md"
                aria-label="ব্যবহারকারীর মেনু"
            >
                <UserAvatar name={user.name} image={user.image} className="size-7 rounded-full" />
                <span className="max-w-24 truncate">{firstName}</span>
                <ChevronDown className="size-4" aria-hidden="true" />
            </button>

            <div
                tabIndex={0}
                className="dropdown-content z-10 mt-2 w-60 rounded-2xl border border-base-300 bg-base-100 p-2 shadow-lg"
            >
                <div className="mb-1 border-b border-base-200 px-3 py-2">
                    <p className="truncate text-sm font-semibold leading-5">{user.name}</p>
                    <p className="truncate text-xs leading-4">{user.email}</p>
                </div>
                <ul className="menu w-full p-0">
                    <li>
                        <Link href="/profile" onClick={closeMenu}>
                            <User className="size-4" aria-hidden="true" />
                            আমার প্রোফাইল
                        </Link>
                    </li>
                    <li>
                        <button
                            type="button"
                            onClick={handleSignOut}
                            disabled={isSigningOut}
                            className="text-error"
                        >
                            <LogOut className="size-4" aria-hidden="true" />
                            সাইন আউট
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}