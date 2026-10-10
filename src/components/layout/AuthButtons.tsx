"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

function closeMenu() {
    (document.activeElement as HTMLElement | null)?.blur();
}

export default function AuthButtons() {
    const router = useRouter();
    const { data: session, isPending } = authClient.useSession();

    async function handleSignOut() {
        closeMenu();
        const { error } = await authClient.signOut();

        if (error) {
            toast.error("সাইন আউট করা যায়নি। আবার চেষ্টা করুন।");
            return;
        }

        toast.success("সাইন আউট হয়েছে।");
        router.push("/");
        router.refresh();
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
                {user.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        src={user.image}
                        alt=""
                        referrerPolicy="no-referrer"
                        className="size-7 rounded-full object-cover"
                    />
                ) : (
                    <span className="grid size-7 place-items-center rounded-full bg-primary text-sm font-semibold text-primary-content">
                        {firstName.charAt(0).toUpperCase()}
                    </span>
                )}
                <span className="max-w-24 truncate">{firstName}</span>
                <ChevronDown className="size-4" aria-hidden="true" />
            </button>

            <ul
                tabIndex={0}
                className="menu dropdown-content z-10 mt-2 w-52 rounded-xl border border-base-300 bg-base-100 p-2 shadow-lg"
            >
                <li className="menu-title truncate px-3 py-1 text-xs">{user.email}</li>
                <li>
                    <Link href="/profile" onClick={closeMenu}>
                        আমার প্রোফাইল
                    </Link>
                </li>
                <li>
                    <button type="button" onClick={handleSignOut}>
                        সাইন আউট
                    </button>
                </li>
            </ul>
        </div>
    );
}