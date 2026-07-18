import { Order, CartItem } from '@/types';
import { restaurants } from './restaurants';

const sourdoughStone = restaurants.find((r) => r.id === 'rest-5')!;
const pacificPoke = restaurants.find((r) => r.id === 'rest-6')!;
const goldenTruffle = restaurants.find((r) => r.id === 'rest-1')!;
const wagyuLab = restaurants.find((r) => r.id === 'rest-3')!;
const maison = restaurants.find((r) => r.id === 'rest-4')!;

function buildCartItem(
  restaurantId: string,
  restaurantName: string,
  menuItemIndex: number,
  quantity: number,
  selectedOptions: string[],
  restaurant: typeof sourdoughStone,
): CartItem {
  const menuItem = restaurant.menu[menuItemIndex];
  return {
    id: `${restaurantId}-cart-${menuItem.id}`,
    menuItem,
    quantity,
    selectedOptions,
    restaurantId,
    restaurantName,
  };
}

export const initialOrders: Order[] = [
  {
    id: 'order-1',
    restaurantName: 'Sourdough & Stone',
    restaurantImage: sourdoughStone.image,
    itemsSummary: '1x • Truffle Sourdough Pizza',
    date: 'Today, 12:45 PM',
    total: 42.50,
    status: 'ACTIVE',
    eta: 'ETA: 8 mins',
    items: [
      buildCartItem('rest-5', 'Sourdough & Stone', 0, 1, ['Extra Mozzarella'], sourdoughStone),
      buildCartItem('rest-5', 'Sourdough & Stone', 3, 1, [], sourdoughStone),
    ],
  },
  {
    id: 'order-2',
    restaurantName: 'Pacific Blue Poke',
    restaurantImage: pacificPoke.image,
    itemsSummary: '1x • Salmon Poke Bowl',
    date: 'Today, 1:10 PM',
    total: 28.00,
    status: 'PREPARING',
    eta: 'ETA: 15 mins',
    items: [
      buildCartItem('rest-6', 'Pacific Blue Poke', 0, 1, ['Extra Salmon'], pacificPoke),
      buildCartItem('rest-6', 'Pacific Blue Poke', 2, 1, [], pacificPoke),
    ],
  },
  {
    id: 'order-3',
    restaurantName: 'The Golden Truffle',
    restaurantImage: goldenTruffle.image,
    itemsSummary: '2x • Truffle Tagliatelle, 1x • Wild Truffle Risotto',
    date: 'Today, 9:30 AM',
    total: 80.00,
    status: 'PREPARING',
    eta: 'ETA: 22 mins',
    items: [
      buildCartItem('rest-1', 'The Golden Truffle', 3, 2, ['Extra Parmesan'], goldenTruffle),
      buildCartItem('rest-1', 'The Golden Truffle', 0, 1, ['Extra Truffle Shavings'], goldenTruffle),
    ],
  },
  {
    id: 'order-4',
    restaurantName: 'Wagyu Burger Lab',
    restaurantImage: wagyuLab.image,
    itemsSummary: '1x • The Truffle Wagyu',
    date: 'Oct 24, 2023',
    total: 32.50,
    status: 'DELIVERED',
    eta: 'Delivered',
    items: [
      buildCartItem('rest-3', 'Wagyu Burger Lab', 0, 1, ['Extra Gruyère Cheese', 'Smoked Streaky Bacon'], wagyuLab),
    ],
  },
  {
    id: 'order-5',
    restaurantName: "Maison de l'Élégance",
    restaurantImage: maison.image,
    itemsSummary: '2x • Pan-Seared Scallops',
    date: 'Oct 21, 2023',
    total: 96.00,
    status: 'DELIVERED',
    eta: 'Delivered',
    items: [
      buildCartItem('rest-4', "Maison de l'Élégance", 1, 2, ['Truffle Mash Side'], maison),
    ],
  },
];

export function addOrder(
  order: Omit<Order, 'id' | 'date'>,
): Order {
  const newOrder: Order = {
    ...order,
    id: `order-${Date.now()}`,
    date: 'Today, Just Now',
  };
  initialOrders.unshift(newOrder);
  return newOrder;
}
