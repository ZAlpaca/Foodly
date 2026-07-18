import { Review } from '@/types';

export interface RestaurantReview extends Review {
  restaurantId: string;
}

export const reviews: RestaurantReview[] = [
  {
    id: 'rev-1-1',
    restaurantId: 'rest-1',
    author: 'Sofia Marchetti',
    rating: 5,
    text: 'The Wild Truffle Risotto is absolutely divine. Creamy, earthy, and perfectly al dente. A true taste of Italy.',
    date: '2 weeks ago',
  },
  {
    id: 'rev-1-2',
    restaurantId: 'rest-1',
    author: 'James Chen',
    rating: 4,
    text: 'Exquisite food and impeccable service. The Wagyu Rossini was cooked to perfection. Will definitely return.',
    date: '1 month ago',
  },
  {
    id: 'rev-2-1',
    restaurantId: 'rest-2',
    author: 'Yuki Tanaka',
    rating: 5,
    text: 'The Omakase set was a journey through flavor. Every piece of sushi melted in my mouth. Truly world-class.',
    date: '1 week ago',
  },
  {
    id: 'rev-2-2',
    restaurantId: 'rest-2',
    author: 'Michael Torres',
    rating: 5,
    text: 'Best Japanese food I have had outside of Tokyo. The Miso Black Cod is spectacular.',
    date: '3 weeks ago',
  },
  {
    id: 'rev-3-1',
    restaurantId: 'rest-3',
    author: 'Alex Rivera',
    rating: 5,
    text: 'The Truffle Wagyu is hands down the best burger I have ever eaten. Perfectly cooked, incredible flavor.',
    date: '5 days ago',
  },
  {
    id: 'rev-3-2',
    restaurantId: 'rest-3',
    author: 'Priya Sharma',
    rating: 4,
    text: 'Great burgers with high quality ingredients. The Smash Double is a classic done right.',
    date: '2 weeks ago',
  },
  {
    id: 'rev-4-1',
    restaurantId: 'rest-4',
    author: 'Clara Dupont',
    rating: 5,
    text: 'Absolutely outstanding experience. The Truffle Risotto was creamy, earthy and deeply satisfying. Professional service that is rare to find. Highly recommend!',
    date: '1 week ago',
  },
  {
    id: 'rev-4-2',
    restaurantId: 'rest-4',
    author: 'Jean-Marc',
    rating: 4,
    text: 'The steak Rossini is legendary here. Perfectly cooked, rich foie gras topping. Simply exquisite. Excellent delivery tracking.',
    date: '2 weeks ago',
  },
  {
    id: 'rev-5-1',
    restaurantId: 'rest-5',
    author: 'Oliver Grant',
    rating: 5,
    text: 'The sourdough pizza crust is phenomenal. Light, crispy, and perfectly charred. The truffle pizza is a must-try.',
    date: '3 days ago',
  },
  {
    id: 'rev-5-2',
    restaurantId: 'rest-5',
    author: 'Lena Schmidt',
    rating: 4,
    text: 'Lovely Italian classics. The Burrata e Prosciutto is fresh and delicious. Tiramisu is the perfect finish.',
    date: '1 week ago',
  },
  {
    id: 'rev-6-1',
    restaurantId: 'rest-6',
    author: 'Keoni Nakamura',
    rating: 5,
    text: 'The freshest poke outside of Hawaii. Salmon bowl is packed with flavor and the portions are generous.',
    date: '4 days ago',
  },
  {
    id: 'rev-6-2',
    restaurantId: 'rest-6',
    author: 'Maya Patel',
    rating: 4,
    text: 'Delicious and healthy! Tuna poke is my go-to. Quick delivery too.',
    date: '2 weeks ago',
  },
];

export function getReviewsByRestaurant(restaurantId: string): RestaurantReview[] {
  return reviews.filter((r) => r.restaurantId === restaurantId);
}
