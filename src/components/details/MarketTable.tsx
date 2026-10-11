import { getMarketAverage } from "@/lib/products";
import { formatPrice } from "@/lib/utils";
import type { MarketPrice } from "@/app/types";

export default function MarketTable({ markets }: { markets: MarketPrice[] }) {
    return (
        <section aria-labelledby="market-prices-heading" className="flex flex-col gap-3">
            <h2 id="market-prices-heading" className="text-xl font-bold leading-7">
                বাজারভিত্তিক আজকের দাম
            </h2>

            <div className="overflow-x-auto rounded-2xl border border-base-300 bg-base-100">
                <table className="table min-w-[560px]">
                    <thead>
                        <tr>
                            <th>বাজার</th>
                            <th>বিভাগ</th>
                            <th className="text-right">সর্বনিম্ন</th>
                            <th className="text-right">সর্বাধিক</th>
                            <th className="text-right">গড়</th>
                        </tr>
                    </thead>
                    <tbody>
                        {markets.map((market) => (
                            <tr
                                key={`${market.division}-${market.market}`}
                                className="hover:bg-base-200/60"
                            >
                                <td className="font-medium">{market.market}</td>
                                <td>{market.division}</td>
                                <td className="text-right">{formatPrice(market.min)}</td>
                                <td className="text-right">{formatPrice(market.max)}</td>
                                <td className="text-right font-semibold">
                                    {formatPrice(getMarketAverage(market))}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}