import AllProducts from "@/components/home/AllProducts";
import Hero from "@/components/home/Hero";
import PriceMovers from "@/components/home/PriceMovers";
import { getProducts } from "@/lib/api";
import { getTopFallers, getTopRisers } from "@/lib/products";

export default async function HomePage() {
  const products = await getProducts();

  return (
    <main className="mx-auto max-w-6xl space-y-10 px-4 py-6">
      <Hero />
      <PriceMovers
        title="আজ দাম বেড়েছে"
        direction="up"
        products={getTopRisers(products)}
      />
      <PriceMovers
        title="আজ দাম কমেছে"
        direction="down"
        products={getTopFallers(products)}
      />
      <AllProducts products={products} />
    </main>
  );
}