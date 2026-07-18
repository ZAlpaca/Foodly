import { create } from 'zustand';
import { useShallow } from 'zustand/react/shallow';
import { Order } from '@/types';
import { initialOrders } from '@/data/orders';

interface OrdersState {
  orders: Order[];

  // Actions
  addOrder: (order: Order) => void;
  updateOrderStatus: (orderId: string, status: Order['status']) => void;
}

export const useOrdersStore = create<OrdersState>()((set, get) => ({
  orders: initialOrders as Order[],

  addOrder: (order) => {
    set((state) => ({
      orders: [order, ...state.orders],
    }));
  },

  updateOrderStatus: (orderId, status) => {
    set((state) => ({
      orders: state.orders.map((o) =>
        o.id === orderId ? { ...o, status } : o,
      ),
    }));
  },
}));

export const useActiveOrders = () =>
  useOrdersStore(
    useShallow((state) =>
      state.orders.filter((o) => o.status === 'ACTIVE' || o.status === 'PREPARING'),
    ),
  );

export const usePastOrders = () =>
  useOrdersStore(
    useShallow((state) => state.orders.filter((o) => o.status === 'DELIVERED')),
  );
