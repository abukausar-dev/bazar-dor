import type { PriceDirection } from "@/app/types";

export const CHANGE_TEXT_CLASS: Record<PriceDirection, string> = {
    up: "text-error",
    down: "text-success",
    flat: "text-base-content/60",
};