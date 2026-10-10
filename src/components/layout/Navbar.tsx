import { Suspense } from "react";
import Link from "next/link";
import { getCategories } from "@/lib/api";
import TodayDate from "@/components/common/TodayDate";
import AuthButtons from "./AuthButtons";
import CategoryNav from "./CategoryNav";

export default async function Navbar() {
    const categories = await getCategories();

    return (
        <header className="border-b border-base-300 bg-base-100">
            <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
                <Link href="/" className="flex items-center gap-2">
                    <span
                        className="grid size-10 place-items-center rounded-xl bg-primary text-lg text-primary-content"
                        aria-hidden="true"
                    >
                        🛒
                    </span>
                    <span className="flex flex-col">
                        <span className="text-xl font-bold leading-7 tracking-[-0.5px]">
                            বাজার দর
                        </span>
                        <span className="text-xs leading-4">
                            <Suspense
                                fallback={
                                    <span className="skeleton inline-block h-3 w-36 align-middle" />
                                }
                            >
                                <TodayDate />
                            </Suspense>
                        </span>
                    </span>
                </Link>

                <AuthButtons />
            </div>

            <div className="border-t border-base-200">
                <div className="mx-auto max-w-6xl px-4">
                    <Suspense fallback={<div className="h-12" />}>
                        <CategoryNav categories={categories} />
                    </Suspense>
                </div>
            </div>
        </header>
    );
}