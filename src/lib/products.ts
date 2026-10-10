import type { PriceDirection, Product } from "@/app/types";

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