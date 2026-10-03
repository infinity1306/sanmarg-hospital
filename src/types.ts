export interface Specialty {
  id: number;
  title: string;
  description: string;
  icon: string;
  image_url: string;
  order: number;
}

export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  designation: string;
  image_url: string;
  bio: string;
  experience_years: number;
  order: number;
}

export interface Facility {
  id: number;
  title: string;
  description: string;
  image_url: string;
  order: number;
}

export interface Appointment {
  id: number;
  name: string;
  email: string;
  phone: string;
  department: string;
  doctor: string;
  appointment_date: string;
  message?: string;
  status: string;
  created_at: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image_url: string;
}

export interface ContactMessage {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at: string;
}

export interface GalleryImage {
  id: number;
  title: string;
  image_url: string;
  category: string;
  order: number;
}

export interface Stat {
  id: number;
  label: string;
  value: string;
  suffix: string;
  order: number;
}
