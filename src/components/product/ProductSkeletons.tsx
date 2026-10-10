export function ProductCardSkeleton() {
    return (
        <div
            className="rounded-2xl border border-base-300 bg-base-100 p-4"
            aria-hidden="true"
        >
            <div className="flex items-start gap-3">
                <div className="skeleton size-12 rounded-xl" />
                <div className="flex flex-1 flex-col gap-2">
                    <div className="skeleton h-4 w-2/3" />
                    <div className="skeleton h-3 w-1/3" />
                </div>
            </div>
            <div className="mt-3 flex items-end justify-between">
                <div className="flex flex-col gap-2">
                    <div className="skeleton h-3 w-16" />
                    <div className="skeleton h-5 w-20" />
                </div>
                <div className="skeleton h-6 w-16 rounded-xl" />
            </div>
        </div>
    );
}

export function ProductGridSkeleton({ count = 6 }: { count?: number }) {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: count }, (_, index) => (
                <ProductCardSkeleton key={index} />
            ))}
        </div>
    );
}