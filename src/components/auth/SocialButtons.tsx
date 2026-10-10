"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import { getAuthErrorMessage } from "@/lib/auth-helpers";
import { GitHubIcon, GoogleIcon } from "./BrandIcons";

type Provider = "google" | "github";

export default function SocialButtons ({ callbackURL = "/" }: { callbackURL?: string }) {
    const [pendingProvider, setPendingProvider] = useState<Provider | null>(null);

    async function handleSocialSignIn(provider: Provider) {
        setPendingProvider(provider);

        const { error } = await authClient.signIn.social({ provider, callbackURL });

        if (error) {
            toast.error(getAuthErrorMessage(error));
            setPendingProvider(null);
        }
    }

    return (
        <div className="grid grid-cols-2 gap-2">
            <button
                type="button"
                className="btn btn-outline btn-sm sm:btn-md"
                disabled={pendingProvider !== null}
                onClick={() => handleSocialSignIn("google")}
            >
                {pendingProvider === "google" ? (
                    <span className="loading loading-spinner loading-sm" />
                ) : (
                    <GoogleIcon className="size-5" />
                )}
                Google
            </button>
            <button
                type="button"
                className="btn btn-outline btn-sm sm:btn-md"
                disabled={pendingProvider !== null}
                onClick={() => handleSocialSignIn("github")}
            >
                {pendingProvider === "github" ? (
                    <span className="loading loading-spinner loading-sm" />
                ) : (
                    <GitHubIcon className="size-5" />
                )}
                GitHub
            </button>
        </div>
    );
}