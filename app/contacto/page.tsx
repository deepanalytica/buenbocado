"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactoPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement form submission
        console.log("Form submitted:", formData);
        alert("Gracias por tu mensaje. Te contactaremos pronto.");
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    return (
        <main className="bocado-container py-12">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="mb-4">Contacto</h1>
                    <p className="text-xl text-gray-600">
                        ¿Tienes alguna pregunta? Estamos aquí para ayudarte
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Contact Info */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="card">
                            <h3 className="font-semibold mb-4">Información de Contacto</h3>

                            <div className="space-y-4">
                                <div className="flex gap-3">
                                    <Mail className="w-5 h-5 text-green-brand flex-shrink-0 mt-1" />
                                    <div>
                                        <div className="font-medium">Email</div>
                                        <a
                                            href="mailto:contacto@buenbocado.cl"
                                            className="text-gray-600 hover:text-green-brand"
                                        >
                                            contacto@buenbocado.cl
                                        </a>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <Phone className="w-5 h-5 text-green-brand flex-shrink-0 mt-1" />
                                    <div>
                                        <div className="font-medium">WhatsApp</div>
                                        <a
                                            href="https://wa.me/56912345678"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-600 hover:text-green-brand"
                                        >
                                            +56 9 1234 5678
                                        </a>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <MapPin className="w-5 h-5 text-green-brand flex-shrink-0 mt-1" />
                                    <div>
                                        <div className="font-medium">Ubicación</div>
                                        <div className="text-gray-600">
                                            Santiago, Chile
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-green-light">
                            <h4 className="font-semibold mb-2">Horario de Atención</h4>
                            <p className="text-sm text-gray-700">
                                Lunes a Viernes<br />
                                9:00 - 18:00 horas
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="card">
                            <h2 className="text-2xl font-bold mb-6">Envíanos un Mensaje</h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block font-medium mb-2">
                                        Nombre completo *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={(e) =>
                                            setFormData({ ...formData, name: e.target.value })
                                        }
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-brand"
                                        placeholder="Tu nombre"
                                    />
                                </div>

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
                                    <label htmlFor="subject" className="block font-medium mb-2">
                                        Asunto *
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        required
                                        value={formData.subject}
                                        onChange={(e) =>
                                            setFormData({ ...formData, subject: e.target.value })
                                        }
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-brand"
                                        placeholder="¿En qué podemos ayudarte?"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block font-medium mb-2">
                                        Mensaje *
                                    </label>
                                    <textarea
                                        id="message"
                                        required
                                        value={formData.message}
                                        onChange={(e) =>
                                            setFormData({ ...formData, message: e.target.value })
                                        }
                                        rows={6}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-brand resize-none"
                                        placeholder="Escribe tu mensaje aquí..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary w-full flex items-center justify-center gap-2"
                                >
                                    <Send className="w-5 h-5" />
                                    Enviar Mensaje
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
