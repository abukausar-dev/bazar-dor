import Link from "next/link";

interface NotFoundStateProps {
    title?: string;
    description?: string;
}

export default function NotFoundState({
    title = "৪০৪ — পেজটি খুঁজে পাওয়া যায়নি",
    description = "আপনি যে পেজটি খুঁজছেন তা নেই বা সরিয়ে নেওয়া হয়েছে।",
}: NotFoundStateProps) {
    return (
        <section className="flex flex-col items-center gap-3 rounded-2xl border border-base-300 bg-base-100 px-4 py-12 text-center">
            <span className="text-5xl" aria-hidden="true">
                🛒
            </span>
            <h2 className="text-2xl font-bold leading-8">{title}</h2>
            <p className="max-w-md text-sm leading-5">{description}</p>
            <Link href="/" className="btn btn-primary btn-sm mt-2 sm:btn-md">
                হোম পেজে ফিরে যান
            </Link>
        </section>
    );
}