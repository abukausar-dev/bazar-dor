import { notFound } from "next/navigation";
import CategoryProducts from "@/components/category/CategoryProducts";
import NotFoundState from "@/components/common/NotFoundState";
import { getCategories, getCategoryBySlug, getProducts } from "@/lib/api";
import { formatNumber } from "@/lib/utils";

export async function generateStaticParams() {
    const categories = await getCategories();
    return categories.map((category) => ({ slug: category.slug }));
}

export default async function CategoryPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const category = await getCategoryBySlug(slug);
    if (!category) notFound();

    const products = await getProducts(category.slug);

    return (
        <main className="mx-auto max-w-6xl space-y-6 px-4 py-6">
            <header className="flex items-center gap-3 rounded-2xl border border-base-300 bg-base-100 p-5">
                <span className="text-4xl leading-10" aria-hidden="true">
                    {category.icon}
                </span>
                <div>
                    <h1 className="text-2xl font-bold leading-8">{category.nameBn}</h1>
                    <p className="text-sm leading-5">
                        {formatNumber(products.length)}টি পণ্যের আজকের দাম ও পরিবর্তন
                    </p>
                </div>
            </header>

            {products.length === 0 ? (
                <NotFoundState
                    title="এই ক্যাটাগরিতে এখনো কোনো পণ্য নেই"
                    description="অন্য ক্যাটাগরি দেখুন অথবা হোম পেজে ফিরে যান।"
                />
            ) : (
                <CategoryProducts key={category.slug} products={products} />
            )}
        </main>
    );
}