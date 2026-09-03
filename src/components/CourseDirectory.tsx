import React from 'react';
import { SectionTimetable } from '../types';
import { BookOpen, User, Info } from 'lucide-react';

interface CourseDirectoryProps {
  timetable: SectionTimetable;
}

export const CourseDirectory: React.FC<CourseDirectoryProps> = ({ timetable }) => {
  return (
    <div id="course-directory-container" className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 sm:p-5 space-y-4 transition-colors">
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
        <div>
          <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-slate-400 dark:text-slate-500" />
            <span>Course Curriculum ({timetable.courses.length})</span>
          </h3>
          <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-0.5">
            {timetable.program} &bull; Section {timetable.sectionCode}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {timetable.courses.map((course, idx) => (
          <div
            key={`${course.code}-${idx}`}
            className="p-3.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <span className="text-xs font-bold text-slate-900 dark:text-slate-100">
                  {course.code}
                </span>
                <span className="text-[10px] font-medium px-1.5 py-0.2 rounded bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                  {course.creditHours}
                </span>
              </div>
              <h4 className="text-xs font-medium text-slate-800 dark:text-slate-200 leading-snug mb-2">
                {course.title}
              </h4>
            </div>

            <div className="pt-2 border-t border-slate-200/60 dark:border-slate-700/60 space-y-1 text-xs">
              <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 text-[11px]">
                <User className="w-3 h-3 text-slate-400" />
                <span>{course.instructor || 'TBA'}</span>
              </div>
              {course.remarks && (
                <div className="flex items-start gap-1 text-[11px] text-amber-700 dark:text-amber-400 mt-1">
                  <Info className="w-3 h-3 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>{course.remarks}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
