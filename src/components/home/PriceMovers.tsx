import { CHANGE_TEXT_CLASS } from "@/lib/change-style";
import { CHANGE_SYMBOLS } from "@/lib/utils";
import ProductGrid from "@/components/product/ProductGrid";
import type { Product } from "@/app/types";

interface PriceMoversProps {
    title: string;
    direction: "up" | "down";
    products: Product[];
}

export default function PriceMovers({
    title,
    direction,
    products,
}: PriceMoversProps) {
    if (products.length === 0) return null;

    return (
        <section aria-labelledby={`${direction}-movers-heading`} className="flex flex-col gap-3">
            <h2
                id={`${direction}-movers-heading`}
                className="flex items-center gap-2 text-xl font-bold leading-7"
            >
                <span
                    className={`text-base font-normal ${CHANGE_TEXT_CLASS[direction]}`}
                    aria-hidden="true"
                >
                    {CHANGE_SYMBOLS[direction]}
                </span>
                {title}
            </h2>
            <ProductGrid products={products} />
        </section>
    );
}