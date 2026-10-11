export default function Loading() {
    return (
        <main
            className="mx-auto max-w-6xl space-y-6 px-4 py-6"
            aria-busy="true"
            aria-label="লোড হচ্ছে"
        >
            <div className="skeleton h-5 w-56" />
            <div className="skeleton h-[152px] w-full rounded-2xl" />
            <div className="space-y-3">
                <div className="skeleton h-7 w-48" />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {[0, 1, 2].map((item) => (
                        <div key={item} className="skeleton h-[88px] rounded-2xl" />
                    ))}
                </div>
            </div>
            <div className="space-y-3">
                <div className="skeleton h-7 w-64" />
                <div className="skeleton h-80 w-full rounded-2xl" />
            </div>
        </main>
    );
}