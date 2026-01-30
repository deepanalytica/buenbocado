"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Lock } from "lucide-react";

export default function AdminLoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            if (res.ok) {
                router.push("/admin/dashboard");
                router.refresh();
            } else {
                const data = await res.json();
                setError(data.error || "Credenciales inválidas");
            }
        } catch (err) {
            setError("Ocurrió un error. Intenta nuevamente.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-marfil flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                        <Lock className="w-8 h-8 text-green-brand" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-800">Admin Login</h1>
                    <p className="text-gray-600">BuenBocado Panel de Control</p>
                </div>

                {error && (
                    <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-6 text-sm text-center">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-brand focus:outline-none"
                            placeholder="admin@buenbocado.cl"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-brand focus:outline-none"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-green-brand hover:bg-green-dark text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center"
                    >
                        {loading ? "Entrando..." : "Iniciar Sesión"}
                    </button>
                </form>

                <div className="mt-6 text-center text-sm text-gray-500">
                    <p>Solo personal autorizado</p>
                </div>
            </div>
        </div>
    );
}
