import { ProductGridSkeleton } from "@/components/product/ProductSkeletons";

export default function Loading() {
    return (
        <main
            className="mx-auto max-w-6xl space-y-10 px-4 py-6"
            aria-busy="true"
            aria-label="লোড হচ্ছে"
        >
            <div className="skeleton h-[283px] w-full rounded-3xl" />
            {[0, 1].map((section) => (
                <section key={section} className="flex flex-col gap-3">
                    <div className="skeleton h-7 w-40" />
                    <ProductGridSkeleton count={6} />
                </section>
            ))}
        </main>
    );
}