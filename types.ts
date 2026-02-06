export interface NavItem {
  id: string;
  label: string;
}

export interface Doctor {
  id: number;
  name: string;
  title: string;
  role: string;
  greeting: string;
  specialty: string;
  image: string;
  history: string[];
}

export interface ClinicItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  details: string[];
}

export interface PriceItem {
  category: string;
  name: string;
  price: string;
  note?: string; // Added for '비고'
}

export interface ReviewItem {
  id: number;
  name: string;
  treatment: string;
  content: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface EquipmentItem {
  id: string;
  title: string;
  spec: string;
  image: string;
}