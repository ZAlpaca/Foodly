export interface MenuOption {
  name: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  nutritionalInfo: {
    calories: number;
    protein: string;
    fat: string;
    carbs: string;
  };
  availableOptions: MenuOption[];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
}

export interface Restaurant {
  id: string;
  name: string;
  description: string;
  cuisine: string;
  priceLevel: '$' | '$$' | '$$$' | '$$$$';
  rating: number;
  reviewCount: number;
  image: string;
  deliveryTime: string;
  deliveryFee: number;
  distance: string;
  categories: string[];
  menu: MenuItem[];
  reviews: Review[];
  address?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface CartItem {
  id: string;
  menuItem: MenuItem;
  quantity: number;
  selectedOptions: string[];
  restaurantId: string;
  restaurantName: string;
}

export interface Order {
  id: string;
  restaurantName: string;
  restaurantImage: string;
  itemsSummary: string;
  date: string;
  total: number;
  status: 'ACTIVE' | 'PREPARING' | 'DELIVERED';
  eta: string;
  items: CartItem[];
}

export type OrderStatus = Order['status'];
