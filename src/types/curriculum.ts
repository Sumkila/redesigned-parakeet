export interface StudentQuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  topic: string;
}

export interface TimetableItem {
  time: string;
  subject: string;
  room: string;
  teacher: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  curriculum: string;
}

export interface GradeItem {
  subject: string;
  code: string;
  termAverage: number;
  target: number;
  trend: 'up' | 'down' | 'steady';
  curriculumStandard: string;
  recentAssessment: string;
}

export interface DepartmentMetric {
  department: string;
  hod: string;
  curriculumPacing: number;
  passRateProjected: number;
  iqmsStatus: 'approved' | 'pending' | 'in-review';
}
