import { create } from 'zustand';
import type { CartItem, Product } from 'src/types';

export type CartState = {
  items: Record<string, CartItem>;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clear: () => void;
  getTotal: () => number;
  getCount: () => number;
};

export const useCartStore = create<CartState>((set, get) => ({
  items: {},
  addItem: (product, quantity = 1) =>
    set((state) => {
      const existing = state.items[product.id];
      const newQty = (existing?.quantity ?? 0) + quantity;
      return {
        items: {
          ...state.items,
          [product.id]: { product, quantity: newQty },
        },
      };
    }),
  removeItem: (productId) =>
    set((state) => {
      const { [productId]: _removed, ...rest } = state.items;
      return { items: rest };
    }),
  updateQuantity: (productId, quantity) =>
    set((state) => {
      if (quantity <= 0) {
        const { [productId]: _removed, ...rest } = state.items;
        return { items: rest };
      }
      const existing = state.items[productId];
      if (!existing) return state;
      return {
        items: {
          ...state.items,
          [productId]: { ...existing, quantity },
        },
      };
    }),
  clear: () => set({ items: {} }),
  getTotal: () => {
    const { items } = get();
    return Object.values(items).reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  },
  getCount: () => {
    const { items } = get();
    return Object.values(items).reduce((count, item) => count + item.quantity, 0);
  },
}));