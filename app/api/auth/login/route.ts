import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, password } = body;

        const adminEmail = process.env.ADMIN_EMAIL;
        const adminPassword = process.env.ADMIN_PASSWORD;

        if (!adminEmail || !adminPassword) {
            return NextResponse.json(
                { error: "Admin credentials not configured in server" },
                { status: 500 }
            );
        }

        if (email === adminEmail && password === adminPassword) {
            // Set auth cookie
            // In production, you'd use a real session token or JWT
            const cookieStore = cookies();
            cookieStore.set("admin_session", "true", {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                maxAge: 60 * 60 * 24, // 24 hours
                path: "/",
            });

            return NextResponse.json({ success: true });
        }

        return NextResponse.json(
            { error: "Email o contraseña incorrectos" },
            { status: 401 }
        );
    } catch (error) {
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
