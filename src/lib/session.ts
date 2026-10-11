import { headers } from "next/headers";
import { connection } from "next/server";
import { auth } from "./auth";

export async function getServerSession() {
    await connection();
    return auth.api.getSession({ headers: await headers() });
}