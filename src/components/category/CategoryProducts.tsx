"use client";

import { useMemo, useState } from "react";
import ProductGrid from "@/components/product/ProductGrid";
import { sortProducts, type SortOption } from "@/lib/products";
import { formatNumber } from "@/lib/utils";
import type { Product } from "@/app/types";
import SortSelect from "./SortSelect";

export default function CategoryProducts({ products }: { products: Product[] }) {
    const [sort, setSort] = useState<SortOption>("default");

    const sortedProducts = useMemo(
        () => sortProducts(products, sort),
        [products, sort],
    );

    return (
        <div className="space-y-4">
            <div className="flex justify-end rounded-2xl border border-base-300 bg-base-100 p-4">
                <SortSelect value={sort} onChange={setSort} />
            </div>

            <p className="text-sm leading-5">
                মোট {formatNumber(products.length)}টি পণ্য দেখানো হচ্ছে
            </p>

            <ProductGrid products={sortedProducts} />
        </div>
    );
}