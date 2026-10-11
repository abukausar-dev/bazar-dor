import Link from "next/link";
import { CHANGE_TEXT_CLASS } from "@/lib/change-style";
import {
    formatChange,
    formatNumber,
    formatPrice,
    getUnitLabel,
    getUnitName,
} from "@/lib/utils";
import type { Product } from "@/app/types";

interface ProductHeaderProps {
    product: Product;
    summary: { min: number; max: number; average: number };
}

function getDiffMessage(product: Product): string {
    const diff = Math.abs(product.today - product.yesterday);

    if (product.change.dir === "flat" || diff === 0) {
        return "গতকালের তুলনায় আজ দাম অপরিবর্তিত";
    }

    const verb = product.change.dir === "up" ? "বেড়েছে" : "কমেছে";
    return `গতকালের তুলনায় আজ দাম ${verb} · ${formatPrice(diff)}`;
}

export default function ProductHeader({ product, summary }: ProductHeaderProps) {
    const change = formatChange(product.change);
    const colorClass = CHANGE_TEXT_CLASS[change.dir];
    const description = `${product.nameBn} আজ ${formatNumber(product.markets.length)}টি বাজারে ${formatPrice(summary.min)} থেকে ${formatPrice(summary.max)} পর্যন্ত বিক্রি হচ্ছে।`;

    return (
        <header className="flex flex-col gap-5 rounded-2xl border border-base-300 bg-base-100 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
                <span
                    className="grid size-20 shrink-0 place-items-center rounded-2xl bg-base-200 text-5xl"
                    aria-hidden="true"
                >
                    {product.image}
                </span>

                <div className="flex flex-col gap-1">
                    <h1 className="text-2xl font-bold leading-8">{product.nameBn}</h1>
                    <p className="text-sm leading-5">
                        {getUnitLabel(product.unit)} · {product.categoryNameBn}
                    </p>
                    <p className={`text-sm font-medium leading-5 ${colorClass}`}>
                        {getDiffMessage(product)}
                    </p>
                    <p className="max-w-xl text-sm leading-5">{description}</p>
                    <ul className="mt-1 flex flex-wrap gap-2" aria-label="ক্যাটাগরি">
                        <li>
                            <Link
                                href={`/category/${product.category}`}
                                className="badge badge-outline hover:bg-base-200"
                            >
                                {product.categoryIcon} {product.categoryNameBn}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col items-start gap-1 sm:items-end">
                <p className="text-xs leading-4">আজকের দাম</p>
                <p className="text-4xl font-bold leading-10">
                    {formatNumber(product.today)}
                </p>
                <p className="text-sm leading-5">টাকা / {getUnitName(product.unit)}</p>
                <span
                    className={`rounded-xl bg-base-200 px-2 py-1 text-xs font-semibold leading-4 ${colorClass}`}
                >
                    {change.text}
                </span>
            </div>
        </header>
    );
}