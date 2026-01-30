import { getContentBlock } from "@/lib/queries";
import { notFound } from "next/navigation";

const policyTypes: Record<string, string> = {
    terminos: 'terms',
    privacidad: 'privacy',
    envios: 'shipping',
    'cambios-devoluciones': 'returns',
};

const policyTitles: Record<string, string> = {
    terminos: 'Términos y Condiciones',
    privacidad: 'Política de Privacidad',
    envios: 'Política de Envíos',
    'cambios-devoluciones': 'Cambios y Devoluciones',
};

export async function generateMetadata({ params }: { params: { type: string } }) {
    const title = policyTitles[params.type] || 'Políticas';
    return {
        title: `${title} | BuenBocado`,
    };
}

export default async function PoliticasPage({ params }: { params: { type: string } }) {
    const pageKey = policyTypes[params.type];

    if (!pageKey) {
        notFound();
    }

    const content = await getContentBlock(pageKey);

    if (!content) {
        return (
            <main className="container py-12">
                <div className="max-w-4xl mx-auto">
                    <h1 className="mb-8">{policyTitles[params.type]}</h1>
                    <p className="text-gray-600">Contenido no disponible.</p>
                </div>
            </main>
        );
    }

    return (
        <main className="container py-12">
            <div className="max-w-4xl mx-auto">
                <div className="prose prose-lg max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: content.body.replace(/\n/g, '<br />') }} />
                </div>
            </div>
        </main>
    );
}
