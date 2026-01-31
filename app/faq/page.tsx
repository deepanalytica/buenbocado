"use client";

import { useState } from "react";
import { ChevronDown, Home, MessageCircle, Mail, HelpCircle } from "lucide-react";
import Link from "next/link";

const faqs = [
    {
        category: "Producto",
        questions: [
            {
                q: "¿Qué ingredientes tienen los pouches?",
                a: "Nuestros pouches contienen compota de fruta natural. La lista completa de ingredientes específica por sabor está disponible en cada empaque y en la página de producto.",
            },
            {
                q: "¿Los pouches tienen sellos?",
                a: "La información sobre sellos varía por producto. Revisa la información específica en la página de cada sabor o en el empaque del producto.",
            },
            {
                q: "¿Cuánto tiempo duran los pouches?",
                a: "Los pouches tienen una fecha de vencimiento impresa en el empaque. Recomendamos almacenarlos en un lugar fresco y seco hasta su consumo.",
            },
        ],
    },
    {
        category: "Envío",
        questions: [
            {
                q: "¿Cuánto tarda el envío?",
                a: "Los tiempos de envío varían según tu ubicación. Generalmente entre 3-5 días hábiles para la Región Metropolitana y 5-7 días hábiles para regiones.",
            },
            {
                q: "¿Hacen envíos a todo Chile?",
                a: "Sí, despachamos a todo Chile continental. Los costos de envío se calculan automáticamente en el checkout según tu región.",
            },
            {
                q: "¿Puedo hacer seguimiento de mi pedido?",
                a: "Sí, una vez que tu pedido sea despachado, recibirás un email con el número de seguimiento.",
            },
        ],
    },
    {
        category: "Pago",
        questions: [
            {
                q: "¿Qué formas de pago aceptan?",
                a: "Aceptamos transferencia bancaria. Los datos para la transferencia se proporcionan durante el checkout.",
            },
            {
                q: "¿Es seguro comprar en BuenBocado?",
                a: "Sí, tu información está protegida y no almacenamos datos de pago sensibles.",
            },
        ],
    },
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<string | null>(null);

    const toggleQuestion = (index: string) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <main className="bg-marfil min-h-screen">
            {/* Page Header */}
            <section className="bg-white border-b border-gray-100 pb-16 pt-20">
                <div className="bocado-container">
                    <div className="flex flex-col items-center text-center">
                        <nav className="flex items-center gap-2 mb-8 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                            <Link href="/" className="hover:text-green-brand transition-colors flex items-center gap-1.5">
                                <Home className="w-3 h-3" />
                                <span>Inicio</span>
                            </Link>
                            <span className="opacity-30">/</span>
                            <span className="text-gray-900">FAQ</span>
                        </nav>

                        <h1 className="mb-6 tracking-tighter">
                            Preguntas <span className="text-gradient">Frecuentes</span>
                        </h1>
                        <p className="text-gray-600 font-medium prose-bocado mx-auto">
                            Todo lo que necesitas saber sobre BuenBocado, nuestros envíos y productos.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-py">
                <div className="bocado-container">
                    <div className="max-w-3xl mx-auto">
                        <div className="space-y-12">
                            {faqs.map((category) => (
                                <div key={category.category}>
                                    <div className="flex items-center gap-3 mb-8">
                                        <div className="w-8 h-8 rounded-xl bg-green-brand/10 flex items-center justify-center">
                                            <HelpCircle className="w-4 h-4 text-green-brand" />
                                        </div>
                                        <h2 className="text-xs font-black uppercase tracking-[0.25em] text-gray-900">
                                            {category.category}
                                        </h2>
                                    </div>
                                    <div className="space-y-4">
                                        {category.questions.map((faq, idx) => {
                                            const questionId = `${category.category}-${idx}`;
                                            const isOpen = openIndex === questionId;

                                            return (
                                                <div
                                                    key={questionId}
                                                    className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:border-green-brand/20 transition-all"
                                                >
                                                    <button
                                                        onClick={() => toggleQuestion(questionId)}
                                                        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                                    >
                                                        <span className="font-bold text-gray-900 pr-4 leading-tight">{faq.q}</span>
                                                        <div className={`w-8 h-8 rounded-full bg-marfil flex items-center justify-center transition-transform duration-500 ${isOpen ? "rotate-180 bg-green-brand text-white" : "text-gray-400"}`}>
                                                            <ChevronDown className="w-4 h-4" />
                                                        </div>
                                                    </button>
                                                    {isOpen && (
                                                        <div className="px-6 pb-6 text-gray-600 font-medium leading-relaxed text-sm animate-slide-down">
                                                            <div className="pt-2 border-t border-gray-50 mt-2">
                                                                {faq.a}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Support Card */}
                        <div className="mt-24 bg-white border border-gray-100 p-10 lg:p-12 rounded-[3rem] shadow-2xl shadow-black/5 text-center relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-32 h-32 bg-green-brand/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
                            <h3 className="text-2xl font-black mb-4 tracking-tight">¿Aún tienes dudas?</h3>
                            <p className="text-gray-500 font-medium mb-10 leading-relaxed max-w-lg mx-auto">
                                Nuestro equipo está listo para ayudarte con lo que necesites por WhatsApp o Correo.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="https://wa.me/56912345678"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn bg-gray-900 text-white hover:bg-black px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-all hover:-translate-y-1"
                                >
                                    <MessageCircle className="w-4 h-4" />
                                    <span>WhatsApp Directo</span>
                                </a>
                                <a
                                    href="mailto:contacto@buenbocado.cl"
                                    className="btn btn-secondary px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-all hover:-translate-y-1"
                                >
                                    <Mail className="w-4 h-4" />
                                    <span>Enviar Email</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
