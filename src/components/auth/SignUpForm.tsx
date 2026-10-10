"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import { getAuthErrorMessage } from "@/lib/auth-helpers";
import FormField from "./FormField";
import SocialButtons from "./SocialButtons";

export default function SignUpForm() {
    const router = useRouter();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [image, setImage] = useState("");
    const [password, setPassword] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    function validate(): string | null {
        if (!name.trim()) return "আপনার নাম লিখুন।";
        if (!email.trim()) return "ইমেইল ঠিকানা দিন।";
        if (password.length < 8) return "পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে।";
        return null;
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const validationError = validate();
        if (validationError) {
            toast.error(validationError);
            return;
        }

        setIsSubmitting(true);
        const { error } = await authClient.signUp.email({
            name: name.trim(),
            email: email.trim(),
            password,
            image: image.trim() || undefined,
        });
        setIsSubmitting(false);

        if (error) {
            toast.error(getAuthErrorMessage(error));
            return;
        }

        await authClient.signOut();
        toast.success("অ্যাকাউন্ট তৈরি হয়েছে। এখন সাইন ইন করুন।");
        router.push("/signin");
    }

    return (
        <div className="flex flex-col gap-4">
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                <FormField
                    id="name"
                    label="নাম"
                    type="text"
                    autoComplete="name"
                    placeholder="আপনার নাম"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
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
                    id="image"
                    label="ছবির লিংক (ঐচ্ছিক)"
                    type="url"
                    autoComplete="off"
                    placeholder="https://example.com/photo.jpg"
                    value={image}
                    onChange={(event) => setImage(event.target.value)}
                />
                <FormField
                    id="password"
                    label="পাসওয়ার্ড"
                    type="password"
                    autoComplete="new-password"
                    placeholder="কমপক্ষে ৮ অক্ষর"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button type="submit" className="btn btn-primary w-full" disabled={isSubmitting}>
                    {isSubmitting && <span className="loading loading-spinner loading-sm" />}
                    অ্যাকাউন্ট তৈরি করুন
                </button>
            </form>

            <div className="divider my-0 text-xs">অথবা</div>

            <SocialButtons />

            <p className="text-center text-sm leading-5">
                অ্যাকাউন্ট আছে?{" "}
                <Link href="/signin" className="font-semibold text-primary hover:underline">
                    সাইন ইন করুন
                </Link>
            </p>
        </div>
    );
}