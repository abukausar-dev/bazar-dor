import Link from "next/link";

interface BreadcrumbsProps {
    categorySlug: string;
    categoryName: string;
    productName: string;
}

export default function Breadcrumbs({
    categorySlug,
    categoryName,
    productName,
}: BreadcrumbsProps) {
    return (
        <nav aria-label="ব্রেডক্রাম্ব" className="text-sm leading-5">
            <ol className="flex flex-wrap items-center gap-2">
                <li>
                    <Link href="/" className="hover:underline">
                        হোম
                    </Link>
                </li>
                <li aria-hidden="true">›</li>
                <li>
                    <Link href={`/category/${categorySlug}`} className="hover:underline">
                        {categoryName}
                    </Link>
                </li>
                <li aria-hidden="true">›</li>
                <li aria-current="page" className="font-semibold">
                    {productName}
                </li>
            </ol>
        </nav>
    );
}