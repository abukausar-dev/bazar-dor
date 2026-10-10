import { getCategories, getProducts } from "@/lib/api";
import { formatChange, formatPrice, getUnitLabel } from "@/lib/utils";

export default async function HomePage() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

  console.log("Units:", [...new Set(products.map((p) => p.unit))]);

  return (
    <main className="p-8">
      <p>পণ্য: {products.length}, ক্যাটাগরি: {categories.length}</p>
      <ul className="mt-4 space-y-1">
        {products.slice(0, 5).map((p) => (
          <li key={p.id}>
            {p.image} {p.nameBn} — {formatPrice(p.today)} ({getUnitLabel(p.unit)}){" "}
            {formatChange(p.change).text}
          </li>
        ))}
      </ul>
    </main>
  );
}