import React, { useState, useEffect, useMemo } from 'react';
import { DEPARTMENTS, ALL_TIMETABLES, getSectionsForDepartment } from './data';
import { DayOfWeek } from './types';
import { Navbar } from './components/Navbar';
import { TimetableControls } from './components/TimetableControls';
import { TimetableTable } from './components/TimetableTable';
import { DayAgendaView } from './components/DayAgendaView';
import { CourseDirectory } from './components/CourseDirectory';
import { CampusGuideModal } from './components/CampusGuideModal';
import { Footer } from './components/Footer';
import { Calendar, MapPin } from 'lucide-react';

export default function App() {
  // Dark mode state with persistence
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('cui_timetable_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('cui_timetable_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('cui_timetable_theme', 'light');
    }
  }, [darkMode]);

  // Default to Physics department and Zizo's section ELC - 1B
  const [selectedDeptId, setSelectedDeptId] = useState<string>('physics');
  const [selectedSectionId, setSelectedSectionId] = useState<string>('elc-1b');
  const [selectedDay, setSelectedDay] = useState<'All' | DayOfWeek>('All');
  const [activeView, setActiveView] = useState<'table' | 'agenda' | 'courses'>('table');
  const [isGuideOpen, setIsGuideOpen] = useState<boolean>(false);

  // Available sections for current department
  const availableSections = useMemo(() => {
    return getSectionsForDepartment(selectedDeptId);
  }, [selectedDeptId]);

  // Current active timetable object
  const currentTimetable = useMemo(() => {
    return ALL_TIMETABLES[selectedSectionId] || availableSections[0] || ALL_TIMETABLES['elc-1b'];
  }, [selectedSectionId, availableSections]);

  // Handle department selection
  const handleSelectDepartment = (deptId: string) => {
    setSelectedDeptId(deptId);
    const sections = getSectionsForDepartment(deptId);
    if (sections.length > 0) {
      setSelectedSectionId(sections[0].id);
    }
  };

  // Handle section selection
  const handleSelectSection = (sectionId: string) => {
    setSelectedSectionId(sectionId);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      {/* Top Navigation */}
      <Navbar
        onOpenGuide={() => setIsGuideOpen(true)}
        currentSectionTitle={currentTimetable?.sectionCode}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode((prev) => !prev)}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6 space-y-4">
        {/* Minimal Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-1">
          <div>
            <h1 className="font-portal-brand text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              COMSATS Timetable Portal
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Department schedules &bull; Fall 2026
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setIsGuideOpen(true)}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors cursor-pointer border border-slate-200 dark:border-slate-800"
            >
              <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
              <span>Campus Rooms Guide</span>
            </button>
          </div>
        </div>

        {/* Dropdown Filters & Controls */}
        <TimetableControls
          departments={DEPARTMENTS}
          selectedDeptId={selectedDeptId}
          onSelectDepartment={handleSelectDepartment}
          availableSections={availableSections}
          selectedSectionId={selectedSectionId}
          onSelectSection={handleSelectSection}
          selectedDay={selectedDay}
          onSelectDay={setSelectedDay}
          activeView={activeView}
          onViewChange={setActiveView}
        />

        {/* Content View */}
        {currentTimetable ? (
          <div>
            {activeView === 'table' && (
              <TimetableTable
                timetable={currentTimetable}
                selectedDay={selectedDay}
              />
            )}
            {activeView === 'agenda' && (
              <DayAgendaView
                timetable={currentTimetable}
                selectedDay={selectedDay}
              />
            )}
            {activeView === 'courses' && (
              <CourseDirectory timetable={currentTimetable} />
            )}
          </div>
        ) : (
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-12 text-center text-slate-500 dark:text-slate-400">
            <Calendar className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <p className="text-sm font-medium">Please select a department and section to view timetable.</p>
          </div>
        )}
      </main>

      {/* Campus Guide Modal */}
      <CampusGuideModal isOpen={isGuideOpen} onClose={() => setIsGuideOpen(false)} />

      {/* Footer with user requested quote */}
      <Footer />
    </div>
  );
}
