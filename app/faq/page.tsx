"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        category: "Producto",
        questions: [
            {
                q: "¿Qué ingredientes tienen los pouches?",
                a: "Nuestros pouches contienen puré de fruta natural. La lista completa de ingredientes específica por sabor está disponible en cada empaque y en la página de producto.",
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
    {
        category: "Devoluciones",
        questions: [
            {
                q: "¿Puedo devolver un producto?",
                a: "Sí, aceptamos devoluciones dentro de los 7 días de recibido el producto, siempre que esté en su empaque original y sin abrir. Contáctanos para iniciar el proceso.",
            },
            {
                q: "¿Qué hago si mi producto llega dañado?",
                a: "Si tu producto llega dañado, contáctanos inmediatamente con fotos del daño. Te enviaremos un reemplazo sin costo.",
            },
        ],
    },
    {
        category: "B2B",
        questions: [
            {
                q: "¿Puedo comprar por volumen para mi colegio o kiosko?",
                a: "Sí, ofrecemos precios especiales para compras por volumen. Completa el formulario en nuestra página de Colegios y Kioscos y te contactaremos.",
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
        <main className="container py-12">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="mb-4">Preguntas Frecuentes</h1>
                    <p className="text-xl text-gray-600">
                        Encuentra respuestas a las preguntas más comunes sobre BuenBocado
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-8">
                    {faqs.map((category) => (
                        <div key={category.category}>
                            <h2 className="text-2xl font-bold mb-4 text-green-brand">
                                {category.category}
                            </h2>
                            <div className="space-y-3">
                                {category.questions.map((faq, idx) => {
                                    const questionId = `${category.category}-${idx}`;
                                    const isOpen = openIndex === questionId;

                                    return (
                                        <div
                                            key={questionId}
                                            className="border border-gray-200 rounded-lg overflow-hidden"
                                        >
                                            <button
                                                onClick={() => toggleQuestion(questionId)}
                                                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                                            >
                                                <span className="font-semibold pr-4">{faq.q}</span>
                                                <ChevronDown
                                                    className={`w-5 h-5 text-green-brand flex-shrink-0 transition-transform ${isOpen ? "transform rotate-180" : ""
                                                        }`}
                                                />
                                            </button>
                                            {isOpen && (
                                                <div className="p-4 pt-0 text-gray-700 bg-gray-50">
                                                    {faq.a}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact CTA */}
                <div className="mt-12 text-center bg-green-light rounded-lg p-8">
                    <h3 className="text-xl font-bold mb-2">¿No encuentras lo que buscas?</h3>
                    <p className="text-gray-700 mb-4">
                        Estamos aquí para ayudarte. Contáctanos directamente.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="mailto:contacto@buenbocado.cl"
                            className="btn btn-primary"
                        >
                            Enviar Email
                        </a>
                        <a
                            href="https://wa.me/56912345678"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary"
                        >
                            WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}
