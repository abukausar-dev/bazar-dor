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

const UNIT_NAMES: Record<string, string> = {
    kg: "কেজি",
    litre: "লিটার",
    dozen: "ডজন",
    piece: "পিস",
};

export function getUnitName(unit: string): string {
    return UNIT_NAMES[unit] ?? unit;
}

export function getUnitLabel(unit: string): string {
    return `প্রতি ${getUnitName(unit)}`;
}

export function formatPriceWithUnit(value: number, unit: string): string {
    return `${formatPrice(value)}/${getUnitName(unit)}`;
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
    const parts = new Intl.DateTimeFormat("bn-BD-u-nu-beng", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "Asia/Dhaka",
    }).formatToParts(date);

    const get = (type: Intl.DateTimeFormatPartTypes) =>
        parts.find((part) => part.type === type)?.value ?? "";

    return `${get("weekday")}, ${get("day")} ${get("month")}, ${get("year")}`;
}