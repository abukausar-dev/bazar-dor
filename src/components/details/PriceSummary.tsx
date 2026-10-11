import { formatNumber, getUnitName } from "@/lib/utils";

interface PriceSummaryProps {
    summary: { min: number; max: number; average: number };
    unit: string;
}

export default function PriceSummary({ summary, unit }: PriceSummaryProps) {
    const items = [
        { label: "সর্বনিম্ন দাম", value: summary.min },
        { label: "সর্বোচ্চ দাম", value: summary.max },
        { label: "গড় দাম", value: summary.average },
    ];

    return (
        <section aria-labelledby="price-summary-heading" className="flex flex-col gap-3">
            <h2 id="price-summary-heading" className="text-xl font-bold leading-7">
                দামের সারসংক্ষেপ
            </h2>
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {items.map((item) => (
                    <div
                        key={item.label}
                        className="rounded-2xl border border-base-300 bg-base-100 p-4"
                    >
                        <dt className="text-sm leading-5">{item.label}</dt>
                        <dd className="text-2xl font-bold leading-8">
                            {formatNumber(item.value)}{" "}
                            <span className="text-sm font-medium">
                                টাকা/{getUnitName(unit)}
                            </span>
                        </dd>
                    </div>
                ))}
            </dl>
        </section>
    );
}