import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
    variantId: string;
    productId: string;
    productName: string;
    flavorName: string;
    weight: number;
    price: number;
    quantity: number;
    image?: string;
    sku: string;
}

interface CartStore {
    items: CartItem[];
    couponCode: string | null;
    couponDiscount: number;

    addItem: (item: Omit<CartItem, 'quantity'>, quantity?: number) => void;
    removeItem: (variantId: string) => void;
    updateQuantity: (variantId: string, quantity: number) => void;
    clearCart: () => void;
    applyCoupon: (code: string, discount: number) => void;
    removeCoupon: () => void;

    getSubtotal: () => number;
    getTotal: () => number;
    getItemCount: () => number;
}

export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            items: [],
            couponCode: null,
            couponDiscount: 0,

            addItem: (item, quantity = 1) => {
                set((state) => {
                    const existingItem = state.items.find(
                        (i) => i.variantId === item.variantId
                    );

                    if (existingItem) {
                        return {
                            items: state.items.map((i) =>
                                i.variantId === item.variantId
                                    ? { ...i, quantity: i.quantity + quantity }
                                    : i
                            ),
                        };
                    }

                    return {
                        items: [...state.items, { ...item, quantity }],
                    };
                });
            },

            removeItem: (variantId) => {
                set((state) => ({
                    items: state.items.filter((i) => i.variantId !== variantId),
                }));
            },

            updateQuantity: (variantId, quantity) => {
                if (quantity <= 0) {
                    get().removeItem(variantId);
                    return;
                }

                set((state) => ({
                    items: state.items.map((i) =>
                        i.variantId === variantId ? { ...i, quantity } : i
                    ),
                }));
            },

            clearCart: () => {
                set({ items: [], couponCode: null, couponDiscount: 0 });
            },

            applyCoupon: (code, discount) => {
                set({ couponCode: code, couponDiscount: discount });
            },

            removeCoupon: () => {
                set({ couponCode: null, couponDiscount: 0 });
            },

            getSubtotal: () => {
                const state = get();
                return state.items.reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                );
            },

            getTotal: () => {
                const state = get();
                const subtotal = state.getSubtotal();
                return Math.max(0, subtotal - state.couponDiscount);
            },

            getItemCount: () => {
                const state = get();
                return state.items.reduce((count, item) => count + item.quantity, 0);
            },
        }),
        {
            name: 'buenbocado-cart',
        }
    )
);
