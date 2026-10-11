"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export function useSignOut() {
    const router = useRouter();
    const [isPending, setIsPending] = useState(false);

    async function signOut() {
        setIsPending(true);
        const { error } = await authClient.signOut();

        if (error) {
            toast.error("সাইন আউট করা যায়নি। আবার চেষ্টা করুন।");
            setIsPending(false);
            return;
        }

        toast.success("সাইন আউট হয়েছে।");
        router.push("/");
        router.refresh();
    }

    return { signOut, isPending };
}