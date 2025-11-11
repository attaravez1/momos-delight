import type { NavItem, MenuItem, Review, SocialLink, OpeningHour } from '@/lib/types';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export const navItems: NavItem[] = [
  { title: 'Home', href: '#home' },
  { title: 'About', href: '#about' },
  { title: 'Menu', href: '#menu' },
  { title: 'Gallery', href: '#gallery' },
  { title: 'Reviews', href: '#reviews' },
  { title: 'Contact', href: '#contact' },
];

export const shopInfo = {
  name: 'Azure Bites',
  address: 'Shop No. 7, Raghunath Shopping Center, Godhbunder Road, Owale, Thane West, Thane, Maharashtra 400607',
  phone: '+91 81045 42203',
  gmapLink: 'https://www.google.com/maps/dir/?api=1&destination=Shop+No.+7,+Raghunath+Shopping+Center,+Godhbunder+Road,+Owale,+Thane+West,+Thane,+Maharashtra+400607',
  whatsappLink: 'https://wa.me/918104542203',
  telLink: 'tel:+918104542203',
};

export const openingHours: OpeningHour[] = [
    { day: 'Monday', hours: '11:00 AM - 11:00 PM' },
    { day: 'Tuesday', hours: '11:00 AM - 11:00 PM' },
    { day: 'Wednesday', hours: '11:00 AM - 11:00 PM' },
    { day: 'Thursday', hours: '11:00 AM - 11:00 PM' },
    { day: 'Friday', hours: '11:00 AM - 11:00 PM' },
    { day: 'Saturday', hours: '11:00 AM - 11:00 PM' },
    { day: 'Sunday', hours: '11:00 AM - 11:00 PM' },
];

export const aboutContent = {
  story: "Born from a passion for authentic flavors and fresh ingredients, Azure Bites is a culinary dream brought to life. Our journey began with a simple mission: to serve delicious, high-quality food that brings people together. We believe that every meal should be a memorable experience, crafted with love and attention to detail.",
  specialties: "We specialize in a delightful array of handcrafted wraps, hearty sandwiches, and savory rolls. Our signature dishes, like the Paneer Tikka Wrap and Chicken Shawarma, are made using secret family recipes and the freshest local produce. At Azure Bites, quality isn't just a promise—it's our main ingredient.",
};

export const menuItems: MenuItem[] = [
  {
    name: 'Paneer Tikka Wrap',
    description: 'Smoky paneer tikka, crisp veggies, and mint chutney in a soft tortilla.',
    price: '₹180',
    image: 'menu-paneer-wrap',
    ingredients: 'Paneer, Bell Peppers, Onion, Yogurt, Spices, Flour Tortilla'
  },
  {
    name: 'Veggie Delight Sandwich',
    description: 'A wholesome sandwich packed with fresh lettuce, tomatoes, cucumbers, and cheese.',
    price: '₹150',
    image: 'menu-veggie-sandwich',
    ingredients: 'Whole Wheat Bread, Lettuce, Tomato, Cucumber, Cheese, Mayonnaise'
  },
  {
    name: 'Chicken Shawarma Roll',
    description: 'Tender marinated chicken, garlic sauce, and pickles wrapped in a warm pita.',
    price: '₹220',
    image: 'menu-chicken-shawarma',
    ingredients: 'Chicken, Pita Bread, Garlic, Pickles, Spices'
  },
  {
    name: 'Falafel Fusion Wrap',
    description: 'Crispy falafel balls, hummus, and a medley of fresh salads in a tortilla.',
    price: '₹170',
    image: 'menu-falafel-wrap',
    ingredients: 'Chickpeas, Hummus, Mixed Greens, Tahini Sauce, Flour Tortilla'
  },
];

export const reviews: Review[] = [
  {
    name: 'Rohan Sharma',
    rating: 5,
    text: "Absolutely love the wraps here! The Paneer Tikka Wrap is a must-try. Fresh ingredients and amazing flavors. Highly recommended!",
    avatar: 'https://i.pravatar.cc/150?u=rohan'
  },
  {
    name: 'Priya Singh',
    rating: 5,
    text: "A hidden gem in Thane. The sandwiches are so fresh and filling. The staff is friendly and the service is quick. Perfect for a quick bite.",
    avatar: 'https://i.pravatar.cc/150?u=priya'
  },
  {
    name: 'Amit Patel',
    rating: 4,
    text: "Great food, reasonable prices. The Chicken Shawarma was delicious. The place is small but clean. Will definitely visit again.",
    avatar: 'https://i.pravatar.cc/150?u=amit'
  },
  {
    name: 'Sneha Verma',
    rating: 5,
    text: "My go-to place for evening snacks. The quality of food is consistently good. The veggie options are fantastic. Keep up the great work!",
    avatar: 'https://i.pravatar.cc/150?u=sneha'
  }
];

export const socialLinks: SocialLink[] = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'Twitter', href: '#', icon: Twitter },
];

export const contactDetails = {
  title: 'Get In Touch',
  description: "We'd love to hear from you! Whether you have a question about our menu, a special request, or just want to say hello, feel free to reach out.",
};
