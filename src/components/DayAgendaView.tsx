import React from 'react';
import { SectionTimetable, DayOfWeek, ClassSlot } from '../types';
import { Clock, MapPin, User, Coffee } from 'lucide-react';

interface DayAgendaViewProps {
  timetable: SectionTimetable;
  selectedDay: 'All' | DayOfWeek;
  searchQuery?: string;
}

const ALL_DAYS: DayOfWeek[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export const DayAgendaView: React.FC<DayAgendaViewProps> = ({
  timetable,
  selectedDay,
  searchQuery = '',
}) => {
  const currentDayName = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const daysToShow = selectedDay === 'All' ? ALL_DAYS : [selectedDay];

  const filterSlot = (slot: ClassSlot) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      slot.courseCode.toLowerCase().includes(q) ||
      slot.courseName.toLowerCase().includes(q) ||
      slot.room.toLowerCase().includes(q) ||
      (slot.instructor && slot.instructor.toLowerCase().includes(q))
    );
  };

  return (
    <div id="day-agenda-container" className="space-y-4">
      {daysToShow.map((day) => {
        const isOffDay = timetable.offDays.includes(day);
        const isToday = currentDayName === day;
        const slots = (timetable.schedule[day] || []).filter(filterSlot);

        if (searchQuery && slots.length === 0 && !isOffDay) {
          return null;
        }

        return (
          <div
            key={day}
            className={`bg-white dark:bg-slate-900 rounded-xl border ${
              isToday
                ? 'border-slate-400 dark:border-slate-600'
                : 'border-slate-200 dark:border-slate-800'
            } overflow-hidden transition-colors`}
          >
            {/* Day Header */}
            <div className="px-4 py-2.5 flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/50">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">{day}</h3>
                {isToday && (
                  <span className="text-[9px] font-semibold px-1.5 py-0.2 rounded bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900">
                    Today
                  </span>
                )}
              </div>
              <div>
                {isOffDay ? (
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/40">
                    Off Day
                  </span>
                ) : (
                  <span className="text-xs text-slate-400 dark:text-slate-500">
                    {slots.length} class{slots.length !== 1 ? 'es' : ''}
                  </span>
                )}
              </div>
            </div>

            {/* Content: Cards or Off Day Notice */}
            <div className="p-4">
              {isOffDay || slots.length === 0 ? (
                <div className="flex items-center gap-2.5 py-4 px-3 text-slate-500 dark:text-slate-400 text-xs">
                  <Coffee className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                  <span>No classes scheduled for {timetable.sectionCode} on {day}.</span>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {slots.map((slot) => {
                    const isLab = slot.isLab || slot.courseCode.includes('LAB');
                    return (
                      <div
                        key={slot.id}
                        className={`p-3.5 rounded-lg border transition-all ${
                          isLab
                            ? 'bg-purple-50/20 dark:bg-purple-950/10 border-purple-200/60 dark:border-purple-800/40'
                            : 'bg-slate-50/50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2 mb-1.5">
                          <span className="text-xs font-bold text-slate-900 dark:text-slate-100">
                            {slot.courseCode}
                          </span>
                          <span className="text-xs text-slate-600 dark:text-slate-400 flex items-center gap-1">
                            <Clock className="w-3 h-3 text-slate-400" />
                            <span>{slot.startTime} - {slot.endTime}</span>
                          </span>
                        </div>

                        <h4 className="text-xs font-medium text-slate-700 dark:text-slate-300 mb-2 line-clamp-1">
                          {slot.courseName}
                        </h4>

                        <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
                          <span className="flex items-center gap-1 text-slate-700 dark:text-slate-300">
                            <MapPin className="w-3 h-3 text-slate-400" />
                            <span>{slot.room}</span>
                          </span>
                          <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                            <User className="w-3 h-3 text-slate-400" />
                            <span>{slot.instructor || 'Faculty'}</span>
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
