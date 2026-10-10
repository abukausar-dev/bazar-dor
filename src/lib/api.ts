import { Category, Product } from "@/app/types";


const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const REVALIDATE_SECONDS = 300;

async function fetchJson<T>(path: string): Promise<T> {
    if (!BASE_URL) {
        throw new Error("NEXT_PUBLIC_API_URL is not defined");
    }

    const res = await fetch(`${BASE_URL}${path}`, {
        next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!res.ok) {
        throw new Error(`API request failed: ${res.status} ${path}`);
    }

    return res.json() as Promise<T>;
}

export async function getProducts(category?: string): Promise<Product[]> {
    const query = category ? `?category=${encodeURIComponent(category)}` : "";
    return fetchJson<Product[]>(`/products${query}`);
}

export async function getCategories(): Promise<Category[]> {
    return fetchJson<Category[]>("/categories");
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
    const categories = await getCategories();
    return categories.find((category) => category.slug === slug) ?? null;
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
    const products = await getProducts();
    return products.find((product) => product.slug === slug) ?? null;
}