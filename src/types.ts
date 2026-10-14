export interface Service {
  id: number;
  name: string;
  category: string;
  address: string;
  rating: number;
  distance: number;
  phone: string;
  openNow: boolean;
  description?: string;
  latitude?: number;
  longitude?: number;
}

export interface Review {
  id: number;
  serviceId: number;
  serviceName: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface User {
  name: string;
  email: string;
  phone: string;
  role: string;
}