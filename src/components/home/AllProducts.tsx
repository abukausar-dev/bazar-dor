import ProductGrid from "@/components/product/ProductGrid";
import { formatNumber } from "@/lib/utils";
import type { Product } from "@/app/types";

export default function AllProducts({ products }: { products: Product[] }) {
    return (
        <section id="সব-পণ্য" className="scroll-mt-6">
            <h2 className="text-xl font-bold leading-7">সব পণ্য</h2>
            <p className="mt-3 text-sm leading-5">
                মোট {formatNumber(products.length)}টি পণ্য দেখানো হচ্ছে
            </p>
            <div className="mt-4">
                <ProductGrid products={products} />
            </div>
        </section>
    );
}