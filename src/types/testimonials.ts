import { UserRole } from './roles.ts';

export interface Testimonial {
  name: string;
  role: string;
  school: string;
  city: string;
  avatar: string;
  quote: string;
  metrics: string;
  roleType: UserRole;
}
