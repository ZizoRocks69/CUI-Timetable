import React from 'react';
import { Clock, MapPin, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  onOpenGuide: () => void;
  currentSectionTitle?: string;
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenGuide,
  currentSectionTitle,
  darkMode,
  onToggleDarkMode,
}) => {
  const todayName = new Date().toLocaleDateString('en-US', { weekday: 'short' });
  const todayDate = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

  return (
    <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <span className="font-portal-brand font-extrabold text-slate-900 dark:text-slate-100 text-sm sm:text-base tracking-tight">
              COMSATS Timetable Portal
            </span>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Live Today Badge */}
            <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-400">
              <Clock className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
              <span>{todayName}, {todayDate}</span>
            </div>

            {/* Campus Guide button */}
            <button
              onClick={onOpenGuide}
              id="btn-campus-guide"
              type="button"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              title="Campus Block & Lab directory"
            >
              <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
              <span className="hidden sm:inline">Rooms Guide</span>
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={onToggleDarkMode}
              id="btn-toggle-dark-mode"
              type="button"
              className="p-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-600" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
