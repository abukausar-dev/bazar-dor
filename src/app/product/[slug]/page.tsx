import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import Breadcrumbs from "@/components/details/Breadcrumbs";
import MarketTable from "@/components/details/MarketTable";
import PriceSummary from "@/components/details/PriceSummary";
import ProductHeader from "@/components/details/ProductHeader";
import { getProductBySlug, getProducts } from "@/lib/api";
import { getPriceSummary } from "@/lib/products";
import { getServerSession } from "@/lib/session";

export async function generateStaticParams() {
    const products = await getProducts();
    return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const session = await getServerSession();
    if (!session) {
        const callbackUrl = encodeURIComponent(`/product/${slug}`);
        redirect(`/signin?callbackUrl=${callbackUrl}&reason=login-required`);
    }

    const product = await getProductBySlug(slug);
    if (!product) notFound();

    const summary = getPriceSummary(product);

    return (
        <main className="mx-auto max-w-6xl space-y-6 px-4 py-6">
            <Breadcrumbs
                categorySlug={product.category}
                categoryName={product.categoryNameBn}
                productName={product.nameBn}
            />
            <ProductHeader product={product} summary={summary} />
            <PriceSummary summary={summary} unit={product.unit} />
            <MarketTable markets={product.markets} />

            <div>
                <Link
                    href={`/category/${product.category}`}
                    className="btn btn-outline btn-sm sm:btn-md"
                >
                    ← {product.categoryNameBn} তালিকায় ফিরে যান
                </Link>
            </div>
        </main>
    );
}