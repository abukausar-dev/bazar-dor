"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Category } from "@/app/types";

export default function CategoryNav({ categories }: { categories: Category[] }) {
    const pathname = usePathname();

    return (
        <nav aria-label="পণ্যের ক্যাটাগরি">
            <ul className="no-scrollbar flex items-center gap-1 overflow-x-auto py-2">
                {categories.map((category) => {
                    const href = `/category/${category.slug}`;
                    const isActive = pathname === href;

                    return (
                        <li key={category.id} className="shrink-0">
                            <Link
                                href={href}
                                aria-current={isActive ? "page" : undefined}
                                className={`flex h-8 items-center gap-1.5 rounded-lg px-3 text-xs font-semibold leading-[17px] transition-colors ${isActive
                                        ? "bg-primary text-primary-content"
                                        : "hover:bg-base-200"
                                    }`}
                            >
                                <span aria-hidden="true">{category.icon}</span>
                                {category.nameBn}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}