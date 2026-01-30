import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-green-dark text-white mt-20">
            <div className="container py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* About */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">BuenBocado</h3>
                        <p className="text-green-light text-sm">
                            Colaciones ricas y simples, hechas para niños. Ingredientes que se entienden y sabores que les gustan.
                        </p>
                    </div>

                    {/* Shop */}
                    <div>
                        <h4 className="font-semibold mb-4">Tienda</h4>
                        <ul className="space-y-2 text-sm text-green-light">
                            <li>
                                <Link href="/tienda" className="hover:text-white transition-colors">
                                    Todos los Sabores
                                </Link>
                            </li>
                            <li>
                                <Link href="/packs" className="hover:text-white transition-colors">
                                    Packs
                                </Link>
                            </li>
                            <li>
                                <Link href="/b2b" className="hover:text-white transition-colors">
                                    Compra por Volumen
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Info */}
                    <div>
                        <h4 className="font-semibold mb-4">Información</h4>
                        <ul className="space-y-2 text-sm text-green-light">
                            <li>
                                <Link href="/sobre-nosotros" className="hover:text-white transition-colors">
                                    Sobre Nosotros
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="hover:text-white transition-colors">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="/contacto" className="hover:text-white transition-colors">
                                    Contacto
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal & Contact */}
                    <div>
                        <h4 className="font-semibold mb-4">Legal y Contacto</h4>
                        <ul className="space-y-2 text-sm text-green-light mb-4">
                            <li>
                                <Link href="/politicas/terminos" className="hover:text-white transition-colors">
                                    Términos y Condiciones
                                </Link>
                            </li>
                            <li>
                                <Link href="/politicas/privacidad" className="hover:text-white transition-colors">
                                    Privacidad
                                </Link>
                            </li>
                            <li>
                                <Link href="/politicas/envios" className="hover:text-white transition-colors">
                                    Envíos
                                </Link>
                            </li>
                            <li>
                                <Link href="/politicas/cambios-devoluciones" className="hover:text-white transition-colors">
                                    Cambios y Devoluciones
                                </Link>
                            </li>
                        </ul>

                        <div className="space-y-2 text-sm">
                            <a
                                href="mailto:contacto@buenbocado.cl"
                                className="flex items-center gap-2 text-green-light hover:text-white transition-colors"
                            >
                                <Mail className="w-4 h-4" />
                                contacto@buenbocado.cl
                            </a>
                            <a
                                href="https://wa.me/56912345678"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-green-light hover:text-white transition-colors"
                            >
                                <Phone className="w-4 h-4" />
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-green-brand mt-8 pt-8 text-center text-sm text-green-light">
                    <p>&copy; {new Date().getFullYear()} BuenBocado. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
