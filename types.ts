export interface SocialLinks {
  pinterestUrl: string;
  threadsUrl: string;
  instagramUrl?: string;
  email?: string;
  location?: string;
}

export interface CuratedItem {
  id: string;
  title: string;
  category: string;
  tags: string;
  description: string;
  image: string;
  pinterestBoardUrl?: string;
  threadsPostUrl?: string;
  featuredQuote?: string;
}

export interface MetricCard {
  icon: 'sparkles' | 'flower' | 'search';
  value: string;
  label: string;
  description: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
}

export interface SpotlightItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  image: string;
  targetPlatform: 'pinterest' | 'threads';
  ctaText: string;
}

export interface NailItem {
  id: string;
  title: string;
  finish: string;
  shape: string;
  palette: string;
  description: string;
  image: string;
  pinterestUrl?: string;
  threadsUrl?: string;
}
