export interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'sweets' | 'main-course' | 'snacks' | 'beverages';
  image: string;
  rating: number;
  reviews: number;
  isVeg: boolean;
  isPopular?: boolean;
  isAvailable: boolean;
}

export interface CartItem extends FoodItem {
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'confirmed' | 'preparing' | 'out-for-delivery' | 'delivered' | 'cancelled';
  paymentStatus: 'paid' | 'pending' | 'failed';
  paymentMethod: 'cod' | 'razorpay';
  date: string;
  address: string;
  userId: string;
  userName: string;
}

export interface Complaint {
  id: string;
  orderId: string;
  userId: string;
  userName: string;
  message: string;
  status: 'open' | 'in-progress' | 'resolved';
  adminReply?: string;
  date: string;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  foodId: string;
  foodName: string;
  rating: number;
  comment: string;
  date: string;
  isVisible: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  orderCount: number;
  status: 'active' | 'inactive';
  joinedDate: string;
}

export const foodItems: FoodItem[] = [
  {
    id: '1',
    name: 'Gulab Jamun',
    description: 'Soft, melt-in-mouth milk solids dumplings soaked in rose-flavored sugar syrup',
    price: 120,
    category: 'sweets',
    image: '/placeholder.svg',
    rating: 4.8,
    reviews: 245,
    isVeg: true,
    isPopular: true,
    isAvailable: true,
  },
  {
    id: '2',
    name: 'Rasgulla',
    description: 'Spongy cottage cheese balls dipped in light sugar syrup',
    price: 100,
    category: 'sweets',
    image: '/placeholder.svg',
    rating: 4.7,
    reviews: 189,
    isVeg: true,
    isPopular: true,
    isAvailable: true,
  },
  {
    id: '3',
    name: 'Kaju Katli',
    description: 'Premium cashew fudge with silver leaf garnish',
    price: 450,
    category: 'sweets',
    image: '/placeholder.svg',
    rating: 4.9,
    reviews: 312,
    isVeg: true,
    isPopular: true,
    isAvailable: true,
  },
  {
    id: '4',
    name: 'Jalebi',
    description: 'Crispy, pretzel-shaped sweets soaked in saffron syrup',
    price: 80,
    category: 'sweets',
    image: '/placeholder.svg',
    rating: 4.6,
    reviews: 178,
    isVeg: true,
    isAvailable: true,
  },
  {
    id: '5',
    name: 'Paneer Butter Masala',
    description: 'Cottage cheese cubes in rich, creamy tomato gravy',
    price: 280,
    category: 'main-course',
    image: '/placeholder.svg',
    rating: 4.7,
    reviews: 234,
    isVeg: true,
    isPopular: true,
    isAvailable: true,
  },
  {
    id: '6',
    name: 'Dal Makhani',
    description: 'Slow-cooked black lentils in buttery tomato cream sauce',
    price: 220,
    category: 'main-course',
    image: '/placeholder.svg',
    rating: 4.8,
    reviews: 267,
    isVeg: true,
    isAvailable: true,
  },
  {
    id: '7',
    name: 'Butter Chicken',
    description: 'Tender chicken in rich, creamy tomato-based curry',
    price: 350,
    category: 'main-course',
    image: '/placeholder.svg',
    rating: 4.9,
    reviews: 412,
    isVeg: false,
    isPopular: true,
    isAvailable: true,
  },
  {
    id: '8',
    name: 'Biryani',
    description: 'Fragrant basmati rice layered with spiced meat and aromatics',
    price: 320,
    category: 'main-course',
    image: '/placeholder.svg',
    rating: 4.8,
    reviews: 356,
    isVeg: false,
    isPopular: true,
    isAvailable: true,
  },
  {
    id: '9',
    name: 'Samosa',
    description: 'Crispy triangular pastry filled with spiced potatoes and peas',
    price: 30,
    category: 'snacks',
    image: '/placeholder.svg',
    rating: 4.5,
    reviews: 567,
    isVeg: true,
    isPopular: true,
    isAvailable: true,
  },
  {
    id: '10',
    name: 'Pani Puri',
    description: 'Crispy hollow puris with tangy tamarind water and fillings',
    price: 60,
    category: 'snacks',
    image: '/placeholder.svg',
    rating: 4.7,
    reviews: 423,
    isVeg: true,
    isAvailable: true,
  },
  {
    id: '11',
    name: 'Aloo Tikki',
    description: 'Spiced potato patties served with chutneys',
    price: 50,
    category: 'snacks',
    image: '/placeholder.svg',
    rating: 4.4,
    reviews: 234,
    isVeg: true,
    isAvailable: true,
  },
  {
    id: '12',
    name: 'Masala Chai',
    description: 'Traditional Indian spiced tea with ginger and cardamom',
    price: 40,
    category: 'beverages',
    image: '/placeholder.svg',
    rating: 4.8,
    reviews: 678,
    isVeg: true,
    isPopular: true,
    isAvailable: true,
  },
  {
    id: '13',
    name: 'Mango Lassi',
    description: 'Refreshing yogurt-based mango smoothie',
    price: 80,
    category: 'beverages',
    image: '/placeholder.svg',
    rating: 4.6,
    reviews: 345,
    isVeg: true,
    isAvailable: true,
  },
  {
    id: '14',
    name: 'Fresh Lime Soda',
    description: 'Tangy lime juice with soda and a hint of mint',
    price: 50,
    category: 'beverages',
    image: '/placeholder.svg',
    rating: 4.5,
    reviews: 234,
    isVeg: true,
    isAvailable: true,
  },
  {
    id: '15',
    name: 'Motichoor Ladoo',
    description: 'Sweet balls made from tiny fried gram flour pearls',
    price: 150,
    category: 'sweets',
    image: '/placeholder.svg',
    rating: 4.7,
    reviews: 189,
    isVeg: true,
    isAvailable: true,
  },
  {
    id: '16',
    name: 'Chole Bhature',
    description: 'Spicy chickpea curry served with fluffy fried bread',
    price: 150,
    category: 'main-course',
    image: '/placeholder.svg',
    rating: 4.6,
    reviews: 298,
    isVeg: true,
    isAvailable: true,
  },
];

export const dummyOrders: Order[] = [
  {
    id: 'ORD001',
    items: [
      { ...foodItems[0], quantity: 2 },
      { ...foodItems[4], quantity: 1 },
    ],
    total: 520,
    status: 'delivered',
    paymentStatus: 'paid',
    paymentMethod: 'razorpay',
    date: '2024-01-15',
    address: '123 Main Street, Sitapur, UP',
    userId: 'USR001',
    userName: 'Rahul Sharma',
  },
  {
    id: 'ORD002',
    items: [
      { ...foodItems[6], quantity: 2 },
      { ...foodItems[11], quantity: 4 },
    ],
    total: 860,
    status: 'out-for-delivery',
    paymentStatus: 'paid',
    paymentMethod: 'cod',
    date: '2024-01-16',
    address: '456 Market Road, Sitapur, UP',
    userId: 'USR002',
    userName: 'Priya Verma',
  },
  {
    id: 'ORD003',
    items: [
      { ...foodItems[2], quantity: 1 },
      { ...foodItems[8], quantity: 6 },
    ],
    total: 630,
    status: 'preparing',
    paymentStatus: 'pending',
    paymentMethod: 'cod',
    date: '2024-01-16',
    address: '789 Temple Lane, Sitapur, UP',
    userId: 'USR003',
    userName: 'Amit Kumar',
  },
  {
    id: 'ORD004',
    items: [
      { ...foodItems[7], quantity: 2 },
      { ...foodItems[12], quantity: 2 },
    ],
    total: 800,
    status: 'pending',
    paymentStatus: 'pending',
    paymentMethod: 'razorpay',
    date: '2024-01-16',
    address: '321 College Road, Sitapur, UP',
    userId: 'USR004',
    userName: 'Neha Singh',
  },
];

export const dummyComplaints: Complaint[] = [
  {
    id: 'CMP001',
    orderId: 'ORD001',
    userId: 'USR001',
    userName: 'Rahul Sharma',
    message: 'The delivery was delayed by 30 minutes.',
    status: 'resolved',
    adminReply: 'We apologize for the delay. A discount coupon has been added to your account.',
    date: '2024-01-15',
  },
  {
    id: 'CMP002',
    orderId: 'ORD002',
    userId: 'USR002',
    userName: 'Priya Verma',
    message: 'Food was not hot when delivered.',
    status: 'in-progress',
    date: '2024-01-16',
  },
  {
    id: 'CMP003',
    orderId: 'ORD003',
    userId: 'USR003',
    userName: 'Amit Kumar',
    message: 'Missing items in order - ordered 6 samosas but received only 4.',
    status: 'open',
    date: '2024-01-16',
  },
];

export const dummyReviews: Review[] = [
  {
    id: 'REV001',
    userId: 'USR001',
    userName: 'Rahul Sharma',
    foodId: '1',
    foodName: 'Gulab Jamun',
    rating: 5,
    comment: 'Best gulab jamun in Sitapur! Soft, juicy and perfectly sweet.',
    date: '2024-01-15',
    isVisible: true,
  },
  {
    id: 'REV002',
    userId: 'USR002',
    userName: 'Priya Verma',
    foodId: '7',
    foodName: 'Butter Chicken',
    rating: 4,
    comment: 'Great taste but a bit too creamy for my liking.',
    date: '2024-01-16',
    isVisible: true,
  },
  {
    id: 'REV003',
    userId: 'USR003',
    userName: 'Amit Kumar',
    foodId: '3',
    foodName: 'Kaju Katli',
    rating: 5,
    comment: 'Premium quality cashew katli. Worth every penny!',
    date: '2024-01-16',
    isVisible: true,
  },
];

export const dummyUsers: User[] = [
  {
    id: 'USR001',
    name: 'Rahul Sharma',
    email: 'rahul.sharma@email.com',
    phone: '+91 9876543210',
    address: '123 Main Street, Sitapur, UP',
    orderCount: 15,
    status: 'active',
    joinedDate: '2023-06-15',
  },
  {
    id: 'USR002',
    name: 'Priya Verma',
    email: 'priya.verma@email.com',
    phone: '+91 9876543211',
    address: '456 Market Road, Sitapur, UP',
    orderCount: 8,
    status: 'active',
    joinedDate: '2023-08-20',
  },
  {
    id: 'USR003',
    name: 'Amit Kumar',
    email: 'amit.kumar@email.com',
    phone: '+91 9876543212',
    address: '789 Temple Lane, Sitapur, UP',
    orderCount: 23,
    status: 'active',
    joinedDate: '2023-03-10',
  },
  {
    id: 'USR004',
    name: 'Neha Singh',
    email: 'neha.singh@email.com',
    phone: '+91 9876543213',
    address: '321 College Road, Sitapur, UP',
    orderCount: 5,
    status: 'inactive',
    joinedDate: '2023-11-05',
  },
];

export const categories = [
  { id: 'all', name: 'All', icon: '🍽️' },
  { id: 'sweets', name: 'Sweets', icon: '🍬' },
  { id: 'main-course', name: 'Main Course', icon: '🍛' },
  { id: 'snacks', name: 'Snacks', icon: '🥟' },
  { id: 'beverages', name: 'Beverages', icon: '🥤' },
];
