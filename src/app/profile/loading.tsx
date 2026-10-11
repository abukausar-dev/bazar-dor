export default function Loading() {
    return (
        <main
            className="mx-auto max-w-xl space-y-6 px-4 py-6"
            aria-busy="true"
            aria-label="লোড হচ্ছে"
        >
            <div className="space-y-2">
                <div className="skeleton h-8 w-48" />
                <div className="skeleton h-4 w-64" />
            </div>
            <div className="skeleton h-[104px] w-full rounded-2xl" />
            <div className="skeleton h-56 w-full rounded-2xl" />
        </main>
    );
}