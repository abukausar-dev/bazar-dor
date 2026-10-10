import { PriceChange, PriceDirection } from "@/app/types";

const bnNumber = new Intl.NumberFormat("bn-BD-u-nu-beng");

const bnPercent = new Intl.NumberFormat("bn-BD-u-nu-beng", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
});

export function formatNumber(value: number): string {
    return bnNumber.format(value);
}

export function formatPrice(value: number): string {
    return `${formatNumber(value)} টাকা`;
}

export function formatPercent(value: number): string {
    return `${bnPercent.format(value)}%`;
}

const UNIT_LABELS: Record<string, string> = {
    kg: "প্রতি কেজি",
    liter: "প্রতি লিটার",
    dozen: "প্রতি ডজন",
    piece: "প্রতি পিস",
};

export function getUnitLabel(unit: string): string {
    return UNIT_LABELS[unit] ?? `প্রতি ${unit}`;
}

const CHANGE_SYMBOLS: Record<PriceDirection, string> = {
    up: "▲",
    down: "▼",
    flat: "—",
};

export function formatChange({ dir, pct }: PriceChange) {
    const symbol = CHANGE_SYMBOLS[dir];
    const text =
        dir === "flat"
            ? `${symbol}${formatPercent(pct)}`
            : `${symbol} ${formatPercent(pct)}`;

    return { dir, text };
}

export function getBanglaDate(date: Date = new Date()): string {
    return new Intl.DateTimeFormat("bn-BD-u-nu-beng", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "Asia/Dhaka",
    }).format(date);
}