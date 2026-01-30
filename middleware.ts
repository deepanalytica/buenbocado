import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    // Protect /admin routes
    if (request.nextUrl.pathname.startsWith("/admin")) {
        const adminSession = request.cookies.get("admin_session");
        const isLoginPage = request.nextUrl.pathname === "/admin/login";

        // If no session and not on login page, redirect to login
        if (!adminSession && !isLoginPage) {
            return NextResponse.redirect(new URL("/admin/login", request.url));
        }

        // If session exists and on login page, redirect to dashboard
        if (adminSession && isLoginPage) {
            return NextResponse.redirect(new URL("/admin/dashboard", request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: "/admin/:path*",
};
