import { connection } from "next/server";
import { getBanglaDate } from "@/lib/utils";

export default async function TodayDate() {
    await connection();
    return <>{getBanglaDate(new Date())}</>;
}