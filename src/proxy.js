import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "./app/lib/auth";


export async function proxy(request) {

    const session = await auth.api.getSession({
        headers: await headers()
    })
    if (!session) {
        const url = new URL("/signin", request.url);
        url.searchParams.set("message", "unauthorized"); 
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/product/:path*",
        "/profile"
    ],
};