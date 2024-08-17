import { Product } from 'payload-types';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export type CartItem = {
  product: Product;
};

type CartState = {
  items: CartItem[];
  addItem: (product: Product) => void;
  // TODO: if this is UUID, productId will be a string
  removeItem: (productId: number) => void;
  clearCart: () => void;
};

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (product) =>
        set((state) => {
          return { items: [...state.items, { product }] };
        }),
      removeItem: (productId) =>
        set((state) => ({
          items: state.items.filter((item) => item.product.id !== productId),
        })),
      clearCart: () => set({ items: [] }),
    }),
    // this tell zustand so save in local storage instead of session storage.
    // TODO: Isn't it better to save it in session storage??
    { name: 'cart-storage', storage: createJSONStorage(() => localStorage) },
  ),
);
