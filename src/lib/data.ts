// Seed data for ecommerce entities and sample data

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  images: string[];
  inStock: boolean;
  stockQuantity: number;
  rating: number;
  reviewCount: number;
  tags: string[];
  brand: string;
  sku: string;
  weight?: number;
  dimensions?: {
    length: number;
    width: number;
    height: number;
  };
  features: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  parentId?: string;
  productCount: number;
  isActive: boolean;
  sortOrder: number;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  phone?: string;
  dateOfBirth?: string;
  addresses: Address[];
  preferences: {
    newsletter: boolean;
    notifications: boolean;
    currency: string;
    language: string;
  };
  createdAt: string;
  lastLoginAt: string;
}

export interface Address {
  id: string;
  type: 'billing' | 'shipping';
  firstName: string;
  lastName: string;
  company?: string;
  street1: string;
  street2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone?: string;
  isDefault: boolean;
}

export interface Order {
  id: string;
  userId: string;
  orderNumber: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled' | 'refunded';
  items: OrderItem[];
  subtotal: number;
  tax: number;
  shipping: number;
  discount: number;
  total: number;
  currency: string;
  paymentMethod: string;
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
  shippingAddress: Address;
  billingAddress: Address;
  trackingNumber?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
  estimatedDelivery?: string;
}

export interface OrderItem {
  id: string;
  productId: string;
  productName: string;
  productImage: string;
  quantity: number;
  price: number;
  total: number;
  sku: string;
}

export interface Review {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  title: string;
  comment: string;
  verified: boolean;
  helpful: number;
  images?: string[];
  createdAt: string;
  updatedAt: string;
}

export interface InventoryItem {
  id: string;
  productId: string;
  sku: string;
  quantity: number;
  reserved: number;
  available: number;
  reorderLevel: number;
  reorderQuantity: number;
  supplier: string;
  cost: number;
  lastRestocked: string;
  location: string;
}

// Sample products data
export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    description: 'Premium wireless headphones with active noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.',
    price: 199.99,
    originalPrice: 249.99,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&h=500&fit=crop'
    ],
    inStock: true,
    stockQuantity: 45,
    rating: 4.5,
    reviewCount: 128,
    tags: ['wireless', 'bluetooth', 'noise-cancelling', 'premium'],
    brand: 'AudioTech',
    sku: 'AT-WH-001',
    weight: 0.3,
    dimensions: { length: 20, width: 18, height: 8 },
    features: [
      'Active Noise Cancellation',
      '30-hour battery life',
      'Quick charge (15 min = 3 hours)',
      'Premium leather ear cups',
      'Built-in microphone'
    ],
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-20T14:30:00Z'
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    description: 'Advanced fitness tracker with heart rate monitoring, GPS, and 7-day battery life. Track your workouts and health metrics.',
    price: 299.99,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=500&h=500&fit=crop'
    ],
    inStock: true,
    stockQuantity: 32,
    rating: 4.3,
    reviewCount: 89,
    tags: ['fitness', 'smartwatch', 'health', 'gps'],
    brand: 'FitTech',
    sku: 'FT-SW-002',
    weight: 0.05,
    features: [
      'Heart rate monitoring',
      'Built-in GPS',
      '7-day battery life',
      'Water resistant (50m)',
      '40+ workout modes'
    ],
    createdAt: '2024-01-10T08:00:00Z',
    updatedAt: '2024-01-18T16:45:00Z'
  },
  {
    id: '3',
    name: 'Organic Cotton T-Shirt',
    description: 'Comfortable and sustainable organic cotton t-shirt. Perfect for everyday wear with a classic fit.',
    price: 29.99,
    category: 'clothing',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1583743814966-8936f37f4678?w=500&h=500&fit=crop'
    ],
    inStock: true,
    stockQuantity: 120,
    rating: 4.7,
    reviewCount: 203,
    tags: ['organic', 'cotton', 'sustainable', 'casual'],
    brand: 'EcoWear',
    sku: 'EW-TS-003',
    weight: 0.2,
    features: [
      '100% organic cotton',
      'Pre-shrunk fabric',
      'Classic fit',
      'Machine washable',
      'GOTS certified'
    ],
    createdAt: '2024-01-05T12:00:00Z',
    updatedAt: '2024-01-15T09:20:00Z'
  },
  {
    id: '4',
    name: 'Professional Camera Lens',
    description: 'High-quality 50mm f/1.8 lens for professional photography. Sharp images with beautiful bokeh effect.',
    price: 449.99,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&h=500&fit=crop'
    ],
    inStock: true,
    stockQuantity: 18,
    rating: 4.8,
    reviewCount: 67,
    tags: ['camera', 'lens', 'photography', 'professional'],
    brand: 'LensMaster',
    sku: 'LM-50-004',
    weight: 0.6,
    features: [
      '50mm focal length',
      'f/1.8 maximum aperture',
      'Multi-coated elements',
      'Silent autofocus motor',
      'Weather sealed'
    ],
    createdAt: '2024-01-08T14:00:00Z',
    updatedAt: '2024-01-22T11:15:00Z'
  },
  {
    id: '5',
    name: 'Ergonomic Office Chair',
    description: 'Premium ergonomic office chair with lumbar support and adjustable height. Perfect for long work sessions.',
    price: 399.99,
    originalPrice: 499.99,
    category: 'furniture',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1541558869434-2840d308329a?w=500&h=500&fit=crop'
    ],
    inStock: true,
    stockQuantity: 25,
    rating: 4.6,
    reviewCount: 156,
    tags: ['office', 'chair', 'ergonomic', 'furniture'],
    brand: 'ComfortSeating',
    sku: 'CS-EC-005',
    weight: 22,
    dimensions: { length: 70, width: 70, height: 120 },
    features: [
      'Adjustable lumbar support',
      'Height adjustable',
      'Breathable mesh back',
      '360-degree swivel',
      '5-year warranty'
    ],
    createdAt: '2024-01-12T16:00:00Z',
    updatedAt: '2024-01-19T13:40:00Z'
  },
  {
    id: '6',
    name: 'Stainless Steel Water Bottle',
    description: 'Insulated stainless steel water bottle that keeps drinks cold for 24 hours or hot for 12 hours.',
    price: 34.99,
    category: 'lifestyle',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop'
    ],
    inStock: true,
    stockQuantity: 85,
    rating: 4.4,
    reviewCount: 94,
    tags: ['water bottle', 'insulated', 'stainless steel', 'eco-friendly'],
    brand: 'HydroLife',
    sku: 'HL-WB-006',
    weight: 0.4,
    features: [
      'Double-wall insulation',
      'BPA-free',
      'Leak-proof cap',
      '500ml capacity',
      'Dishwasher safe'
    ],
    createdAt: '2024-01-07T10:30:00Z',
    updatedAt: '2024-01-16T15:20:00Z'
  }
];

// Sample categories data
export const categories: Category[] = [
  {
    id: '1',
    name: 'Electronics',
    slug: 'electronics',
    description: 'Latest gadgets, devices, and electronic accessories',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&fit=crop',
    productCount: 156,
    isActive: true,
    sortOrder: 1
  },
  {
    id: '2',
    name: 'Clothing',
    slug: 'clothing',
    description: 'Fashion and apparel for all occasions',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop',
    productCount: 243,
    isActive: true,
    sortOrder: 2
  },
  {
    id: '3',
    name: 'Furniture',
    slug: 'furniture',
    description: 'Home and office furniture for every space',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
    productCount: 89,
    isActive: true,
    sortOrder: 3
  },
  {
    id: '4',
    name: 'Lifestyle',
    slug: 'lifestyle',
    description: 'Products for a better lifestyle and wellness',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop',
    productCount: 67,
    isActive: true,
    sortOrder: 4
  },
  {
    id: '5',
    name: 'Sports & Outdoors',
    slug: 'sports-outdoors',
    description: 'Equipment and gear for sports and outdoor activities',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    productCount: 134,
    isActive: true,
    sortOrder: 5
  }
];

// Sample users data
export const users: User[] = [
  {
    id: '1',
    email: 'john.doe@example.com',
    firstName: 'John',
    lastName: 'Doe',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    phone: '+1-555-0123',
    dateOfBirth: '1985-06-15',
    addresses: [
      {
        id: '1',
        type: 'shipping',
        firstName: 'John',
        lastName: 'Doe',
        street1: '123 Main St',
        city: 'New York',
        state: 'NY',
        postalCode: '10001',
        country: 'US',
        phone: '+1-555-0123',
        isDefault: true
      }
    ],
    preferences: {
      newsletter: true,
      notifications: true,
      currency: 'USD',
      language: 'en'
    },
    createdAt: '2024-01-01T00:00:00Z',
    lastLoginAt: '2024-01-23T14:30:00Z'
  },
  {
    id: '2',
    email: 'jane.smith@example.com',
    firstName: 'Jane',
    lastName: 'Smith',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    phone: '+1-555-0456',
    addresses: [
      {
        id: '2',
        type: 'shipping',
        firstName: 'Jane',
        lastName: 'Smith',
        street1: '456 Oak Ave',
        city: 'Los Angeles',
        state: 'CA',
        postalCode: '90210',
        country: 'US',
        phone: '+1-555-0456',
        isDefault: true
      }
    ],
    preferences: {
      newsletter: false,
      notifications: true,
      currency: 'USD',
      language: 'en'
    },
    createdAt: '2024-01-05T00:00:00Z',
    lastLoginAt: '2024-01-22T09:15:00Z'
  }
];

// Sample orders data
export const orders: Order[] = [
  {
    id: '1',
    userId: '1',
    orderNumber: 'ORD-2024-001',
    status: 'delivered',
    items: [
      {
        id: '1',
        productId: '1',
        productName: 'Wireless Bluetooth Headphones',
        productImage: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop',
        quantity: 1,
        price: 199.99,
        total: 199.99,
        sku: 'AT-WH-001'
      },
      {
        id: '2',
        productId: '3',
        productName: 'Organic Cotton T-Shirt',
        productImage: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100&h=100&fit=crop',
        quantity: 2,
        price: 29.99,
        total: 59.98,
        sku: 'EW-TS-003'
      }
    ],
    subtotal: 259.97,
    tax: 20.80,
    shipping: 9.99,
    discount: 0,
    total: 290.76,
    currency: 'USD',
    paymentMethod: 'Credit Card',
    paymentStatus: 'paid',
    shippingAddress: {
      id: '1',
      type: 'shipping',
      firstName: 'John',
      lastName: 'Doe',
      street1: '123 Main St',
      city: 'New York',
      state: 'NY',
      postalCode: '10001',
      country: 'US',
      phone: '+1-555-0123',
      isDefault: true
    },
    billingAddress: {
      id: '1',
      type: 'billing',
      firstName: 'John',
      lastName: 'Doe',
      street1: '123 Main St',
      city: 'New York',
      state: 'NY',
      postalCode: '10001',
      country: 'US',
      phone: '+1-555-0123',
      isDefault: true
    },
    trackingNumber: 'TRK123456789',
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-18T16:30:00Z',
    estimatedDelivery: '2024-01-20T00:00:00Z'
  },
  {
    id: '2',
    userId: '1',
    orderNumber: 'ORD-2024-002',
    status: 'processing',
    items: [
      {
        id: '3',
        productId: '2',
        productName: 'Smart Fitness Watch',
        productImage: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop',
        quantity: 1,
        price: 299.99,
        total: 299.99,
        sku: 'FT-SW-002'
      }
    ],
    subtotal: 299.99,
    tax: 24.00,
    shipping: 0,
    discount: 30.00,
    total: 293.99,
    currency: 'USD',
    paymentMethod: 'PayPal',
    paymentStatus: 'paid',
    shippingAddress: {
      id: '1',
      type: 'shipping',
      firstName: 'John',
      lastName: 'Doe',
      street1: '123 Main St',
      city: 'New York',
      state: 'NY',
      postalCode: '10001',
      country: 'US',
      phone: '+1-555-0123',
      isDefault: true
    },
    billingAddress: {
      id: '1',
      type: 'billing',
      firstName: 'John',
      lastName: 'Doe',
      street1: '123 Main St',
      city: 'New York',
      state: 'NY',
      postalCode: '10001',
      country: 'US',
      phone: '+1-555-0123',
      isDefault: true
    },
    createdAt: '2024-01-20T14:00:00Z',
    updatedAt: '2024-01-21T09:45:00Z',
    estimatedDelivery: '2024-01-25T00:00:00Z'
  }
];

// Sample reviews data
export const reviews: Review[] = [
  {
    id: '1',
    productId: '1',
    userId: '1',
    userName: 'John Doe',
    userAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face',
    rating: 5,
    title: 'Excellent sound quality!',
    comment: 'These headphones exceeded my expectations. The noise cancellation is fantastic and the battery life is as advertised. Highly recommended!',
    verified: true,
    helpful: 12,
    createdAt: '2024-01-16T10:00:00Z',
    updatedAt: '2024-01-16T10:00:00Z'
  },
  {
    id: '2',
    productId: '1',
    userId: '2',
    userName: 'Jane Smith',
    userAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face',
    rating: 4,
    title: 'Great value for money',
    comment: 'Good headphones overall. The build quality is solid and they are comfortable for long listening sessions. Only minor complaint is the case could be smaller.',
    verified: true,
    helpful: 8,
    createdAt: '2024-01-18T14:30:00Z',
    updatedAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    productId: '2',
    userId: '1',
    userName: 'John Doe',
    userAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face',
    rating: 4,
    title: 'Perfect fitness companion',
    comment: 'This watch has been great for tracking my workouts. The heart rate monitor is accurate and the GPS works well. Battery life is impressive.',
    verified: true,
    helpful: 15,
    createdAt: '2024-01-22T09:15:00Z',
    updatedAt: '2024-01-22T09:15:00Z'
  },
  {
    id: '4',
    productId: '3',
    userId: '2',
    userName: 'Jane Smith',
    userAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face',
    rating: 5,
    title: 'Super comfortable and sustainable',
    comment: 'Love this t-shirt! The organic cotton feels amazing and the fit is perfect. Great to support sustainable fashion.',
    verified: true,
    helpful: 6,
    createdAt: '2024-01-19T16:45:00Z',
    updatedAt: '2024-01-19T16:45:00Z'
  }
];

// Sample inventory data
export const inventory: InventoryItem[] = [
  {
    id: '1',
    productId: '1',
    sku: 'AT-WH-001',
    quantity: 45,
    reserved: 5,
    available: 40,
    reorderLevel: 10,
    reorderQuantity: 50,
    supplier: 'AudioTech Supplier',
    cost: 120.00,
    lastRestocked: '2024-01-10T00:00:00Z',
    location: 'Warehouse A - Section 1'
  },
  {
    id: '2',
    productId: '2',
    sku: 'FT-SW-002',
    quantity: 32,
    reserved: 2,
    available: 30,
    reorderLevel: 15,
    reorderQuantity: 40,
    supplier: 'FitTech Direct',
    cost: 180.00,
    lastRestocked: '2024-01-08T00:00:00Z',
    location: 'Warehouse A - Section 2'
  },
  {
    id: '3',
    productId: '3',
    sku: 'EW-TS-003',
    quantity: 120,
    reserved: 8,
    available: 112,
    reorderLevel: 25,
    reorderQuantity: 100,
    supplier: 'EcoWear Manufacturing',
    cost: 15.00,
    lastRestocked: '2024-01-12T00:00:00Z',
    location: 'Warehouse B - Section 1'
  },
  {
    id: '4',
    productId: '4',
    sku: 'LM-50-004',
    quantity: 18,
    reserved: 1,
    available: 17,
    reorderLevel: 5,
    reorderQuantity: 20,
    supplier: 'LensMaster Corp',
    cost: 280.00,
    lastRestocked: '2024-01-05T00:00:00Z',
    location: 'Warehouse A - Section 3'
  },
  {
    id: '5',
    productId: '5',
    sku: 'CS-EC-005',
    quantity: 25,
    reserved: 3,
    available: 22,
    reorderLevel: 8,
    reorderQuantity: 30,
    supplier: 'ComfortSeating Ltd',
    cost: 240.00,
    lastRestocked: '2024-01-15T00:00:00Z',
    location: 'Warehouse C - Section 1'
  },
  {
    id: '6',
    productId: '6',
    sku: 'HL-WB-006',
    quantity: 85,
    reserved: 5,
    available: 80,
    reorderLevel: 20,
    reorderQuantity: 75,
    supplier: 'HydroLife Supplies',
    cost: 18.00,
    lastRestocked: '2024-01-14T00:00:00Z',
    location: 'Warehouse B - Section 2'
  }
];

// Export aliases to avoid import name mismatches
export { products as seedProducts };
export { categories as seedCategories };
export { users as seedUsers };
export { orders as seedOrders };
export { reviews as seedReviews };
export { inventory as seedInventory };