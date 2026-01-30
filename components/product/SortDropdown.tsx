"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, ArrowUpDown, Check } from "lucide-react";

const options = [
    { label: "Más populares", value: "popular" },
    { label: "Precio: menor a mayor", value: "price_asc" },
    { label: "Precio: mayor a menor", value: "price_desc" },
    { label: "Nuevos ingresos", value: "newest" },
];

export function SortDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(options[0]);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative w-full sm:w-72" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full h-14 bg-marfil/50 border border-transparent hover:border-green-brand/20 rounded-2xl px-6 flex items-center justify-between group transition-all focus:outline-none focus:ring-4 focus:ring-green-brand/5 active:scale-[0.98]"
            >
                <div className="flex items-center gap-3">
                    <ArrowUpDown className="w-4 h-4 text-gray-400 group-hover:text-green-brand transition-colors" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-900">{selected.label}</span>
                </div>
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 right-0 mt-3 bg-white border border-gray-100 rounded-[1.5rem] shadow-2xl shadow-black/10 overflow-hidden z-[100] animate-slide-up">
                    <div className="p-2">
                        {options.map((option) => (
                            <button
                                key={option.value}
                                onClick={() => {
                                    setSelected(option);
                                    setIsOpen(false);
                                }}
                                className={`w-full flex items-center justify-between px-5 py-4 rounded-xl text-left transition-all group ${selected.value === option.value
                                        ? "bg-green-50 text-green-700"
                                        : "hover:bg-marfil text-gray-600 hover:text-gray-900"
                                    }`}
                            >
                                <span className="text-[10px] font-black uppercase tracking-widest">{option.label}</span>
                                {selected.value === option.value && (
                                    <Check className="w-3.5 h-3.5 text-green-brand" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
