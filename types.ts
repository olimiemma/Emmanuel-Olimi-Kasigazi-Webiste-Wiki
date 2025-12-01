export interface TimelineEvent {
  year: string;
  title: string;
  location: string;
  description: string;
  icon?: React.ReactNode;
}

export interface Venture {
  title: string;
  role: string;
  period: string;
  description: string;
  link?: string;
  tags: string[];
  image?: string; // URL to image
}

export interface Skill {
  category: string;
  items: string[];
}
