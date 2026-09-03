import React from 'react';
import { Building, Layers, Filter } from 'lucide-react';
import { DepartmentInfo, DayOfWeek, SectionTimetable } from '../types';

interface TimetableControlsProps {
  departments: DepartmentInfo[];
  selectedDeptId: string;
  onSelectDepartment: (deptId: string) => void;
  availableSections: SectionTimetable[];
  selectedSectionId: string;
  onSelectSection: (sectionId: string) => void;
  selectedDay: 'All' | DayOfWeek;
  onSelectDay: (day: 'All' | DayOfWeek) => void;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  activeView: 'table' | 'agenda' | 'courses';
  onViewChange: (view: 'table' | 'agenda' | 'courses') => void;
}

const DAYS: ('All' | DayOfWeek)[] = ['All', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export const TimetableControls: React.FC<TimetableControlsProps> = ({
  departments,
  selectedDeptId,
  onSelectDepartment,
  availableSections,
  selectedSectionId,
  onSelectSection,
  selectedDay,
  onSelectDay,
  activeView,
  onViewChange,
}) => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-3.5 sm:p-4 space-y-3 transition-colors">
      {/* Primary Selection: Department & Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-2.5 sm:gap-3">
        {/* Department Dropdown */}
        <div className="md:col-span-7 space-y-1">
          <label htmlFor="dept-select" className="block text-[11px] font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
            <Building className="w-3.5 h-3.5 text-slate-400" />
            <span>Department</span>
          </label>
          <div className="relative">
            <select
              id="dept-select"
              value={selectedDeptId}
              onChange={(e) => onSelectDepartment(e.target.value)}
              className="w-full appearance-none bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 focus:border-slate-400 dark:focus:border-slate-500 text-slate-900 dark:text-slate-100 rounded-lg px-3 py-2 text-xs sm:text-sm font-medium transition-colors cursor-pointer pr-9 outline-hidden"
            >
              {departments.map((dept) => (
                <option key={dept.id} value={dept.id} className="dark:bg-slate-800 dark:text-slate-100">
                  {dept.name} ({dept.shortCode})
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-slate-400">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Section Dropdown */}
        <div className="md:col-span-5 space-y-1">
          <label htmlFor="section-select" className="block text-[11px] font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-slate-400" />
            <span>Section ({availableSections.length})</span>
          </label>
          <div className="relative">
            <select
              id="section-select"
              value={selectedSectionId}
              onChange={(e) => onSelectSection(e.target.value)}
              className="w-full appearance-none bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 focus:border-slate-400 dark:focus:border-slate-500 text-slate-900 dark:text-slate-100 rounded-lg px-3 py-2 text-xs sm:text-sm font-medium transition-colors cursor-pointer pr-9 outline-hidden"
            >
              {availableSections.map((sec) => (
                <option key={sec.id} value={sec.id} className="dark:bg-slate-800 dark:text-slate-100">
                  {sec.program} &bull; {sec.sectionCode}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-slate-400">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Row: Day Selector & View Mode Switcher */}
      <div className="pt-2.5 border-t border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
        {/* Day Selector Pills */}
        {activeView !== 'courses' ? (
          <div className="flex items-center gap-1 overflow-x-auto pb-0.5 text-xs">
            <span className="text-slate-400 dark:text-slate-500 flex items-center gap-1 mr-1 text-[11px]">
              <Filter className="w-3 h-3" />
              <span>Day:</span>
            </span>
            {DAYS.map((day) => {
              const isSelected = selectedDay === day;
              return (
                <button
                  key={day}
                  id={`filter-day-${day.toLowerCase()}`}
                  type="button"
                  onClick={() => onSelectDay(day)}
                  className={`px-2 py-1 rounded-md text-[11px] font-medium whitespace-nowrap transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-semibold'
                      : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {day === 'All' ? 'All Days' : day.slice(0, 3)}
                </button>
              );
            })}
          </div>
        ) : (
          <div />
        )}

        {/* View Mode Switcher */}
        <div className="flex items-center gap-0.5 bg-slate-100 dark:bg-slate-800/80 p-0.5 rounded-lg text-xs self-start sm:self-auto">
          <button
            type="button"
            id="view-mode-table"
            onClick={() => onViewChange('table')}
            className={`px-2.5 py-1 rounded-md font-medium transition-all cursor-pointer ${
              activeView === 'table'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
            }`}
          >
            Table
          </button>
          <button
            type="button"
            id="view-mode-agenda"
            onClick={() => onViewChange('agenda')}
            className={`px-2.5 py-1 rounded-md font-medium transition-all cursor-pointer ${
              activeView === 'agenda'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
            }`}
          >
            Agenda
          </button>
          <button
            type="button"
            id="view-mode-courses"
            onClick={() => onViewChange('courses')}
            className={`px-2.5 py-1 rounded-md font-medium transition-all cursor-pointer ${
              activeView === 'courses'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
            }`}
          >
            Courses ({availableSections.find(s => s.id === selectedSectionId)?.courses.length || 0})
          </button>
        </div>
      </div>
    </div>
  );
};
