export type NavItem = {
  title: string;
  href: string;
};

export type MenuItem = {
  name: string;
  description: string;
  price: string;
  image: string;
  ingredients: string;
};

export type Review = {
  name: string;
  rating: number;
  text: string;
  avatar: string;
};

export type SocialLink = {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

export type OpeningHour = {
  day: string;
  hours: string;
};
