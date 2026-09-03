import { SectionTimetable } from '../types';
import { PHYSICS_TIMETABLES } from './physicsData';
import { CS_TIMETABLES } from './csData';
import { EE_TIMETABLES } from './eeData';
import { CE_TIMETABLES } from './ceData';
import { MGMT_TIMETABLES } from './mgmtData';
import { SCIENCES_TIMETABLES } from './sciencesData';
import { HUMANITIES_TIMETABLES } from './humanitiesData';
import { MATH_ECON_TIMETABLES } from './mathEconData';
import { DEPARTMENTS } from './departments';

export const ALL_TIMETABLES: Record<string, SectionTimetable> = {
  ...PHYSICS_TIMETABLES,
  ...CS_TIMETABLES,
  ...EE_TIMETABLES,
  ...CE_TIMETABLES,
  ...MGMT_TIMETABLES,
  ...SCIENCES_TIMETABLES,
  ...HUMANITIES_TIMETABLES,
  ...MATH_ECON_TIMETABLES,
};

export { DEPARTMENTS };

export function getTimetableById(id: string): SectionTimetable | undefined {
  return ALL_TIMETABLES[id];
}

export function getSectionsForDepartment(deptId: string): SectionTimetable[] {
  const dept = DEPARTMENTS.find((d) => d.id === deptId);
  if (!dept) return [];
  return dept.sectionIds
    .map((secId) => ALL_TIMETABLES[secId])
    .filter((sec): sec is SectionTimetable => sec !== undefined);
}
