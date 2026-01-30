"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form"; // Not strictly needing zod here for speed, but good practice. using native for simplicity on this small form.
import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";

export default function NewCouponPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const data = {
            code: formData.get("code"),
            type: formData.get("type"),
            value: Number(formData.get("value")),
            expiry: formData.get("expiry") ? new Date(formData.get("expiry") as string) : null,
            maxUsage: formData.get("maxUsage") ? Number(formData.get("maxUsage")) : null,
            enabled: true,
        };

        try {
            const res = await fetch("/api/coupons", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!res.ok) throw new Error("Error creating coupon");

            router.push("/admin/coupons");
            router.refresh();
        } catch (error) {
            alert("Error al crear el cupón");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
                <Link href="/admin/coupons" className="text-gray-500 hover:text-green-brand">
                    <ArrowLeft className="w-6 h-6" />
                </Link>
                <h1 className="text-2xl font-bold">Nuevo Cupón</h1>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <form onSubmit={handleSubmit} className="space-y-6">

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Código del Cupón</label>
                        <input
                            name="code"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-brand uppercase font-mono"
                            placeholder="VERANO2026"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de Descuento</label>
                            <select
                                name="type"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-brand"
                            >
                                <option value="percentage">Porcentaje (%)</option>
                                <option value="fixed">Monto Fijo ($)</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Valor</label>
                            <input
                                name="value"
                                type="number"
                                required
                                min="0"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-brand"
                                placeholder="10"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Fecha de Expiración (Opcional)</label>
                            <input
                                name="expiry"
                                type="date"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-brand"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Límite de Usos (Opcional)</label>
                            <input
                                name="maxUsage"
                                type="number"
                                min="1"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-brand"
                                placeholder="Ej: 100"
                            />
                        </div>
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            disabled={loading}
                            className="btn btn-primary w-full flex justify-center items-center gap-2"
                        >
                            <Save className="w-5 h-5" />
                            {loading ? "Guardando..." : "Crear Cupón"}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}
