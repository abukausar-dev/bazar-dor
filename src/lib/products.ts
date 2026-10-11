import type { MarketPrice, PriceDirection, Product } from "@/app/types";
function getTopMovers(
    products: Product[],
    direction: PriceDirection,
    limit: number,
): Product[] {
    return products
        .filter((product) => product.change.dir === direction)
        .sort((a, b) => b.change.pct - a.change.pct)
        .slice(0, limit);
}

export function getTopRisers(products: Product[], limit = 6): Product[] {
    return getTopMovers(products, "up", limit);
}

export function getTopFallers(products: Product[], limit = 6): Product[] {
    return getTopMovers(products, "down", limit);
}

export type SortOption = "default" | "price-asc" | "price-desc";

export const SORT_OPTIONS: { value: SortOption; label: string }[] = [
    { value: "default", label: "ডিফল্ট" },
    { value: "price-asc", label: "দাম: কম থেকে বেশি" },
    { value: "price-desc", label: "দাম: বেশি থেকে কম" },
];

export function sortProducts(products: Product[], sort: SortOption): Product[] {
    if (sort === "default") return products;

    const direction = sort === "price-asc" ? 1 : -1;
    return [...products].sort((a, b) => (a.today - b.today) * direction);
}

export function getMarketAverage(market: MarketPrice): number {
    return Math.round((market.min + market.max) / 2);
}

export function getPriceSummary(product: Product) {
    const { markets, today } = product;

    if (markets.length === 0) {
        return { min: today, max: today, average: today };
    }

    const min = Math.min(...markets.map((market) => market.min));
    const max = Math.max(...markets.map((market) => market.max));
    const average = Math.round(
        markets.reduce((sum, market) => sum + getMarketAverage(market), 0) /
        markets.length,
    );

    return { min, max, average };
}