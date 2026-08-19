export type UserRole = 'student' | 'teacher' | 'parent' | 'principal' | 'admin';

export interface RoleFeature {
  title: string;
  description: string;
  iconName: string;
  tag: string;
  badgeColor: string;
}

export interface PortalConfig {
  id: UserRole;
  label: string;
  title: string;
  badge: string;
  heroHeadline: string;
  heroSubheadline: string;
  color: string;
  accentColor: string;
  bgColor: string;
  borderColor: string;
  icon: string;
  keyFeatures: string[];
}
