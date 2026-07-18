import { create } from 'zustand';
import { CartItem, MenuItem } from '@/types';

interface CartState {
  items: CartItem[];
  discount: number;

  // Actions
  addItem: (menuItem: MenuItem, quantity: number, selectedOptions: string[], restaurantId: string, restaurantName: string) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, delta: number) => void;
  applyPromo: (code: string) => boolean;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()((set) => ({
  items: [],
  discount: 0,

  addItem: (menuItem, quantity, selectedOptions, restaurantId, restaurantName) => {
    set((state) => {
      const existingIndex = state.items.findIndex(
        (item) =>
          item.menuItem.id === menuItem.id &&
          JSON.stringify(item.selectedOptions) === JSON.stringify(selectedOptions),
      );

      if (existingIndex >= 0) {
        const updated = [...state.items];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        };
        return { items: updated };
      }

      const newItem: CartItem = {
        id: `cart-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
        menuItem,
        quantity,
        selectedOptions,
        restaurantId,
        restaurantName,
      };

      return { items: [...state.items, newItem] };
    });
  },

  removeItem: (itemId) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== itemId),
    }));
  },

  updateQuantity: (itemId, delta) => {
    set((state) => ({
      items: state.items
        .map((item) => {
          if (item.id === itemId) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null),
    }));
  },

  applyPromo: (code) => {
    if (code.trim().toUpperCase() === 'FOODLY10') {
      set({ discount: 10.0 });
      return true;
    }
    return false;
  },

  clearCart: () => set({ items: [], discount: 0 }),
}));

// Selectors for computed values
export const useCartSubtotal = () =>
  useCartStore((state) =>
    state.items.reduce((acc, item) => acc + item.menuItem.price * item.quantity, 0),
  );

export const useCartDeliveryFee = () =>
  useCartStore((state) => (state.items.length > 0 ? 5.0 : 0));

export const useCartServiceFee = () =>
  useCartStore((state) => (state.items.length > 0 ? 2.5 : 0));

export const useCartDiscount = () => useCartStore((state) => state.discount);

export const useCartTotal = () => {
  const subtotal = useCartSubtotal();
  const deliveryFee = useCartDeliveryFee();
  const serviceFee = useCartServiceFee();
  const discount = useCartDiscount();
  return subtotal + deliveryFee + serviceFee - discount;
};

export const useCartCount = () =>
  useCartStore((state) => state.items.reduce((acc, item) => acc + item.quantity, 0));
