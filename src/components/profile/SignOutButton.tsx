"use client";

import { LogOut } from "lucide-react";
import { useSignOut } from "@/hooks/use-sign-out";

export default function SignOutButton() {
    const { signOut, isPending } = useSignOut();

    return (
        <button
            type="button"
            onClick={signOut}
            disabled={isPending}
            className="btn btn-outline btn-error hover:text-white btn-sm"
        >
            {isPending ? (
                <span className="loading loading-spinner loading-xs" />
            ) : (
                <LogOut className="size-4" aria-hidden="true" />
            )}
            সাইন আউট
        </button>
    );
}