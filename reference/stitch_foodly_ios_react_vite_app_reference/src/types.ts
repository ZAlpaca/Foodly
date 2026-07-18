export enum ScreenId {
  Welcome = "welcome",
  Explore = "explore",
  RestaurantDetails = "restaurant-details",
  DishDetails = "dish-details",
  Cart = "cart",
  Orders = "orders",
  Checkout = "checkout",
  Profile = "profile"
}

export type TransitionType = "push" | "push_back" | "slide_up" | "none";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  options: string[];
}

export interface Order {
  id: string;
  restaurantName: string;
  date: string;
  total: number;
  status: "ACTIVE" | "PREPARING" | "DELIVERED";
  eta: string;
  image: string;
  itemsSummary: string;
}
