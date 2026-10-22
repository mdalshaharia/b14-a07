import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "./app/lib/auth";


export async function proxy(request) {

    const session = await auth.api.getSession({
        headers: await headers()
    })

    console.log(session)

    if (!session) {
        return NextResponse.redirect(new URL("/signin", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/product/:path*",
        "/profile"
    ], // Specify the routes the middleware applies to
};