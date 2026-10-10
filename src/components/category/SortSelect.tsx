"use client";

import { ChevronDown } from "lucide-react";
import { SORT_OPTIONS, type SortOption } from "@/lib/products";

interface SortSelectProps {
    value: SortOption;
    onChange: (value: SortOption) => void;
}

export default function SortSelect({ value, onChange }: SortSelectProps) {
    return (
        <div className="flex items-center gap-2 text-sm leading-5">
            <label htmlFor="sort-select">সাজান</label>
            <div className="relative">
                <select
                    id="sort-select"
                    value={value}
                    onChange={(event) => onChange(event.target.value as SortOption)}
                    className="h-8 cursor-pointer appearance-none rounded-lg border border-base-content bg-base-100 pl-3 pr-8 text-xs leading-[18px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                    {SORT_OPTIONS.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <ChevronDown
                    className="pointer-events-none absolute right-3 top-1/2 size-2.5 -translate-y-1/2"
                    aria-hidden="true"
                />
            </div>
        </div>
    );
}