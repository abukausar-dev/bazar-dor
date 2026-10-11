"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import toast from "react-hot-toast";
import FormField from "@/components/auth/FormField";
import { authClient } from "@/lib/auth-client";

export default function UpdateProfileForm({ currentName }: { currentName: string }) {
    const router = useRouter();
    const [name, setName] = useState(currentName);
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const trimmedName = name.trim();

        if (!trimmedName) {
            toast.error("নাম ফাঁকা রাখা যাবে না।");
            return;
        }

        if (trimmedName === currentName) {
            toast("নতুন কোনো পরিবর্তন নেই।");
            return;
        }

        setIsSubmitting(true);
        const { error } = await authClient.updateUser({ name: trimmedName });
        setIsSubmitting(false);

        if (error) {
            toast.error("তথ্য আপডেট করা যায়নি। আবার চেষ্টা করুন।");
            return;
        }

        toast.success("তথ্য সফলভাবে আপডেট হয়েছে।");
        router.push("/profile");
        router.refresh();
    }

    return (
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
            <button type="submit" className="btn btn-primary w-full" disabled={isSubmitting}>
                {isSubmitting && <span className="loading loading-spinner loading-sm" />}
                তথ্য আপডেট করুন
            </button>
        </form>
    );
}