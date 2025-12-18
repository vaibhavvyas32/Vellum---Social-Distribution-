
export enum PricingTier {
  PERSONAL = 'Personal',
  PRO = 'Pro',
  ENTERPRISE = 'Enterprise'
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  avatar: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  available: {
    [key in PricingTier]: boolean;
  };
}
