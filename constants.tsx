
import React from 'react';
import { Testimonial, Feature, PricingTier } from './types';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: "Paper changed how our team thinks about distribution. It's the cleanest tool we've ever used.",
    author: "Sarah Jenkins, Design Lead at Flow",
    avatar: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    id: '2',
    quote: "The interface is invisible. It just lets me work. It feels like the future of social management.",
    author: "Marcus Aurelius, Content Strategist",
    avatar: "https://picsum.photos/seed/marcus/100/100"
  },
  {
    id: '3',
    quote: "Minimalism done right. No fluff, just pure utility and speed.",
    author: "Elena Rodriguez, Independent Creator",
    avatar: "https://picsum.photos/seed/elena/100/100"
  },
  {
    id: '4',
    quote: "Finally, a scheduler that doesn't look like it was built in 2010.",
    author: "David Chen, Growth Engineer",
    avatar: "https://picsum.photos/seed/david/100/100"
  }
];

export const PRICING_FEATURES: Feature[] = [
  {
    id: 'f1',
    title: 'Unified Inbox',
    description: 'All comments and messages in one place.',
    available: { [PricingTier.PERSONAL]: true, [PricingTier.PRO]: true, [PricingTier.ENTERPRISE]: true }
  },
  {
    id: 'f2',
    title: 'Smart Scheduling',
    description: 'AI-driven peak engagement posting.',
    available: { [PricingTier.PERSONAL]: false, [PricingTier.PRO]: true, [PricingTier.ENTERPRISE]: true }
  },
  {
    id: 'f3',
    title: 'Team Collaboration',
    description: 'Invite up to 10 members and assign roles.',
    available: { [PricingTier.PERSONAL]: false, [PricingTier.PRO]: true, [PricingTier.ENTERPRISE]: true }
  },
  {
    id: 'f4',
    title: 'Custom Workflows',
    description: 'Automate post approvals and distribution.',
    available: { [PricingTier.PERSONAL]: false, [PricingTier.PRO]: false, [PricingTier.ENTERPRISE]: true }
  }
];

export const LOGOS = [
  { name: 'X', url: 'https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_original.svg' },
  { name: 'Instagram', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png' },
  { name: 'Threads', url: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Threads_(social_network)_logo.svg' },
  { name: 'LinkedIn', url: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png' },
  { name: 'TikTok', url: 'https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg' },
  { name: 'Mastodon', url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Mastodon_logotype_%28simple%29.svg' },
  { name: 'YouTube', url: 'https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg' }
];
