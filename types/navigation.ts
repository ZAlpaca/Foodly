export type MainTabParamList = {
  explore: undefined;
  orders: undefined;
  profile: undefined;
};

export type RootStackParamList = {
  index: undefined;
  '(main)': undefined;
};

export type RestaurantDetailParams = {
  id: string;
};

export type DishDetailParams = {
  id: string;
  restaurantId: string;
};

export type AppRoutes = {
  index: undefined;
  '(main)/explore': undefined;
  '(main)/orders': undefined;
  '(main)/profile': undefined;
  '(main)/restaurant/[id]': { id: string };
  '(main)/dish/[id]': { id: string; restaurantId: string };
  '(main)/cart': undefined;
  '(main)/checkout': undefined;
};
