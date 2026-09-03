import React from 'react';
import { X, MapPin, Building2, Monitor, Users, Info } from 'lucide-react';

interface CampusGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CampusGuideModal: React.FC<CampusGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
      <div 
        id="campus-guide-modal"
        className="relative w-full max-w-xl bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden max-h-[85vh] flex flex-col shadow-xl transition-colors"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/50">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-slate-500 dark:text-slate-400" />
            <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">Campus Guide</h3>
          </div>
          <button
            onClick={onClose}
            id="btn-close-guide"
            type="button"
            className="p-1 rounded text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 overflow-y-auto space-y-4 text-xs">
          {/* Academic Blocks */}
          <div>
            <div className="flex items-center gap-1.5 font-semibold text-slate-800 dark:text-slate-200 mb-2">
              <Building2 className="w-3.5 h-3.5 text-slate-500" />
              <span>Academic Blocks</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                <span className="font-semibold text-slate-900 dark:text-slate-100 block">AB-1</span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">Classrooms 106, 107, 108, G07.</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                <span className="font-semibold text-slate-900 dark:text-slate-100 block">AB-2</span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">CS, EE & Labs (G-05 to G-08, 206, 207).</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                <span className="font-semibold text-slate-900 dark:text-slate-100 block">AB-3</span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">Basement (B-02, B-11, B-30) & Upper Rooms.</span>
              </div>
            </div>
          </div>

          {/* Labs */}
          <div>
            <div className="flex items-center gap-1.5 font-semibold text-slate-800 dark:text-slate-200 mb-2">
              <Monitor className="w-3.5 h-3.5 text-slate-500" />
              <span>Labs & Halls</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                <span className="font-semibold text-slate-900 dark:text-slate-100 block">CL-01 to CL-17</span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">Computer Labs across AB-1, AB-2, AB-3.</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                <span className="font-semibold text-slate-900 dark:text-slate-100 block">SEMINAR Hall</span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">Large combined sessions (e.g. Translation of Holy Quran).</span>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 flex items-start gap-2">
            <Info className="w-3.5 h-3.5 text-slate-400 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-slate-800 dark:text-slate-200">Class Timings: </span>
              Standard lectures are 1h 30m (e.g. 08:30-10:00). Practical labs are 3 hours (e.g. 11:30-14:30).
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-2.5 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 flex justify-end">
          <button
            onClick={onClose}
            type="button"
            className="px-3 py-1.5 rounded-lg bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs font-medium hover:opacity-90 transition-opacity cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
