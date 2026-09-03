import { SectionTimetable } from '../types';

export const SCIENCES_TIMETABLES: Record<string, SectionTimetable> = {
  'bsi-1a': {
    id: 'bsi-1a',
    departmentId: 'biosciences',
    departmentName: 'Department of Bio Sciences',
    program: 'BS Biosciences',
    sectionCode: '1A',
    officialTitle: 'Fall 2026 - BSI - 1A',
    offDays: ['Wednesday', 'Friday', 'Sunday'],
    schedule: {
      Monday: [
        { id: 'bsi1a-m1', courseCode: 'CHM102', courseName: 'Introduction to Chemistry', startTime: '08:30', endTime: '10:30', duration: '2 hrs', room: 'B-34', instructor: 'Prof. Dr. Muhammad Saeed' },
        { id: 'bsi1a-m2', courseCode: 'MTH103', courseName: 'Exploring Quantitative Skill', startTime: '11:30', endTime: '13:00', room: 'B-35', instructor: 'Dr. Tayyaba Ehsan' },
      ],
      Tuesday: [
        { id: 'bsi1a-t1', courseCode: 'CSC101', courseName: 'Applications of Information and Communication Technologies', startTime: '08:30', endTime: '10:30', duration: '2 hrs', room: 'B-34', instructor: 'Mr. Adnan Qureshi' },
        { id: 'bsi1a-t2', courseCode: 'MTH103', courseName: 'Exploring Quantitative Skill', startTime: '11:30', endTime: '13:00', room: 'B-30', instructor: 'Dr. Tayyaba Ehsan' },
      ],
      Wednesday: [],
      Thursday: [
        { id: 'bsi1a-th1', courseCode: 'CSC101', courseName: 'Applications of ICT (LAB)', startTime: '08:30', endTime: '11:30', duration: '3 hrs', room: 'CL-16 (AB-3)', instructor: 'Mr. Adnan Iftikhar', isLab: true },
        { id: 'bsi1a-th2', courseCode: 'CHM102', courseName: 'Introduction to Chemistry (LAB)', startTime: '11:30', endTime: '14:30', duration: '3 hrs', room: 'CH-Lab-5', instructor: 'Prof. Dr. Muhammad Saeed', isLab: true },
      ],
      Friday: [],
      Saturday: [
        { id: 'bsi1a-s1', courseCode: 'HUM161', courseName: 'Understanding of the Holy Quran - I', startTime: '08:30', endTime: '10:00', room: 'SEMINAR', instructor: 'Dr Farhat Nisar' },
        { id: 'bsi1a-s2', courseCode: 'HUM104', courseName: 'Functional English', startTime: '11:30', endTime: '14:30', duration: '3 hrs', room: 'G-08 (AB-2)', instructor: 'Ms. Rahat ul Ain' },
      ],
      Sunday: [],
    },
    courses: [
      { code: 'CSC101', title: 'Applications of Information and Communication Technologies', creditHours: '3(2,1)', instructor: 'Mr. Adnan Qureshi' },
      { code: 'CSC101 LAB', title: 'Applications of ICT (Lab)', creditHours: 'LAB', instructor: 'Mr. Adnan Iftikhar', isLab: true },
      { code: 'CHM102', title: 'Introduction to Chemistry', creditHours: '3(2,1)', instructor: 'Prof. Dr. Muhammad Saeed' },
      { code: 'CHM102 LAB', title: 'Introduction to Chemistry (Lab)', creditHours: 'LAB', instructor: 'Prof. Dr. Muhammad Saeed', isLab: true },
      { code: 'MTH103', title: 'Exploring Quantitative Skill', creditHours: '3(3,0)', instructor: 'Dr. Tayyaba Ehsan' },
      { code: 'HUM104', title: 'Functional English', creditHours: '3(3,0)', instructor: 'Ms. Rahat ul Ain' },
      { code: 'HUM110', title: 'Islamic Studies / Ethics', creditHours: '2(2,0)', instructor: 'HYBRID (Online Classes)' },
      { code: 'HUM161', title: 'Understanding of the Holy Quran - I', creditHours: '1(0,1)', instructor: 'Dr Farhat Nisar (SEMINAR)' },
    ],
  },

  'bsi-1b': {
    id: 'bsi-1b',
    departmentId: 'biosciences',
    departmentName: 'Department of Bio Sciences',
    program: 'BS Biosciences',
    sectionCode: '1B',
    officialTitle: 'Fall 2026 - BSI - 1B',
    offDays: ['Wednesday', 'Friday', 'Sunday'],
    schedule: {
      Monday: [
        { id: 'bsi1b-m1', courseCode: 'CHM102', courseName: 'Introduction to Chemistry (LAB)', startTime: '08:30', endTime: '11:30', duration: '3 hrs', room: 'CH-Lab-5', instructor: 'Prof. Dr. Qaiser Fatmi', isLab: true },
        { id: 'bsi1b-m2', courseCode: 'MTH103', courseName: 'Exploring Quantitative Skill', startTime: '13:00', endTime: '14:30', room: 'B-03', instructor: 'Dr. Tayyaba Ehsan' },
      ],
      Tuesday: [
        { id: 'bsi1b-t1', courseCode: 'CSC101', courseName: 'Applications of ICT (LAB)', startTime: '08:30', endTime: '11:30', duration: '3 hrs', room: 'CL-16 (AB-3)', instructor: 'Dr. Bilal Tariq Malik', isLab: true },
        { id: 'bsi1b-t2', courseCode: 'MTH103', courseName: 'Exploring Quantitative Skill', startTime: '13:00', endTime: '14:30', room: 'B-30', instructor: 'Dr. Tayyaba Ehsan' },
      ],
      Wednesday: [],
      Thursday: [
        { id: 'bsi1b-th1', courseCode: 'CSC101', courseName: 'Applications of Information and Communication Technologies', startTime: '08:30', endTime: '10:30', duration: '2 hrs', room: 'B-34', instructor: 'Dr. Sharjeel Riaz' },
        { id: 'bsi1b-th2', courseCode: 'CHM102', courseName: 'Introduction to Chemistry', startTime: '10:30', endTime: '12:30', duration: '2 hrs', room: 'B-34', instructor: 'Prof. Dr. Qaiser Fatmi' },
      ],
      Friday: [],
      Saturday: [
        { id: 'bsi1b-s1', courseCode: 'HUM161', courseName: 'Understanding of the Holy Quran - I', startTime: '08:30', endTime: '10:00', room: 'SEMINAR', instructor: 'Dr Farhat Nisar' },
        { id: 'bsi1b-s2', courseCode: 'HUM104', courseName: 'Functional English', startTime: '11:30', endTime: '14:30', duration: '3 hrs', room: 'G-08 (AB-2)', instructor: 'Ms. Rahat ul Ain' },
      ],
      Sunday: [],
    },
    courses: [
      { code: 'CSC101', title: 'Applications of Information and Communication Technologies', creditHours: '3(2,1)', instructor: 'Dr. Sharjeel Riaz' },
      { code: 'CSC101 LAB', title: 'Applications of ICT (Lab)', creditHours: 'LAB', instructor: 'Dr. Bilal Tariq Malik', isLab: true },
      { code: 'CHM102', title: 'Introduction to Chemistry', creditHours: '3(2,1)', instructor: 'Prof. Dr. Qaiser Fatmi' },
      { code: 'CHM102 LAB', title: 'Introduction to Chemistry (Lab)', creditHours: 'LAB', instructor: 'Prof. Dr. Qaiser Fatmi', isLab: true },
      { code: 'MTH103', title: 'Exploring Quantitative Skill', creditHours: '3(3,0)', instructor: 'Dr. Tayyaba Ehsan' },
      { code: 'HUM104', title: 'Functional English', creditHours: '3(3,0)', instructor: 'Ms. Rahat ul Ain' },
      { code: 'HUM110', title: 'Islamic Studies / Ethics', creditHours: '2(2,0)', instructor: 'HYBRID' },
      { code: 'HUM161', title: 'Understanding of the Holy Quran - I', creditHours: '1(0,1)', instructor: 'Dr Farhat Nisar (SEMINAR)' },
    ],
  },

  'bso-1': {
    id: 'bso-1',
    departmentId: 'biosciences',
    departmentName: 'Department of Bio Sciences',
    program: 'BS Biosciences (BSO)',
    sectionCode: '1',
    officialTitle: 'Fall 2026 - BSO - 1',
    offDays: ['Wednesday', 'Friday', 'Sunday'],
    schedule: {
      Monday: [
        { id: 'bso1-m1', courseCode: 'MTH103', courseName: 'Exploring Quantitative Skill', startTime: '08:30', endTime: '10:00', room: 'B-30', instructor: 'Dr. Arifa Samreen (VF)' },
        { id: 'bso1-m2', courseCode: 'CSC101', courseName: 'Applications of Information and Communication Technologies', startTime: '10:30', endTime: '12:30', duration: '2 hrs', room: 'B-34', instructor: 'Dr. Qudsia Irum' },
      ],
      Tuesday: [
        { id: 'bso1-t1', courseCode: 'MTH103', courseName: 'Exploring Quantitative Skill', startTime: '08:30', endTime: '10:00', room: 'B-30', instructor: 'Dr. Arifa Samreen (VF)' },
        { id: 'bso1-t2', courseCode: 'CHM102', courseName: 'Introduction to Chemistry', startTime: '10:30', endTime: '12:30', duration: '2 hrs', room: 'B-34', instructor: 'Prof. Dr. Ali Mustijab' },
      ],
      Wednesday: [],
      Thursday: [
        { id: 'bso1-th1', courseCode: 'CHM102', courseName: 'Introduction to Chemistry (LAB)', startTime: '08:30', endTime: '11:30', duration: '3 hrs', room: 'CH-Lab-5', instructor: 'Prof. Dr. Ali Mustijab', isLab: true },
        { id: 'bso1-th2', courseCode: 'CSC101', courseName: 'Applications of ICT (LAB)', startTime: '11:30', endTime: '14:30', duration: '3 hrs', room: 'CL-12 (AB-2)', instructor: 'Dr. Qudsia Irum', isLab: true },
      ],
      Friday: [],
      Saturday: [
        { id: 'bso1-s1', courseCode: 'HUM161', courseName: 'Understanding of the Holy Quran - I', startTime: '08:30', endTime: '10:00', room: 'SEMINAR', instructor: 'Dr Farhat Nisar' },
        { id: 'bso1-s2', courseCode: 'HUM104', courseName: 'Functional English', startTime: '11:30', endTime: '14:30', duration: '3 hrs', room: 'G-06 (AB-2)', instructor: 'Ms. Rahat ul Ain' },
      ],
      Sunday: [],
    },
    courses: [
      { code: 'CSC101', title: 'Applications of Information and Communication Technologies', creditHours: '3(2,1)', instructor: 'Dr. Qudsia Irum' },
      { code: 'CSC101 LAB', title: 'Applications of ICT (Lab)', creditHours: 'LAB', instructor: 'Dr. Qudsia Irum', isLab: true },
      { code: 'CHM102', title: 'Introduction to Chemistry', creditHours: '3(2,1)', instructor: 'Prof. Dr. Ali Mustijab' },
      { code: 'CHM102 LAB', title: 'Introduction to Chemistry (Lab)', creditHours: 'LAB', instructor: 'Prof. Dr. Ali Mustijab', isLab: true },
      { code: 'MTH103', title: 'Exploring Quantitative Skill', creditHours: '3(3,0)', instructor: 'Dr. Arifa Samreen (VF)' },
      { code: 'HUM104', title: 'Functional English', creditHours: '3(3,0)', instructor: 'Ms. Rahat ul Ain' },
      { code: 'HUM110', title: 'Islamic Studies / Ethics', creditHours: '2(2,0)', instructor: 'HYBRID' },
      { code: 'HUM161', title: 'Understanding of the Holy Quran - I', creditHours: '1(0,1)', instructor: 'Dr Farhat Nisar (SEMINAR)' },
    ],
  },

  'bch-1': {
    id: 'bch-1',
    departmentId: 'chemistry',
    departmentName: 'Department of Chemistry',
    program: 'BS Chemistry',
    sectionCode: '1',
    officialTitle: 'Fall 2026 - BCH - 1',
    offDays: ['Saturday', 'Sunday'],
    schedule: {
      Monday: [
        { id: 'bch1-m1', courseCode: 'CSC101', courseName: 'Applications of Information and Communication Technologies', startTime: '08:30', endTime: '11:30', duration: '3 hrs', room: 'CL-2 (AB-1)', instructor: 'Ms. Sana Nasir' },
      ],
      Tuesday: [
        { id: 'bch1-t1', courseCode: 'MTH103', courseName: 'Exploring Quantitative Skills', startTime: '08:30', endTime: '10:00', room: 'B-11 (AB-3)', instructor: 'Ms. Itrat Rubab' },
        { id: 'bch1-t2', courseCode: 'BIO100', courseName: 'Fundamental of Biology', startTime: '10:30', endTime: '12:30', duration: '2 hrs', room: '307 (AB-3)', instructor: 'Dr. Zertashia Akram' },
        { id: 'bch1-t3', courseCode: 'CHM106', courseName: 'Principles of Biochemistry (LAB)', startTime: '14:30', endTime: '17:30', duration: '3 hrs', room: 'CH-Lab-1', instructor: 'Dr. Sidra Rehman', isLab: true },
      ],
      Wednesday: [
        { id: 'bch1-w1', courseCode: 'CHM114', courseName: 'Fundamentals of Chemistry (LAB)', startTime: '08:30', endTime: '11:30', duration: '3 hrs', room: 'CH-Lab-1', instructor: 'Rafia Masood', isLab: true },
        { id: 'bch1-w2', courseCode: 'CHM106', courseName: 'Principles of Biochemistry', startTime: '12:30', endTime: '14:30', duration: '2 hrs', room: '209 (AB-3)', instructor: 'Dr. Sidra Rehman' },
      ],
      Thursday: [
        { id: 'bch1-th1', courseCode: 'MTH103', courseName: 'Exploring Quantitative Skills', startTime: '08:30', endTime: '10:00', room: 'B-11 (AB-3)', instructor: 'Ms. Itrat Rubab' },
        { id: 'bch1-th2', courseCode: 'CSC101', courseName: 'Applications of ICT', startTime: '10:30', endTime: '12:30', duration: '2 hrs', room: '307 (AB-3)', instructor: 'Ms. Sana Nasir' },
      ],
      Friday: [
        { id: 'bch1-f1', courseCode: 'BIO100', courseName: 'Fundamental of Biology (LAB)', startTime: '08:30', endTime: '11:00', room: 'GL-1', instructor: 'Dr. Zertashia Akram', isLab: true },
        { id: 'bch1-f2', courseCode: 'HUM101', courseName: 'Fehm ul Quran- I', startTime: '08:30', endTime: '10:00', room: 'SEMINAR', instructor: 'Dr. Zainab Sadiq' },
        { id: 'bch1-f3', courseCode: 'CHM114', courseName: 'Fundamentals of Chemistry', startTime: '11:00', endTime: '13:00', duration: '2 hrs', room: 'CH-02', instructor: 'Dr. Javeria Ambreen' },
        { id: 'bch1-f4', courseCode: 'HUM104', courseName: 'Functional English', startTime: '11:30', endTime: '14:30', duration: '3 hrs', room: '107 (AB-1)', instructor: 'Ms. Rahat ul Ain' },
      ],
      Saturday: [],
      Sunday: [],
    },
    courses: [
      { code: 'CSC101', title: 'Applications of Information and Communication Technologies', creditHours: '3(2,1)', instructor: 'Ms. Sana Nasir', remarks: 'Merged BEN-1' },
      { code: 'CSC101 LAB', title: 'Applications of ICT (Lab)', creditHours: 'LAB', instructor: 'Ms. Sana Nasir', isLab: true, remarks: 'Merged BEN-1' },
      { code: 'CHM114', title: 'Fundamentals of Chemistry', creditHours: '3(2,1)', instructor: 'Dr. Javeria Ambreen' },
      { code: 'CHM114 LAB', title: 'Fundamentals of Chemistry (Lab)', creditHours: 'LAB', instructor: 'Rafia Masood', isLab: true },
      { code: 'CHM106', title: 'Principles of Biochemistry', creditHours: '3(2,1)', instructor: 'Dr. Sidra Rehman', remarks: 'Merged BCH-2' },
      { code: 'CHM106 LAB', title: 'Principles of Biochemistry (Lab)', creditHours: 'LAB', instructor: 'Dr. Sidra Rehman', isLab: true, remarks: 'Merged BCH-2' },
      { code: 'BIO100', title: 'Fundamental of Biology', creditHours: '3(2,1)', instructor: 'Dr. Zertashia Akram', remarks: 'Merged BEN-1' },
      { code: 'BIO100 LAB', title: 'Fundamental of Biology (Lab)', creditHours: 'LAB', instructor: 'Dr. Zertashia Akram', isLab: true, remarks: 'Merged BEN-1' },
      { code: 'HUM104', title: 'Functional English', creditHours: '3(3,0)', instructor: 'Ms. Rahat ul Ain', remarks: 'Merged BEN-1' },
      { code: 'MTH103', title: 'Exploring Quantitative Skills', creditHours: '3(3,0)', instructor: 'Ms. Itrat Rubab', remarks: 'Merged BEN-1' },
      { code: 'HUM101', title: 'Fehm ul Quran- I', creditHours: '1(0,1)', instructor: 'Dr. Zainab Sadiq' },
      { code: 'HUM112 / HUM116', title: 'Islamic Studies / Ethics', creditHours: '2(2,0)', instructor: 'HYBRID' },
    ],
  },

  'brg-1': {
    id: 'brg-1',
    departmentId: 'meteorology',
    departmentName: 'Department of Meteorology',
    program: 'BS Remote Sensing and GIS',
    sectionCode: '1',
    officialTitle: 'Fall 2026 - BRG - 1',
    offDays: ['Sunday'],
    schedule: {
      Monday: [
        { id: 'brg1-m1', courseCode: 'CSC101', courseName: 'Applications of Information and Communication Technologies', startTime: '08:30', endTime: '10:30', duration: '2 hrs', room: 'CL-4', instructor: 'TBD' },
        { id: 'brg1-m2', courseCode: 'CSC101 LAB', courseName: 'Applications of ICT (LAB)', startTime: '10:00', endTime: '11:30', room: 'CL-4 (AB-2)', instructor: 'TBD', isLab: true },
      ],
      Tuesday: [
        { id: 'brg1-t1', courseCode: 'MTH103', courseName: 'Exploring Quantitative Skills (Slot 1)', startTime: '08:30', endTime: '10:00', room: 'B-02 (AB-3)', instructor: 'Ms. Javria Azmat (VF)' },
        { id: 'brg1-t2', courseCode: 'MTH103', courseName: 'Exploring Quantitative Skills (Slot 2)', startTime: '10:00', endTime: '11:30', room: 'B-02 (AB-3)', instructor: 'Ms. Javria Azmat (VF)' },
      ],
      Wednesday: [
        { id: 'brg1-w1', courseCode: 'GIS101', courseName: 'Introduction to GIS', startTime: '08:30', endTime: '10:00', room: 'CL-4', instructor: 'Ms. Sunbal Siddique' },
        { id: 'brg1-w2', courseCode: 'GIS101 LAB', courseName: 'Introduction to GIS (LAB)', startTime: '10:00', endTime: '11:30', room: 'CL-4 (AB-2)', instructor: 'Ms. Sunbal Siddique', isLab: true },
      ],
      Thursday: [
        { id: 'brg1-th1', courseCode: 'CSC101', courseName: 'Applications of Information and Communication Technologies', startTime: '08:30', endTime: '10:30', duration: '2 hrs', room: '207 (AB-2)', instructor: 'TBD' },
        { id: 'brg1-th2', courseCode: 'GIS101', courseName: 'Introduction to GIS', startTime: '10:30', endTime: '12:30', duration: '2 hrs', room: '207 (AB-2)', instructor: 'Ms. Sunbal Siddique' },
      ],
      Friday: [
        { id: 'brg1-f1', courseCode: 'MTH001', courseName: 'Basic Mathematics', startTime: '10:00', endTime: '13:00', duration: '3 hrs', room: '206 (AB-2)', instructor: 'Dr. Ahsan Illahi', notes: 'Only for Pre-Medical' },
      ],
      Saturday: [
        { id: 'brg1-s1', courseCode: 'HUM104', courseName: 'Functional English', startTime: '08:30', endTime: '11:30', duration: '3 hrs', room: 'G-07 (AB-2)', instructor: 'Mr. Ali Naqi (VF)' },
        { id: 'brg1-s2', courseCode: 'HUM161', courseName: 'Understanding of the Holy Quran - I', startTime: '12:00', endTime: '14:00', room: 'Seminar', instructor: 'Dr Farhat Nisar' },
      ],
      Sunday: [],
    },
    courses: [
      { code: 'CSC101', title: 'Applications of Information and Communication Technologies', creditHours: '3(2,1)', instructor: 'TBD' },
      { code: 'CSC101 LAB', title: 'Applications of ICT (Lab)', creditHours: 'LAB', instructor: 'TBD', isLab: true },
      { code: 'GIS101', title: 'Introduction to GIS', creditHours: '3(2,1)', instructor: 'Ms. Sunbal Siddique' },
      { code: 'GIS101 LAB', title: 'Introduction to GIS (Lab)', creditHours: 'LAB', instructor: 'Ms. Sunbal Siddique', isLab: true },
      { code: 'HUM104', title: 'Functional English', creditHours: '3(3,0)', instructor: 'Mr. Ali Naqi (VF)' },
      { code: 'MTH103', title: 'Exploring Quantitative Skills', creditHours: '3(3,0)', instructor: 'Ms. Javria Azmat (VF)' },
      { code: 'MTH001', title: 'Basic Mathematics', creditHours: '0(0,0)', instructor: 'Dr. Ahsan Illahi', remarks: 'Only for Pre-Medical' },
      { code: 'HUM208', title: 'Civics and Community Engagement', creditHours: '2(2,0)', instructor: 'Hybrid (TBD)' },
      { code: 'HUM110', title: 'Islamic Studies / Ethics', creditHours: '2(2,0)', instructor: 'Hybrid (TBD)' },
      { code: 'HUM161', title: 'Understanding of the Holy Quran - I', creditHours: '1(0,1)', instructor: 'Dr Farhat Nisar' },
    ],
  },
};
