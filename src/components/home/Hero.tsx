import { Suspense } from "react";
import TodayDate from "@/components/common/TodayDate";
import HeroIllustration from "./HeroIllustration";

export default function Hero() {
    return (
        <section className="rounded-3xl border border-base-300 bg-base-100">
            <div className="flex flex-col items-center justify-between gap-8 px-4 py-8 md:flex-row md:py-10">
                <div className="flex max-w-xl flex-col items-start gap-2">
                    <p className="rounded-[14px] bg-primary/10 px-3 py-1 text-sm font-medium leading-5 text-primary">
                        <Suspense
                            fallback={
                                <span className="skeleton inline-block h-4 w-36 align-middle" />
                            }
                        >
                            <TodayDate />
                        </Suspense>
                    </p>

                    <h1 className="text-3xl font-bold leading-tight sm:text-4xl sm:leading-[45px]">
                        আজকের বাজারের দাম এক নজরে
                    </h1>

                    <p className="mt-1 text-base leading-6">
                        চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
                        বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
                    </p>

                    <a href="#সব-পণ্য" className="btn btn-primary btn-sm mt-3 sm:btn-md">
                        সব পণ্য দেখুন
                    </a>
                </div>

                <HeroIllustration className="h-auto w-full max-w-[240px] shrink-0 md:max-w-[315px]" />
            </div>
        </section>
    );
}