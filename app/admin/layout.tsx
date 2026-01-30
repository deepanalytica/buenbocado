"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
    LayoutDashboard,
    Package,
    ShoppingCart,
    Tags,
    MessageSquare,
    Settings,
    LogOut,
    Users
} from "lucide-react";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const router = useRouter();

    const handleLogout = async () => {
        await fetch("/api/auth/logout", { method: "POST" });
        router.push("/admin/login");
        router.refresh();
    };

    // Don't show sidebar on login page
    if (pathname === "/admin/login") {
        return <>{children}</>;
    }

    const navItems = [
        { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
        { name: "Pedidos", href: "/admin/orders", icon: ShoppingCart },
        { name: "Productos", href: "/admin/products", icon: Package },
        { name: "Cupones", href: "/admin/coupons", icon: Tags },
        { name: "Contenido", href: "/admin/content", icon: MessageSquare },
        { name: "Usuarios", href: "/admin/users", icon: Users },
    ];

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
                <div className="p-6 border-b border-gray-200">
                    <Link href="/" className="flex items-center gap-2">
                        <span className="font-bold text-xl text-green-brand text-balance">
                            BuenBocado <span className="text-gray-400 text-sm">Admin</span>
                        </span>
                    </Link>
                </div>

                <nav className="flex-1 p-4 space-y-1">
                    {navItems.map((item) => {
                        const isActive = pathname.startsWith(item.href);
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`
                  flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors
                  ${isActive
                                        ? 'bg-green-light text-green-brand'
                                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}
                `}
                            >
                                <item.icon className="w-5 h-5" />
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-gray-200">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg w-full transition-colors"
                    >
                        <LogOut className="w-5 h-5" />
                        Cerrar Sesión
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Mobile Header */}
                <header className="bg-white border-b border-gray-200 p-4 md:hidden flex justify-between items-center">
                    <span className="font-bold text-green-brand">BuenBocado Admin</span>
                    <button className="text-gray-600">
                        {/* Mobile menu trigger placeholder */}
                        Menu
                    </button>
                </header>

                <main className="flex-1 overflow-auto p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
