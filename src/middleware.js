// export { default } from "next-auth/middleware"

import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";


export default async function middleware(req) {
    const path = req.nextUrl.pathname;

    const session = await getToken({
        req,
        secret: process.env.AUTH_SECRET,
    });

    if (!session & path !=='/sign-up') {
        return NextResponse.redirect(new URL('/sign-up', req.url))
    } else if (session && (path === '/login' || path === '/sign-up')) {
        return NextResponse.redirect(new URL('/tours', req.url))
    }
    // return NextResponse.next()
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}