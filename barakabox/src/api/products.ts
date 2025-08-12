import type { Product } from 'src/types';

const PRODUCTS: Product[] = [
  {
    id: 'apple-gala',
    name: 'Gala Apples',
    price: 2.49,
    unit: 'lb',
    image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=800&q=80',
    description: 'Crisp and mildly sweet gala apples, perfect for snacking.',
    tags: ['fruit', 'fresh'],
  },
  {
    id: 'banana',
    name: 'Bananas',
    price: 0.79,
    unit: 'lb',
    image: 'https://images.unsplash.com/photo-1571771898328-5a1e0a1f0e89?w=800&q=80',
    description: 'Ripe bananas full of potassium for daily energy.',
    tags: ['fruit', 'fresh'],
  },
  {
    id: 'milk-2pct',
    name: 'Milk 2%',
    price: 3.49,
    unit: 'gal',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=800&q=80',
    description: 'Fresh dairy milk, 2% fat for balanced taste.',
    tags: ['dairy'],
  },
  {
    id: 'bread-sourdough',
    name: 'Sourdough Bread',
    price: 4.99,
    unit: 'loaf',
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=800&q=80',
    description: 'Artisan sourdough with a crispy crust and airy crumb.',
    tags: ['bakery'],
  },
  {
    id: 'spinach',
    name: 'Fresh Spinach',
    price: 1.99,
    unit: 'bunch',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&q=80',
    description: 'Leafy green spinach, great for salads and smoothies.',
    tags: ['vegetable', 'fresh'],
  },
];

export async function fetchProducts(): Promise<Product[]> {
  await new Promise((r) => setTimeout(r, 250));
  return PRODUCTS;
}

export async function fetchProductById(id: string): Promise<Product | undefined> {
  await new Promise((r) => setTimeout(r, 200));
  return PRODUCTS.find((p) => p.id === id);
}