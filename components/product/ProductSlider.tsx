"use client";

import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface ProductSliderProps {
    children: React.ReactNode;
    options?: any;
    autoPlay?: boolean;
}

export function ProductSlider({ children, options = { loop: false, align: "start", containScroll: "trimSnaps" }, autoPlay = false }: ProductSliderProps) {
    const plugins = autoPlay ? [Autoplay({ delay: 4000, stopOnInteraction: true })] : [];
    const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <div className="relative group">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex gap-6 pointer-events-auto">
                    {children}
                </div>
            </div>

            {/* Navigation Buttons */}
            <button
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-800 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 z-20 hover:bg-green-brand hover:text-white border border-gray-100"
                onClick={scrollPrev}
                aria-label="Anterior"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>

            <button
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-800 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 z-20 hover:bg-green-brand hover:text-white border border-gray-100"
                onClick={scrollNext}
                aria-label="Siguiente"
            >
                <ChevronRight className="w-6 h-6" />
            </button>
        </div>
    );
}
