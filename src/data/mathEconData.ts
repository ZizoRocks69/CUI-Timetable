import { SectionTimetable } from '../types';

export const MATH_ECON_TIMETABLES: Record<string, SectionTimetable> = {
  'bmd-1a': {
    id: 'bmd-1a',
    departmentId: 'mathematics',
    departmentName: 'Department of Mathematics',
    program: 'BS Mathematics & Data Science',
    sectionCode: '1A',
    officialTitle: 'Fall 2026 - BMD - 1A',
    offDays: ['Wednesday', 'Sunday'],
    schedule: {
      Monday: [
        { id: 'bmd1a-m1', courseCode: 'MTH104', courseName: 'Calculus and Analytical Geometry', startTime: '08:30', endTime: '10:00', room: 'G07 (AB-1)', instructor: 'Prof. Dr. Tanvir Akbar' },
        { id: 'bmd1a-m2', courseCode: 'MTH103', courseName: 'Exploring Quantitative Skill', startTime: '10:00', endTime: '11:30', room: 'G07 (AB-1)', instructor: 'Ms. Razia Bano' },
      ],
      Tuesday: [
        { id: 'bmd1a-t1', courseCode: 'MGT131', courseName: 'Financial Accounting', startTime: '08:30', endTime: '10:00', room: '107 (AB-1)', instructor: 'Mr. Ghazanfar Ali Asim' },
        { id: 'bmd1a-t2', courseCode: 'MTH104', courseName: 'Calculus and Analytical Geometry', startTime: '10:00', endTime: '11:30', room: '107 (AB-1)', instructor: 'Prof. Dr. Tanvir Akbar' },
      ],
      Wednesday: [],
      Thursday: [
        { id: 'bmd1a-th1', courseCode: 'CSC101', courseName: 'Applications of Information and Communication Technologies', startTime: '08:30', endTime: '10:30', duration: '2 hrs', room: 'G08 (AB-2)', instructor: 'Fahad Sharief' },
        { id: 'bmd1a-th2', courseCode: 'CSC101 LAB', courseName: 'Applications of ICT (LAB - Grp 1)', startTime: '11:30', endTime: '14:30', duration: '3 hrs', room: 'CL-16 (AB-3)', instructor: 'Dr. Haider Ali', isLab: true },
        { id: 'bmd1a-th3', courseCode: 'CSC101 LAB', courseName: 'Applications of ICT (LAB - Grp 2)', startTime: '14:30', endTime: '17:30', duration: '3 hrs', room: 'CL-16 (AB-3)', instructor: 'Dr. Haider Ali', isLab: true },
      ],
      Friday: [
        { id: 'bmd1a-f1', courseCode: 'MGT131', courseName: 'Financial Accounting', startTime: '08:30', endTime: '10:00', room: '205 (AB-1)', instructor: 'Mr. Ghazanfar Ali Asim' },
        { id: 'bmd1a-f2', courseCode: 'MTH103', courseName: 'Exploring Quantitative Skill', startTime: '10:00', endTime: '11:30', room: '205 (AB-1)', instructor: 'Ms. Razia Bano' },
      ],
      Saturday: [
        { id: 'bmd1a-s1', courseCode: 'HUM161', courseName: 'Understanding of the Holy Quran - I', startTime: '11:30', endTime: '13:00', room: 'SEMINAR', instructor: 'Dr Farhat Nisar' },
        { id: 'bmd1a-s2', courseCode: 'HUM104', courseName: 'Functional English', startTime: '14:30', endTime: '17:30', duration: '3 hrs', room: 'G-06 (AB-2)', instructor: 'Mr. Anmol Ahmed' },
      ],
      Sunday: [],
    },
    courses: [
      { code: 'CSC101', title: 'Applications of Information and Communication Technologies', creditHours: '3(2,1)', instructor: 'Fahad Sharief' },
      { code: 'CSC101 LAB', title: 'Applications of ICT (Lab)', creditHours: 'LAB', instructor: 'Dr. Haider Ali', isLab: true },
      { code: 'MTH104', title: 'Calculus and Analytical Geometry', creditHours: '3(3,0)', instructor: 'Prof. Dr. Tanvir Akbar' },
      { code: 'MTH103', title: 'Exploring Quantitative Skill', creditHours: '3(3,0)', instructor: 'Ms. Razia Bano' },
      { code: 'MGT131', title: 'Financial Accounting', creditHours: '3(3,0)', instructor: 'Mr. Ghazanfar Ali Asim' },
      { code: 'HUM104', title: 'Functional English', creditHours: '3(3,0)', instructor: 'Mr. Anmol Ahmed' },
      { code: 'MTH091', title: 'Pre-Calculus I', creditHours: '3(3,0)', instructor: 'CS-dept (Merged with CS dept)', remarks: 'Only for Pre-Medical Students' },
      { code: 'HUM110', title: 'Islamic Studies / Ethics', creditHours: '2(2,0)', instructor: 'HYBRID' },
      { code: 'HUM161', title: 'Understanding of the Holy Quran - I', creditHours: '1(0,1)', instructor: 'Dr Farhat Nisar (Online Classes)' },
    ],
  },

  'bmd-1b': {
    id: 'bmd-1b',
    departmentId: 'mathematics',
    departmentName: 'Department of Mathematics',
    program: 'BS Mathematics & Data Science',
    sectionCode: '1B',
    officialTitle: 'Fall 2026 - BMD - 1B',
    offDays: ['Wednesday', 'Friday', 'Sunday'],
    schedule: {
      Monday: [
        { id: 'bmd1b-m1', courseCode: 'CSC101', courseName: 'Applications of Information and Communication Technologies', startTime: '08:30', endTime: '10:30', duration: '2 hrs', room: '210 (AB-2)', instructor: 'Dr. Bilal Ijaz' },
        { id: 'bmd1b-m2', courseCode: 'CSC101 LAB', courseName: 'Applications of ICT (LAB)', startTime: '11:30', endTime: '14:30', duration: '3 hrs', room: 'CL-4', instructor: 'Dr. Adnan Iftikhar', isLab: true },
      ],
      Tuesday: [
        { id: 'bmd1b-t1', courseCode: 'MGT131', courseName: 'Financial Accounting', startTime: '08:30', endTime: '10:00', room: '206 (AB-2)', instructor: 'Mr. Ghazanfar Ali Asim' },
        { id: 'bmd1b-t2', courseCode: 'MTH103', courseName: 'Exploring Quantitative Skill', startTime: '10:00', endTime: '11:30', room: '206 (AB-2)', instructor: 'Ms. Razia Bano' },
        { id: 'bmd1b-t3', courseCode: 'MTH104', courseName: 'Calculus and Analytical Geometry', startTime: '11:30', endTime: '13:00', room: '206 (AB-2)', instructor: 'Prof. Dr. Shams ul Islam' },
      ],
      Wednesday: [],
      Thursday: [
        { id: 'bmd1b-th1', courseCode: 'MTH103', courseName: 'Exploring Quantitative Skill', startTime: '08:30', endTime: '10:00', room: 'B-02 (AB-3)', instructor: 'Ms. Razia Bano' },
        { id: 'bmd1b-th2', courseCode: 'MTH104', courseName: 'Calculus and Analytical Geometry', startTime: '10:00', endTime: '11:30', room: 'B-02 (AB-3)', instructor: 'Prof. Dr. Shams ul Islam' },
        { id: 'bmd1b-th3', courseCode: 'MGT131', courseName: 'Financial Accounting', startTime: '13:00', endTime: '14:30', room: '107 (AB-1)', instructor: 'Mr. Ghazanfar Ali Asim' },
      ],
      Friday: [],
      Saturday: [
        { id: 'bmd1b-s1', courseCode: 'HUM161', courseName: 'Understanding of the Holy Quran - I', startTime: '11:30', endTime: '13:00', room: 'SEMINAR', instructor: 'Dr Farhat Nisar' },
        { id: 'bmd1b-s2', courseCode: 'HUM104', courseName: 'Functional English', startTime: '14:30', endTime: '17:30', duration: '3 hrs', room: 'G-07 (AB-2)', instructor: 'Mr. Anmol Ahmed' },
      ],
      Sunday: [],
    },
    courses: [
      { code: 'CSC101', title: 'Applications of Information and Communication Technologies', creditHours: '3(2,1)', instructor: 'Dr. Bilal Ijaz' },
      { code: 'CSC101 LAB', title: 'Applications of ICT (Lab)', creditHours: 'LAB', instructor: 'Dr. Adnan Iftikhar', isLab: true },
      { code: 'MTH104', title: 'Calculus and Analytical Geometry', creditHours: '3(3,0)', instructor: 'Prof. Dr. Shams ul Islam' },
      { code: 'MTH103', title: 'Exploring Quantitative Skill', creditHours: '3(3,0)', instructor: 'Ms. Razia Bano' },
      { code: 'MGT131', title: 'Financial Accounting', creditHours: '3(3,0)', instructor: 'Mr. Ghazanfar Ali Asim' },
      { code: 'HUM104', title: 'Functional English', creditHours: '3(3,0)', instructor: 'Mr. Anmol Ahmed' },
      { code: 'MTH091', title: 'Pre-Calculus I', creditHours: '3(3,0)', instructor: 'CS-dept' },
      { code: 'HUM110', title: 'Islamic Studies / Ethics', creditHours: '2(2,0)', instructor: 'HYBRID' },
      { code: 'HUM161', title: 'Understanding of the Holy Quran - I', creditHours: '1(0,1)', instructor: 'Dr Farhat Nisar' },
    ],
  },

  'bed-1a': {
    id: 'bed-1a',
    departmentId: 'economics',
    departmentName: 'Department of Economics',
    program: 'BS Economics',
    sectionCode: '1A',
    officialTitle: 'Fall 2026 - BED - 1A',
    offDays: ['Saturday', 'Sunday'],
    schedule: {
      Monday: [
        { id: 'bed1a-m1', courseCode: 'MTH103', courseName: 'Exploring Quantitative Skills', startTime: '08:30', endTime: '10:00', room: 'B-03 (AB-3)', instructor: 'Ms. Fauzia Bibi' },
        { id: 'bed1a-m2', courseCode: 'ECO122', courseName: 'Macroeconomics I', startTime: '10:00', endTime: '11:30', room: 'B-03 (AB-3)', instructor: 'Dr. Samia Awais' },
        { id: 'bed1a-m3', courseCode: 'ECO113', courseName: 'Microeconomics I', startTime: '11:30', endTime: '13:00', room: 'B-03 (AB-3)', instructor: 'Dr. Nuzhat Falki' },
      ],
      Tuesday: [
        { id: 'bed1a-t1', courseCode: 'ECO122', courseName: 'Macroeconomics I', startTime: '08:30', endTime: '10:00', room: 'B-03 (AB-3)', instructor: 'Dr. Samia Awais' },
        { id: 'bed1a-t2', courseCode: 'MTH103', courseName: 'Exploring Quantitative Skills', startTime: '10:00', endTime: '11:30', room: 'B-03 (AB-3)', instructor: 'Ms. Fauzia Bibi' },
        { id: 'bed1a-t3', courseCode: 'ECO113', courseName: 'Microeconomics I', startTime: '11:30', endTime: '13:00', room: 'B-03 (AB-3)', instructor: 'Dr. Nuzhat Falki' },
      ],
      Wednesday: [
        { id: 'bed1a-w1', courseCode: 'CSC101', courseName: 'Applications of Information and Communication Technologies', startTime: '08:30', endTime: '10:30', duration: '2 hrs', room: 'B-09 (AB-3)', instructor: 'Dr. Junaid Ikram' },
      ],
      Thursday: [
        { id: 'bed1a-th1', courseCode: 'MET107', courseName: 'Principles of Geographic Information System (LAB)', startTime: '08:30', endTime: '11:30', duration: '3 hrs', room: 'CL-15 (AB-2)', instructor: 'Dr. Tauqeer Ahmed', isLab: true },
        { id: 'bed1a-th2', courseCode: 'CSC101 LAB', courseName: 'Applications of ICT (LAB)', startTime: '11:30', endTime: '14:30', duration: '3 hrs', room: 'CL-15 (AB-2)', instructor: 'Dr. Junaid Ikram', isLab: true },
      ],
      Friday: [
        { id: 'bed1a-f1', courseCode: 'MET107', courseName: 'Principles of Geographic Information System', startTime: '11:00', endTime: '13:00', duration: '2 hrs', room: '234-B (AB-3)', instructor: 'Dr. Tauqeer Ahmed' },
        { id: 'bed1a-f2', courseCode: 'HUM101', courseName: 'Fehm ul Quran- I', startTime: '11:30', endTime: '13:00', room: 'SEMINAR', instructor: 'AF-HUM' },
        { id: 'bed1a-f3', courseCode: 'HUM104', courseName: 'Functional English', startTime: '14:30', endTime: '17:30', duration: '3 hrs', room: 'G-05 (AB-2)', instructor: 'Mr. Anmol Ahmed' },
      ],
      Saturday: [],
      Sunday: [],
    },
    courses: [
      { code: 'CSC101', title: 'Applications of Information and Communication Technologies', creditHours: '3(2,1)', instructor: 'Dr. Junaid Ikram' },
      { code: 'CSC101 LAB', title: 'Applications of ICT (Lab)', creditHours: 'LAB', instructor: 'Dr. Junaid Ikram', isLab: true },
      { code: 'MET107', title: 'Principles of Geographic Information System', creditHours: '3(2,1)', instructor: 'Dr. Tauqeer Ahmed' },
      { code: 'MET107 LAB', title: 'Principles of GIS (Lab)', creditHours: 'LAB', instructor: 'Dr. Tauqeer Ahmed', isLab: true },
      { code: 'MTH103', title: 'Exploring Quantitative Skills', creditHours: '3(3,0)', instructor: 'Ms. Fauzia Bibi' },
      { code: 'ECO122', title: 'Macroeconomics I', creditHours: '3(3,0)', instructor: 'Dr. Samia Awais' },
      { code: 'ECO113', title: 'Microeconomics I', creditHours: '3(3,0)', instructor: 'Dr. Nuzhat Falki' },
      { code: 'HUM104', title: 'Functional English', creditHours: '3(3,0)', instructor: 'Mr. Anmol Ahmed' },
      { code: 'HUM112', title: 'Islamic Studies', creditHours: '2(2,0)', instructor: 'HYBRID' },
      { code: 'HUM101', title: 'Fehm ul Quran- I', creditHours: '1(0,1)', instructor: 'AF-HUM' },
    ],
  },

  'bed-1b': {
    id: 'bed-1b',
    departmentId: 'economics',
    departmentName: 'Department of Economics',
    program: 'BS Economics',
    sectionCode: '1B',
    officialTitle: 'Fall 2026 - BED - 1B',
    offDays: ['Saturday', 'Sunday'],
    schedule: {
      Monday: [
        { id: 'bed1b-m1', courseCode: 'CSC101', courseName: 'Applications of Information and Communication Technologies', startTime: '08:30', endTime: '10:30', duration: '2 hrs', room: 'G07 (AB-2)', instructor: 'Dr. Obaid ur Rehman' },
        { id: 'bed1b-m2', courseCode: 'MET107', courseName: 'Principles of Geographic Information System', startTime: '10:30', endTime: '12:30', duration: '2 hrs', room: 'G07 (AB-2)', instructor: 'Ms. Khazra Ijaz' },
      ],
      Tuesday: [
        { id: 'bed1b-t1', courseCode: 'CSC101 LAB', courseName: 'Applications of ICT (LAB - Grp 1)', startTime: '08:30', endTime: '11:30', duration: '3 hrs', room: 'CL-15 (AB-2)', instructor: 'Dr. Obaid ur Rehman', isLab: true },
        { id: 'bed1b-t2', courseCode: 'CSC101 LAB', courseName: 'Applications of ICT (LAB - Grp 2)', startTime: '11:30', endTime: '14:30', duration: '3 hrs', room: 'CL-15 (AB-2)', instructor: 'Dr. Obaid ur Rehman', isLab: true },
      ],
      Wednesday: [
        { id: 'bed1b-w1', courseCode: 'MTH103', courseName: 'Exploring Quantitative Skills', startTime: '08:30', endTime: '10:00', room: 'G07 (AB-1)', instructor: 'Ms. Fauzia Bibi' },
        { id: 'bed1b-w2', courseCode: 'ECO113', courseName: 'Microeconomics I', startTime: '10:00', endTime: '11:30', room: 'G07 (AB-1)', instructor: 'Ms. Zainab Parveen' },
        { id: 'bed1b-w3', courseCode: 'ECO122', courseName: 'Macroeconomics I', startTime: '13:00', endTime: '14:30', room: '108 (AB-1)', instructor: 'Dr. Asma Jabeen' },
      ],
      Thursday: [
        { id: 'bed1b-th1', courseCode: 'ECO122', courseName: 'Macroeconomics I', startTime: '08:30', endTime: '10:00', room: '107 (AB-1)', instructor: 'Dr. Asma Jabeen' },
        { id: 'bed1b-th2', courseCode: 'MTH103', courseName: 'Exploring Quantitative Skills', startTime: '10:00', endTime: '11:30', room: '107 (AB-1)', instructor: 'Ms. Fauzia Bibi' },
        { id: 'bed1b-th3', courseCode: 'ECO113', courseName: 'Microeconomics I', startTime: '11:30', endTime: '13:00', room: '107 (AB-1)', instructor: 'Ms. Zainab Parveen' },
      ],
      Friday: [
        { id: 'bed1b-f1', courseCode: 'MET107', courseName: 'Principles of GIS (LAB - Grp 2)', startTime: '08:30', endTime: '10:30', duration: '3 hrs', room: 'CL-4 (AB-2)', instructor: 'Ms. Khazra Ijaz', isLab: true },
        { id: 'bed1b-f2', courseCode: 'MET107', courseName: 'Principles of GIS (LAB - Grp 1)', startTime: '11:00', endTime: '13:00', duration: '3 hrs', room: 'CL-4 (AB-2)', instructor: 'Ms. Khazra Ijaz', isLab: true },
        { id: 'bed1b-f3', courseCode: 'HUM101', courseName: 'Fehm ul Quran- I', startTime: '11:30', endTime: '13:00', room: 'SEMINAR', instructor: 'AF-HUM' },
        { id: 'bed1b-f4', courseCode: 'HUM104', courseName: 'Functional English', startTime: '14:30', endTime: '17:30', duration: '3 hrs', room: 'G-05 (AB-2)', instructor: 'Mr. Anmol Ahmed' },
      ],
      Saturday: [],
      Sunday: [],
    },
    courses: [
      { code: 'CSC101', title: 'Applications of Information and Communication Technologies', creditHours: '3(2,1)', instructor: 'Dr. Obaid ur Rehman' },
      { code: 'CSC101 LAB', title: 'Applications of ICT (Lab)', creditHours: 'LAB', instructor: 'Dr. Obaid ur Rehman', isLab: true },
      { code: 'MET107', title: 'Principles of Geographic Information System', creditHours: '3(2,1)', instructor: 'Ms. Khazra Ijaz' },
      { code: 'MET107 LAB', title: 'Principles of GIS (Lab)', creditHours: 'LAB', instructor: 'Ms. Khazra Ijaz', isLab: true },
      { code: 'MTH103', title: 'Exploring Quantitative Skills', creditHours: '3(3,0)', instructor: 'Ms. Fauzia Bibi' },
      { code: 'ECO122', title: 'Macroeconomics I', creditHours: '3(3,0)', instructor: 'Dr. Asma Jabeen' },
      { code: 'ECO113', title: 'Microeconomics I', creditHours: '3(3,0)', instructor: 'Ms. Zainab Parveen' },
      { code: 'HUM104', title: 'Functional English', creditHours: '3(3,0)', instructor: 'Mr. Anmol Ahmed' },
      { code: 'HUM112', title: 'Islamic Studies', creditHours: '2(2,0)', instructor: 'HYBRID' },
      { code: 'HUM101', title: 'Fehm ul Quran- I', creditHours: '1(0,1)', instructor: 'AF-HUM' },
    ],
  },
};
