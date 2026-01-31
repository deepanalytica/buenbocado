import Link from "next/link";
import { CheckCircle, Package, CreditCard, Truck } from "lucide-react";
import { formatPrice } from "@/lib/utils";

export default function ConfirmacionPage({ params }: { params: { orderId: string } }) {
    const { orderId } = params;

    // TODO: In real app, fetch order from database
    const mockTotal = 28500;

    return (
        <main className="bocado-container py-12">
            <div className="max-w-2xl mx-auto">
                {/* Success Icon */}
                <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-12 h-12 text-green-brand" />
                    </div>
                    <h1 className="mb-4">¡Pedido Recibido!</h1>
                    <p className="text-xl text-gray-600">
                        Gracias por tu compra. Hemos recibido tu pedido correctamente.
                    </p>
                </div>

                {/* Order Number */}
                <div className="card mb-8 text-center">
                    <p className="text-sm text-gray-600 mb-2">Número de pedido</p>
                    <p className="text-2xl font-bold text-green-brand">{orderId}</p>
                </div>

                {/* Payment Instructions */}
                <div className="card mb-8 bg-blue-50 border-2 border-blue-200">
                    <div className="flex items-start gap-4">
                        <CreditCard className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                        <div className="flex-grow">
                            <h2 className="font-bold text-lg mb-3">Instrucciones de Pago</h2>
                            <p className="text-gray-700 mb-4">
                                Para completar tu pedido, realiza una transferencia bancaria por:
                            </p>

                            <div className="bg-white rounded-lg p-4 mb-4">
                                <p className="text-3xl font-bold text-green-brand text-center">
                                    {formatPrice(mockTotal)}
                                </p>
                            </div>

                            <div className="bg-white rounded-lg p-4">
                                <p className="font-medium mb-2">Datos Bancarios:</p>
                                <div className="space-y-1 text-sm">
                                    <p><strong>Banco:</strong> Banco Estado</p>
                                    <p><strong>Tipo de Cuenta:</strong> Cuenta Corriente</p>
                                    <p><strong>Número de Cuenta:</strong> 123456789</p>
                                    <p><strong>RUT:</strong> 12.345.678-9</p>
                                    <p><strong>Nombre:</strong> BuenBocado SpA</p>
                                    <p><strong>Email:</strong> pagos@buenbocado.cl</p>
                                </div>
                            </div>

                            <div className="mt-4 p-3 bg-white rounded-lg">
                                <p className="text-sm text-gray-700">
                                    <strong>Importante:</strong> Incluye tu número de pedido ({orderId}) en el comentario de la transferencia.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Next Steps */}
                <div className="card mb-8">
                    <h2 className="font-bold text-lg mb-4">Próximos Pasos</h2>

                    <div className="space-y-4">
                        <div className="flex gap-4">
                            <div className="w-8 h-8 bg-green-light rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-green-brand font-bold">1</span>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1">Realiza el pago</h3>
                                <p className="text-sm text-gray-600">
                                    Transfiere el monto indicado a la cuenta bancaria proporcionada
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-8 h-8 bg-green-light rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-green-brand font-bold">2</span>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1">Espera la confirmación</h3>
                                <p className="text-sm text-gray-600">
                                    Te enviaremos un email cuando confirmemos tu pago (generalmente dentro de 24 horas)
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-8 h-8 bg-green-light rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-green-brand font-bold">3</span>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1">Preparamos tu pedido</h3>
                                <p className="text-sm text-gray-600">
                                    Una vez confirmado el pago, empaquetamos tus productos
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-8 h-8 bg-green-light rounded-full flex items-center justify-center flex-shrink-0">
                                <Truck className="w-4 h-4 text-green-brand" />
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1">Envío</h3>
                                <p className="text-sm text-gray-600">
                                    Recibirás tu pedido en 2-7 días hábiles según tu región
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Email Confirmation */}
                <div className="card bg-marfil mb-8">
                    <div className="flex items-start gap-4">
                        <Package className="w-6 h-6 text-green-brand flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="font-semibold mb-2">Confirmación por Email</h3>
                            <p className="text-sm text-gray-700">
                                Hemos enviado un email de confirmación con los detalles de tu pedido
                                y las instrucciones de pago. Si no lo encuentras, revisa tu carpeta de spam.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/tienda" className="btn btn-secondary flex-1 text-center">
                        Seguir Comprando
                    </Link>
                    <Link href="/" className="btn btn-primary flex-1 text-center">
                        Volver al Inicio
                    </Link>
                </div>

                {/* Support */}
                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-600 mb-2">¿Tienes alguna pregunta?</p>
                    <div className="flex justify-center gap-4">
                        <a
                            href="mailto:contacto@buenbocado.cl"
                            className="text-green-brand hover:text-green-dark font-medium text-sm"
                        >
                            Enviar Email
                        </a>
                        <span className="text-gray-400">·</span>
                        <a
                            href="https://wa.me/56912345678"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-brand hover:text-green-dark font-medium text-sm"
                        >
                            WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}
