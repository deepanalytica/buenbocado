"use client";

import { useState } from "react";
import { Building2, School, ShoppingBag, Download } from "lucide-react";

export default function B2BPage() {
    const [formData, setFormData] = useState({
        businessName: "",
        contactName: "",
        email: "",
        phone: "",
        businessType: "school",
        estimatedVolume: "",
        message: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Save to database
        console.log("B2B Lead:", formData);
        alert("¡Gracias! Nos pondremos en contacto contigo pronto.");
        setFormData({
            businessName: "",
            contactName: "",
            email: "",
            phone: "",
            businessType: "school",
            estimatedVolume: "",
            message: "",
        });
    };

    return (
        <main>
            {/* Hero */}
            <section className="bg-gradient-to-b from-green-light to-white py-16">
                <div className="bocado-container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="mb-6">Colegios y Kioscos</h1>
                        <p className="text-xl text-gray-700 mb-4">
                            Reposición simple, formatos prácticos y soporte comercial
                        </p>
                        <p className="text-gray-600">
                            Ofrecemos precios especiales para compras por volumen, ideal para colegios, kioscos y minimarkets
                        </p>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-16">
                <div className="bocado-container">
                    <h2 className="text-center mb-12">Beneficios para tu Negocio</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="card text-center">
                            <div className="w-16 h-16 bg-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                                <School className="w-8 h-8 text-green-brand" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Colegios</h3>
                            <p className="text-gray-600">
                                Colaciones prácticas para casinos escolares y kioscos internos. Opción saludable que los niños disfrutan.
                            </p>
                        </div>

                        <div className="card text-center">
                            <div className="w-16 h-16 bg-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                                <ShoppingBag className="w-8 h-8 text-green-brand" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Kioscos</h3>
                            <p className="text-gray-600">
                                Amplia tu oferta con productos que los padres buscan. Fácil de exhibir y rotar.
                            </p>
                        </div>

                        <div className="card text-center">
                            <div className="w-16 h-16 bg-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                                <Building2 className="w-8 h-8 text-green-brand" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Minimarkets</h3>
                            <p className="text-gray-600">
                                Producto de alta rotación en la categoría infantil. Soporte en punto de venta.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Offer */}
            <section className="py-16 bg-marfil">
                <div className="bocado-container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-center mb-12">Qué Ofrecemos</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-8 h-8 bg-green-brand rounded-full flex items-center justify-center">
                                        <span className="text-white font-bold">✓</span>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">Precios por Volumen</h4>
                                    <p className="text-gray-600 text-sm">Descuentos especiales según cantidad</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-8 h-8 bg-green-brand rounded-full flex items-center justify-center">
                                        <span className="text-white font-bold">✓</span>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">Reposición Programada</h4>
                                    <p className="text-gray-600 text-sm">Sistema de pedidos recurrentes</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-8 h-8 bg-green-brand rounded-full flex items-center justify-center">
                                        <span className="text-white font-bold">✓</span>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">Soporte Comercial</h4>
                                    <p className="text-gray-600 text-sm">Ejecutivo dedicado para tu cuenta</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-8 h-8 bg-green-brand rounded-full flex items-center justify-center">
                                        <span className="text-white font-bold">✓</span>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">Material POP</h4>
                                    <p className="text-gray-600 text-sm">Soporte para exhibición en punto de venta</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-8 h-8 bg-green-brand rounded-full flex items-center justify-center">
                                        <span className="text-white font-bold">✓</span>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">Facturación Simplificada</h4>
                                    <p className="text-gray-600 text-sm">Proceso administrativo fácil</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-8 h-8 bg-green-brand rounded-full flex items-center justify-center">
                                        <span className="text-white font-bold">✓</span>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">Variedad de Sabores</h4>
                                    <p className="text-gray-600 text-sm">9 sabores para satisfacer todos los gustos</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="py-16">
                <div className="bocado-container">
                    <div className="max-w-2xl mx-auto">
                        <div className="text-center mb-8">
                            <h2 className="mb-4">Quiero Comprar por Volumen</h2>
                            <p className="text-gray-600">
                                Completa el formulario y nos pondremos en contacto contigo para darte más información
                            </p>
                        </div>

                        <div className="card">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="businessName" className="block font-medium mb-2">
                                            Nombre del Negocio *
                                        </label>
                                        <input
                                            type="text"
                                            id="businessName"
                                            required
                                            value={formData.businessName}
                                            onChange={(e) =>
                                                setFormData({ ...formData, businessName: e.target.value })
                                            }
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-brand"
                                            placeholder="Nombre del colegio, kiosko o minimarket"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="contactName" className="block font-medium mb-2">
                                            Nombre de Contacto *
                                        </label>
                                        <input
                                            type="text"
                                            id="contactName"
                                            required
                                            value={formData.contactName}
                                            onChange={(e) =>
                                                setFormData({ ...formData, contactName: e.target.value })
                                            }
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-brand"
                                            placeholder="Tu nombre"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="email" className="block font-medium mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) =>
                                                setFormData({ ...formData, email: e.target.value })
                                            }
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-brand"
                                            placeholder="tu@email.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block font-medium mb-2">
                                            Teléfono *
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            required
                                            value={formData.phone}
                                            onChange={(e) =>
                                                setFormData({ ...formData, phone: e.target.value })
                                            }
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-brand"
                                            placeholder="+56 9 1234 5678"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="businessType" className="block font-medium mb-2">
                                            Tipo de Negocio *
                                        </label>
                                        <select
                                            id="businessType"
                                            required
                                            value={formData.businessType}
                                            onChange={(e) =>
                                                setFormData({ ...formData, businessType: e.target.value })
                                            }
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-brand"
                                        >
                                            <option value="school">Colegio</option>
                                            <option value="kiosk">Kiosko</option>
                                            <option value="minimarket">Minimarket</option>
                                            <option value="other">Otro</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="estimatedVolume" className="block font-medium mb-2">
                                            Volumen Mensual Estimado
                                        </label>
                                        <input
                                            type="text"
                                            id="estimatedVolume"
                                            value={formData.estimatedVolume}
                                            onChange={(e) =>
                                                setFormData({ ...formData, estimatedVolume: e.target.value })
                                            }
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-brand"
                                            placeholder="Ej: 100-200 unidades"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block font-medium mb-2">
                                        Mensaje (Opcional)
                                    </label>
                                    <textarea
                                        id="message"
                                        value={formData.message}
                                        onChange={(e) =>
                                            setFormData({ ...formData, message: e.target.value })
                                        }
                                        rows={4}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-brand resize-none"
                                        placeholder="Cuéntanos más sobre tu interés..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary w-full"
                                >
                                    Enviar Solicitud
                                </button>
                            </form>
                        </div>

                        {/* Commercial Kit Download */}
                        <div className="mt-8 text-center">
                            <div className="card bg-green-light">
                                <h3 className="font-semibold mb-2 flex items-center justify-center gap-2">
                                    <Download className="w-5 h-5" />
                                    Kit Comercial
                                </h3>
                                <p className="text-sm text-gray-700 mb-4">
                                    Descarga nuestro catálogo con información de productos y precios
                                </p>
                                <button className="btn btn-secondary">
                                    Descargar PDF
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
