export type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

export interface ClassSlot {
  id: string;
  courseCode: string;
  courseName: string;
  startTime: string; // e.g., "08:30"
  endTime: string;   // e.g., "10:00"
  duration?: string; // e.g., "2 hrs", "3 hrs"
  room: string;      // e.g., "207 (AB-2)"
  instructor?: string;
  isLab?: boolean;
  notes?: string;    // e.g. "Only for Pre-medical Students", "Merged BCH-2"
}

export interface CourseDetail {
  code: string;
  title: string;
  creditHours: string; // e.g. "3(2,1)" or "3(3,0)"
  instructor: string;
  isLab?: boolean;
  remarks?: string;
}

export interface SectionTimetable {
  id: string; // e.g. "elc-1a"
  departmentId: string;
  departmentName: string;
  program: string; // e.g. "BS Electronics"
  sectionCode: string; // e.g. "1A", "1B", "1C", "1", "1C - R"
  officialTitle: string; // e.g. "Fall 2026 - ELC - 1A"
  schedule: Record<DayOfWeek, ClassSlot[]>;
  offDays: DayOfWeek[];
  courses: CourseDetail[];
}

export interface DepartmentInfo {
  id: string;
  name: string;
  shortCode: string;
  category: string;
  sectionIds: string[];
}
