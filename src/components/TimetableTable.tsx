import React from 'react';
import { SectionTimetable, DayOfWeek, ClassSlot } from '../types';
import { Clock, MapPin, User, CheckCircle2, Coffee } from 'lucide-react';

interface TimetableTableProps {
  timetable: SectionTimetable;
  selectedDay: 'All' | DayOfWeek;
  searchQuery?: string;
}

const ALL_DAYS: DayOfWeek[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export const TimetableTable: React.FC<TimetableTableProps> = ({
  timetable,
  selectedDay,
  searchQuery = '',
}) => {
  const currentDayName = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  // Filter days to show
  const daysToShow = selectedDay === 'All' ? ALL_DAYS : [selectedDay];

  // Helper to filter slots by search query
  const filterSlot = (slot: ClassSlot) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      slot.courseCode.toLowerCase().includes(q) ||
      slot.courseName.toLowerCase().includes(q) ||
      slot.room.toLowerCase().includes(q) ||
      (slot.instructor && slot.instructor.toLowerCase().includes(q)) ||
      (slot.notes && slot.notes.toLowerCase().includes(q))
    );
  };

  // Compute stats
  let totalClasses = 0;
  let totalLabs = 0;
  ALL_DAYS.forEach((d) => {
    const slots = timetable.schedule[d] || [];
    slots.forEach((s) => {
      totalClasses++;
      if (s.isLab || s.courseCode.includes('LAB')) totalLabs++;
    });
  });

  return (
    <div id="timetable-table-container" className="space-y-4">
      {/* Section Header Card: Minimalist */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 sm:p-5 transition-colors">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900">
                {timetable.sectionCode}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                {timetable.departmentName}
              </span>
            </div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
              {timetable.program} &bull; Section {timetable.sectionCode}
            </h2>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-2 self-start sm:self-auto text-xs">
            <div className="px-2.5 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80">
              <span className="text-slate-400 dark:text-slate-500 mr-1.5">Classes:</span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">{totalClasses}</span>
            </div>
            <div className="px-2.5 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80">
              <span className="text-slate-400 dark:text-slate-500 mr-1.5">Labs:</span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">{totalLabs}</span>
            </div>
            <div className="px-2.5 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80">
              <span className="text-slate-400 dark:text-slate-500 mr-1.5">Off:</span>
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">{timetable.offDays.length} days</span>
            </div>
          </div>
        </div>

        {/* Off Days Pill List */}
        {timetable.offDays.length > 0 && (
          <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center gap-1.5 text-xs">
            <span className="text-slate-400 dark:text-slate-500 text-[11px] font-medium mr-1">
              Off Days:
            </span>
            {timetable.offDays.map((od) => (
              <span
                key={od}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/40"
              >
                <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                <span>{od}</span>
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Timetable in Table Form */}
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-colors">
        <div className="overflow-x-auto">
          <table id="classes-schedule-table" className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-50/80 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                <th className="py-2.5 px-3.5 w-28">Day</th>
                <th className="py-2.5 px-3.5 w-40">Timing</th>
                <th className="py-2.5 px-3.5 min-w-[200px]">Course</th>
                <th className="py-2.5 px-3.5 w-24">Type</th>
                <th className="py-2.5 px-3.5 w-36">Room</th>
                <th className="py-2.5 px-3.5 min-w-[160px]">Instructor</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
              {daysToShow.map((day) => {
                const isOffDay = timetable.offDays.includes(day);
                const isToday = currentDayName === day;
                const rawSlots = timetable.schedule[day] || [];
                const matchingSlots = rawSlots.filter(filterSlot);

                // If day is an off day or has 0 classes
                if (isOffDay || rawSlots.length === 0) {
                  if (searchQuery && matchingSlots.length === 0) return null;

                  return (
                    <tr
                      key={day}
                      className={`transition-colors ${
                        isToday
                          ? 'bg-amber-50/30 dark:bg-amber-950/10'
                          : 'bg-slate-50/30 dark:bg-slate-900/40 hover:bg-slate-50/60 dark:hover:bg-slate-800/30'
                      }`}
                    >
                      {/* Day Column */}
                      <td className="py-3 px-3.5 align-middle border-r border-slate-100 dark:border-slate-800/80">
                        <div className="flex items-center gap-1.5">
                          <span className="font-semibold text-slate-900 dark:text-slate-100">{day}</span>
                          {isToday && (
                            <span className="text-[9px] bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-semibold px-1 py-0.2 rounded">
                              Today
                            </span>
                          )}
                        </div>
                      </td>

                      {/* Off Day Banner Span */}
                      <td colSpan={5} className="py-3 px-3.5 align-middle">
                        <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 text-xs font-medium">
                          <Coffee className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                          <span>No classes scheduled on {day} (Off Day)</span>
                        </div>
                      </td>
                    </tr>
                  );
                }

                // If this day has slots, but none match search
                if (searchQuery && matchingSlots.length === 0) {
                  return null;
                }

                // Render slots for this day
                return matchingSlots.map((slot, index) => {
                  const isLab = slot.isLab || slot.courseCode.includes('LAB');
                  const isSeminar = slot.room.includes('SEMINAR') || slot.room.includes('Seminar');

                  return (
                    <tr
                      key={slot.id}
                      className={`hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors ${
                        isToday ? 'bg-slate-50/40 dark:bg-slate-800/20' : ''
                      }`}
                    >
                      {/* Day Column */}
                      <td className="py-3 px-3.5 align-top border-r border-slate-100 dark:border-slate-800/80">
                        {index === 0 ? (
                          <div>
                            <div className="flex items-center gap-1.5">
                              <span className="font-semibold text-slate-900 dark:text-slate-100">{day}</span>
                              {isToday && (
                                <span className="text-[9px] bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-semibold px-1 py-0.2 rounded">
                                  Today
                                </span>
                              )}
                            </div>
                            <span className="text-[10px] text-slate-400 dark:text-slate-500 block mt-0.5">
                              {rawSlots.length} class{rawSlots.length > 1 ? 'es' : ''}
                            </span>
                          </div>
                        ) : (
                          <span className="text-xs text-slate-300 dark:text-slate-600 block pl-2">&bull;</span>
                        )}
                      </td>

                      {/* Time Slot & Duration */}
                      <td className="py-3 px-3.5 align-middle">
                        <div className="flex items-center gap-1.5 font-medium text-slate-900 dark:text-slate-100 text-xs">
                          <Clock className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 flex-shrink-0" />
                          <span>{slot.startTime} &ndash; {slot.endTime}</span>
                        </div>
                        {slot.duration && (
                          <span className="text-[10px] text-slate-400 dark:text-slate-500 block pl-5 mt-0.5">
                            {slot.duration}
                          </span>
                        )}
                      </td>

                      {/* Course Code & Name */}
                      <td className="py-3 px-3.5 align-middle">
                        <div className="font-semibold text-slate-900 dark:text-slate-100 text-xs">
                          {slot.courseCode}
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-400 font-normal line-clamp-1">
                          {slot.courseName}
                        </div>
                        {slot.notes && (
                          <span className="inline-block text-[10px] text-amber-700 dark:text-amber-400 mt-0.5">
                            {slot.notes}
                          </span>
                        )}
                      </td>

                      {/* Type Badge */}
                      <td className="py-3 px-3.5 align-middle">
                        {isLab ? (
                          <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border border-purple-200/60 dark:border-purple-800/40">
                            Lab
                          </span>
                        ) : isSeminar ? (
                          <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200/60 dark:border-amber-800/40">
                            Seminar
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-700/60">
                            Lecture
                          </span>
                        )}
                      </td>

                      {/* Room & Location */}
                      <td className="py-3 px-3.5 align-middle">
                        <div className="flex items-center gap-1.5 font-medium text-slate-800 dark:text-slate-200 text-xs">
                          <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 flex-shrink-0" />
                          <span>{slot.room}</span>
                        </div>
                      </td>

                      {/* Instructor / Faculty */}
                      <td className="py-3 px-3.5 align-middle">
                        <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400">
                          <User className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 flex-shrink-0" />
                          <span>{slot.instructor || 'Faculty Member'}</span>
                        </div>
                      </td>
                    </tr>
                  );
                });
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
