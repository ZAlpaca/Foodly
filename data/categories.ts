import { Category } from '@/types';

export const categories: Category[] = [
  { id: 'cat-1', name: 'Dining', icon: 'restaurant' },
  { id: 'cat-2', name: 'Bakery', icon: 'bakery_dining' },
  { id: 'cat-3', name: 'Drinks', icon: 'local_bar' },
  { id: 'cat-4', name: 'Dessert', icon: 'icecream' },
  { id: 'cat-5', name: 'Burger', icon: 'lunch_dining' },
  { id: 'cat-6', name: 'Asian', icon: 'ramen_dining' },
];

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}
