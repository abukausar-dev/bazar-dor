"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState, type FormEvent } from "react";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import { getAuthErrorMessage, getSafeRedirect } from "@/lib/auth-helpers";
import FormField from "./FormField";
import SocialButtons from "./SocialButtons";

export default function SignInForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const callbackUrl = getSafeRedirect(searchParams.get("callbackUrl"));

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const hasShownNotice = useRef(false);

    useEffect(() => {
        if (searchParams.get("reason") === "login-required" && !hasShownNotice.current) {
            hasShownNotice.current = true;
            toast.error("এই পেজ দেখতে আগে সাইন ইন করুন।");
        }
    }, [searchParams]);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!email.trim() || !password) {
            toast.error("ইমেইল ও পাসওয়ার্ড দুটোই দিন।");
            return;
        }

        setIsSubmitting(true);
        const { error } = await authClient.signIn.email({
            email: email.trim(),
            password,
        });
        setIsSubmitting(false);

        if (error) {
            toast.error(getAuthErrorMessage(error));
            return;
        }

        toast.success("সফলভাবে সাইন ইন হয়েছে।");
        router.push(callbackUrl);
        router.refresh();
    }

    return (
        <div className="flex flex-col gap-4">
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                <FormField
                    id="email"
                    label="ইমেইল"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <FormField
                    id="password"
                    label="পাসওয়ার্ড"
                    type="password"
                    autoComplete="current-password"
                    placeholder="আপনার পাসওয়ার্ড"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button type="submit" className="btn btn-primary w-full" disabled={isSubmitting}>
                    {isSubmitting && <span className="loading loading-spinner loading-sm" />}
                    সাইন ইন
                </button>
            </form>

            <div className="divider my-0 text-xs">অথবা</div>

            <SocialButtons callbackURL={callbackUrl} />

            <p className="text-center text-sm leading-5">
                অ্যাকাউন্ট নেই?{" "}
                <Link href="/signup" className="font-semibold text-primary hover:underline">
                    সাইন আপ করুন
                </Link>
            </p>
        </div>
    );
}