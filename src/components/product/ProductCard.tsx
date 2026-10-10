import Link from "next/link";
import { CHANGE_TEXT_CLASS } from "@/lib/change-style";
import { formatChange, formatNumber, getUnitLabel } from "@/lib/utils";
import type { Product } from "@/app/types";

export default function ProductCard({ product }: { product: Product }) {
    const change = formatChange(product.change);

    return (
        <Link
            href={`/product/${product.slug}`}
            className="block rounded-2xl border border-base-300 bg-base-100 p-4 transition hover:border-primary/40 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
            <article className="flex flex-col gap-3">
                <div className="flex items-start gap-3">
                    <span
                        className="grid size-12 shrink-0 place-items-center rounded-xl bg-base-200 text-2xl"
                        aria-hidden="true"
                    >
                        {product.image}
                    </span>
                    <div className="min-w-0">
                        <h3 className="text-base font-semibold leading-6">
                            {product.nameBn}
                        </h3>
                        <p className="text-xs leading-4">{getUnitLabel(product.unit)}</p>
                    </div>
                </div>

                <div className="flex items-end justify-between gap-2">
                    <div>
                        <p className="text-xs leading-4">আজকের দাম</p>
                        <p className="text-xl font-bold leading-7">
                            {formatNumber(product.today)}{" "}
                            <span className="text-sm font-medium">টাকা</span>
                        </p>
                    </div>
                    <span
                        className={`rounded-xl bg-base-200 px-2 py-1 text-xs font-semibold leading-4 ${CHANGE_TEXT_CLASS[change.dir]}`}
                    >
                        {change.text}
                    </span>
                </div>
            </article>
        </Link>
    );
}