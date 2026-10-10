import { getProducts } from "@/lib/api";
import { CHANGE_TEXT_CLASS } from "@/lib/change-style";
import { formatChange, formatPriceWithUnit } from "@/lib/utils";
import type { Product } from "@/app/types";

function TickerItem({ product }: { product: Product }) {
    const change = formatChange(product.change);

    return (
        <li className="flex shrink-0 items-center gap-1.5 whitespace-nowrap border-r border-base-200 py-2 pl-4 pr-[17px] text-sm leading-5">
            <span aria-hidden="true">{product.image}</span>
            <span className="font-medium">{product.nameBn}</span>
            <span>{formatPriceWithUnit(product.today, product.unit)}</span>
            <span className={`font-semibold ${CHANGE_TEXT_CLASS[change.dir]}`}>
                {change.text}
            </span>
        </li>
    );
}

export default async function PriceTicker() {
    const products = await getProducts();

    return (
        <section
            aria-label="আজকের দামের তালিকা"
            className="overflow-hidden border-b border-base-300 bg-base-100"
        >
            <div className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none">
                <ul className="flex shrink-0">
                    {products.map((product) => (
                        <TickerItem key={product.id} product={product} />
                    ))}
                </ul>
                <ul className="flex shrink-0" aria-hidden="true">
                    {products.map((product) => (
                        <TickerItem key={product.id} product={product} />
                    ))}
                </ul>
            </div>
        </section>
    );
}