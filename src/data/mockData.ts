import type { Specialty, Doctor, Facility, Stat } from '../types';

export const defaultStats: Stat[] = [
  { id: 1, label: 'Happy Patients', value: '50000', suffix: '+', order: 1 },
  { id: 2, label: 'Expert Doctors', value: '50', suffix: '+', order: 2 },
  { id: 3, label: 'Modern ICU Beds', value: '100', suffix: '+', order: 3 },
  { id: 4, label: 'Emergency Care', value: '24', suffix: '/7', order: 4 },
];

export const defaultSpecialties: Specialty[] = [
  {
    id: 1,
    title: 'Cardiology',
    description: 'Advanced heart care, diagnostics, angiography, and surgical interventions by leading cardiologists.',
    icon: 'Heart',
    image_url: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80&w=800',
    order: 1,
  },
  {
    id: 2,
    title: 'Neurology',
    description: 'Comprehensive neuro-diagnostics, brain & spine trauma surgery, and stroke rehabilitation.',
    icon: 'Brain',
    image_url: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800',
    order: 2,
  },
  {
    id: 3,
    title: 'Orthopaedics',
    description: 'Joint replacement, arthroscopy, fracture management, and sports injury recovery programs.',
    icon: 'Bone',
    image_url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800',
    order: 3,
  },
  {
    id: 4,
    title: 'Pediatrics & Neonatology',
    description: 'Specialized neonatal ICU, pediatric critical care, vaccinations, and child development support.',
    icon: 'Baby',
    image_url: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800',
    order: 4,
  },
  {
    id: 5,
    title: 'Obstetrics & Gynaecology',
    description: 'Maternity care, high-risk pregnancy management, laparoscopy, and comprehensive women health.',
    icon: 'Smile',
    image_url: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800',
    order: 5,
  },
  {
    id: 6,
    title: 'Ophthalmology',
    description: 'Advanced cataract surgeries, retina care, LASIK, and complete eye health evaluations.',
    icon: 'Eye',
    image_url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    order: 6,
  },
  {
    id: 7,
    title: 'General & Laparoscopic Surgery',
    description: 'Minimally invasive keyhole surgeries for fast recovery, minimal pain, and short hospital stay.',
    icon: 'Activity',
    image_url: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800',
    order: 7,
  },
  {
    id: 8,
    title: 'Diagnostics & Pathology',
    description: '24/7 fully automated pathology lab, digital X-Ray, ultrasound, and CT scan facilities.',
    icon: 'Microscope',
    image_url: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800',
    order: 8,
  },
];

export const defaultFacilities: Facility[] = [
  {
    id: 1,
    title: '24/7 Critical Care & Advanced ICU',
    description: 'High-dependency intensive care unit with advanced ventilators, multi-parameter monitors, and 24/7 intensivist support.',
    image_url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200',
    order: 1,
  },
  {
    id: 2,
    title: 'Modular Operation Theatres',
    description: 'State-of-the-art sterile laminar flow surgical suites equipped for complex laparoscopic and orthopaedic procedures.',
    image_url: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1200',
    order: 2,
  },
  {
    id: 3,
    title: 'Advanced Diagnostic & Radiology Wing',
    description: 'Precision diagnostics including digital X-Ray, high-resolution Ultrasound, and fully automated hematology analyzers.',
    image_url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200',
    order: 3,
  },
  {
    id: 4,
    title: '24/7 Emergency & Trauma Center',
    description: 'Rapid-response trauma bay with dedicated resuscitation beds, mobile ICU ambulances, and on-call emergency physicians.',
    image_url: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=1200',
    order: 4,
  },
];

export const defaultDoctors: Doctor[] = [
  {
    id: 1,
    name: 'Dr. S. K. Verma',
    specialty: 'Cardiology',
    designation: 'Senior Consultant Cardiologist',
    image_url: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600',
    bio: 'Over 18 years of experience in interventional cardiology, echocardiography, and preventive cardiac wellness.',
    experience_years: 18,
    order: 1,
  },
  {
    id: 2,
    name: 'Dr. Priya Sharma',
    specialty: 'Obstetrics & Gynaecology',
    designation: 'Chief Consultant Obstetrician',
    image_url: 'https://images.unsplash.com/photo-1594824813590-779836371ef3?auto=format&fit=crop&q=80&w=600',
    bio: 'Dedicated to women health, high-risk obstetrics, painless deliveries, and minimally invasive laparoscopic surgeries.',
    experience_years: 14,
    order: 2,
  },
  {
    id: 3,
    name: 'Dr. Rajesh Kumar',
    specialty: 'Orthopaedics',
    designation: 'Senior Joint Replacement Surgeon',
    image_url: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600',
    bio: 'Specialist in robotic knee and hip replacement, complex trauma reconstruction, and sports medicine.',
    experience_years: 16,
    order: 3,
  },
  {
    id: 4,
    name: 'Dr. Ananya Roy',
    specialty: 'Pediatrics',
    designation: 'Head of Pediatric & Neonatal Care',
    image_url: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600',
    bio: 'Compassionate pediatric specialist caring for neonates, infants, and adolescents with utmost dedication.',
    experience_years: 12,
    order: 4,
  },
];
