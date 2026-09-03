import { SectionTimetable } from '../types';

export const HUMANITIES_TIMETABLES: Record<string, SectionTimetable> = {
  'bpy-1a': {
    id: 'bpy-1a',
    departmentId: 'humanities',
    departmentName: 'Department of Humanities',
    program: 'BS Psychology',
    sectionCode: '1A',
    officialTitle: 'Fall 2026 - BPY - 1A',
    offDays: ['Friday', 'Sunday'],
    schedule: {
      Monday: [
        { id: 'bpy1a-m1', courseCode: 'CSC101', courseName: 'Application of Information and Communication Technologies', startTime: '08:30', endTime: '10:30', duration: '2 hrs', room: '307 (AB-3)', instructor: 'Dr. Irfan Ullah' },
        { id: 'bpy1a-m2', courseCode: 'MTH103', courseName: 'Exploring Quantitative Skills', startTime: '11:30', endTime: '13:00', room: 'B-11 (AB-3)', instructor: 'Ms. Razia Bano' },
      ],
      Tuesday: [
        { id: 'bpy1a-t1', courseCode: 'CSC101', courseName: 'Application of Information and Communication Technologies', startTime: '08:30', endTime: '10:30', duration: '2 hrs', room: '307 (AB-3)', instructor: 'Dr. Irfan Ullah' },
        { id: 'bpy1a-t2', courseCode: 'CSC101 LAB', courseName: 'Application of ICT (LAB)', startTime: '08:30', endTime: '11:30', duration: '3 hrs', room: 'CL-2 (AB-1)', instructor: 'Dr. Ali Khaqan', isLab: true },
      ],
      Wednesday: [
        { id: 'bpy1a-w1', courseCode: 'BIO100', courseName: 'Fundamentals of Biology (LAB)', startTime: '08:30', endTime: '11:30', duration: '3 hrs', room: 'GL-2 (AB-3)', instructor: 'Dr. Rabia Naz', isLab: true },
      ],
      Thursday: [
        { id: 'bpy1a-th1', courseCode: 'BIO100', courseName: 'Fundamentals of Biology', startTime: '08:30', endTime: '10:30', duration: '2 hrs', room: '307 (AB-3)', instructor: 'Dr. Rabia Naz' },
        { id: 'bpy1a-th2', courseCode: 'MTH103', courseName: 'Exploring Quantitative Skills', startTime: '11:30', endTime: '13:00', room: '204-A (AB-3)', instructor: 'Ms. Razia Bano' },
      ],
      Friday: [],
      Saturday: [
        { id: 'bpy1a-s1', courseCode: 'HUM161', courseName: 'Understanding of Holy Quran – I', startTime: '08:30', endTime: '10:00', room: 'SEMINAR', instructor: 'Dr. Ume Farwa' },
        { id: 'bpy1a-s2', courseCode: 'HUM104', courseName: 'Functional English', startTime: '11:30', endTime: '14:30', duration: '3 hrs', room: '106 (AB-1)', instructor: 'Ms. Rahat-ul-Ain' },
      ],
      Sunday: [],
    },
    courses: [
      { code: 'CSC101', title: 'Application of Information and Communication Technologies', creditHours: '3(2,1)', instructor: 'Dr. Irfan Ullah' },
      { code: 'CSC101 LAB', title: 'Application of ICT (Lab)', creditHours: 'LAB', instructor: 'Dr. Ali Khaqan', isLab: true },
      { code: 'BIO100', title: 'Fundamentals of Biology', creditHours: '3(2,1)', instructor: 'Dr. Rabia Naz' },
      { code: 'BIO100 LAB', title: 'Fundamentals of Biology (Lab)', creditHours: 'LAB', instructor: 'Dr. Rabia Naz', isLab: true },
      { code: 'HUM104', title: 'Functional English', creditHours: '3(3,0)', instructor: 'Ms. Rahat-ul-Ain' },
      { code: 'MTH103', title: 'Exploring Quantitative Skills', creditHours: '3(3,0)', instructor: 'Ms. Razia Bano' },
      { code: 'HUM123', title: 'Fundamentals of Philosophy', creditHours: '2(2,0)', instructor: 'HYBRID (Online Classes)' },
      { code: 'HUM110 / HUM116', title: 'Islamic Studies / Ethics', creditHours: '2(2,0)', instructor: 'HYBRID (Online Classes)' },
      { code: 'HUM161', title: 'Understanding of Holy Quran – I', creditHours: '1(0,1)', instructor: 'Dr. Ume Farwa' },
    ],
  },

  'bpy-1b': {
    id: 'bpy-1b',
    departmentId: 'humanities',
    departmentName: 'Department of Humanities',
    program: 'BS Psychology',
    sectionCode: '1B',
    officialTitle: 'Fall 2026 - BPY - 1B',
    offDays: ['Wednesday', 'Sunday'],
    schedule: {
      Monday: [
        { id: 'bpy1b-m1', courseCode: 'BIO100', courseName: 'Fundamentals of Biology (LAB)', startTime: '08:30', endTime: '11:30', duration: '3 hrs', room: 'GL-2 (AB-3)', instructor: 'Dr. Aasia Nosheen', isLab: true },
      ],
      Tuesday: [
        { id: 'bpy1b-t1', courseCode: 'BIO100', courseName: 'Fundamental of Biology', startTime: '08:30', endTime: '10:30', duration: '2 hrs', room: '307 (AB-3)', instructor: 'Dr. Aasia Nosheen' },
        { id: 'bpy1b-t2', courseCode: 'MTH103', courseName: 'Exploring Quantitative Skills', startTime: '11:30', endTime: '13:00', room: 'B-11 (AB-3)', instructor: 'Ms. Razia Bano' },
      ],
      Wednesday: [],
      Thursday: [
        { id: 'bpy1b-th1', courseCode: 'CSC101', courseName: 'Application of Information and Communication Technologies', startTime: '08:30', endTime: '10:30', duration: '2 hrs', room: '307 (AB-3)', instructor: 'Mr. Khiyam Iftikhar' },
        { id: 'bpy1b-th2', courseCode: 'MTH103', courseName: 'Exploring Quantitative Skills', startTime: '11:30', endTime: '13:00', room: 'B-11 (AB-3)', instructor: 'Ms. Razia Bano' },
      ],
      Friday: [
        { id: 'bpy1b-f1', courseCode: 'CSC101', courseName: 'Application of Information and Communication Technologies', startTime: '08:30', endTime: '10:30', duration: '2 hrs', room: '307 (AB-3)', instructor: 'Mr. Khiyam Iftikhar' },
        { id: 'bpy1b-f2', courseCode: 'CSC101 LAB', courseName: 'Application of ICT (LAB)', startTime: '08:30', endTime: '10:45', duration: '3 hrs', room: 'CL-2 (AB-1)', instructor: 'Dr. Khurram Ali (CE)', isLab: true },
      ],
      Saturday: [
        { id: 'bpy1b-s1', courseCode: 'HUM161', courseName: 'Understanding of Holy Quran – I', startTime: '08:30', endTime: '10:00', room: 'SEMINAR', instructor: 'Dr. Ume Farwa' },
        { id: 'bpy1b-s2', courseCode: 'HUM104', courseName: 'Functional English', startTime: '11:30', endTime: '14:30', duration: '3 hrs', room: '106 (AB-1)', instructor: 'Ms. Rahat-ul-Ain' },
      ],
      Sunday: [],
    },
    courses: [
      { code: 'CSC101', title: 'Application of Information and Communication Technologies', creditHours: '3(2,1)', instructor: 'Mr. Khiyam Iftikhar' },
      { code: 'CSC101 LAB', title: 'Application of ICT (Lab)', creditHours: 'LAB', instructor: 'Dr. Khurram Ali (CE)', isLab: true },
      { code: 'BIO100', title: 'Fundamentals of Biology', creditHours: '3(2,1)', instructor: 'Dr. Aasia Nosheen' },
      { code: 'BIO100 LAB', title: 'Fundamentals of Biology (Lab)', creditHours: 'LAB', instructor: 'Dr. Aasia Nosheen', isLab: true },
      { code: 'HUM104', title: 'Functional English', creditHours: '3(3,0)', instructor: 'Ms. Rahat-ul-Ain' },
      { code: 'MTH103', title: 'Exploring Quantitative Skills', creditHours: '3(3,0)', instructor: 'Ms. Razia Bano' },
      { code: 'HUM123', title: 'Fundamentals of Philosophy', creditHours: '2(2,0)', instructor: 'HYBRID' },
      { code: 'HUM110 / HUM116', title: 'Islamic Studies / Ethics', creditHours: '2(2,0)', instructor: 'HYBRID' },
      { code: 'HUM161', title: 'Understanding of Holy Quran – I', creditHours: '1(0,1)', instructor: 'Dr. Ume Farwa' },
    ],
  },

  'ben-1': {
    id: 'ben-1',
    departmentId: 'humanities',
    departmentName: 'Department of Humanities',
    program: 'BS English',
    sectionCode: '1',
    officialTitle: 'Fall 2026 - BEN - 1',
    offDays: ['Wednesday', 'Sunday'],
    schedule: {
      Monday: [
        { id: 'ben1-m1', courseCode: 'CSC101 LAB', courseName: 'Application of ICT (LAB)', startTime: '08:30', endTime: '11:30', duration: '3 hrs', room: 'CL-2 (AB-1)', instructor: 'Ms. Sana Nasir', isLab: true },
      ],
      Tuesday: [
        { id: 'ben1-t1', courseCode: 'MTH103', courseName: 'Exploring Quantitative Skills', startTime: '08:30', endTime: '10:00', room: 'B-11 (AB-3)', instructor: 'Ms. Itrat Rubab' },
        { id: 'ben1-t2', courseCode: 'BIO100', courseName: 'Fundamental of Biology', startTime: '10:30', endTime: '12:30', duration: '2 hrs', room: '307 (AB-3)', instructor: 'Dr. Naseer Ali Shah' },
      ],
      Wednesday: [],
      Thursday: [
        { id: 'ben1-th1', courseCode: 'MTH103', courseName: 'Exploring Quantitative Skills', startTime: '08:30', endTime: '10:00', room: 'B-11 (AB-3)', instructor: 'Ms. Itrat Rubab' },
        { id: 'ben1-th2', courseCode: 'CSC101', courseName: 'Application of Information and Communication Technologies', startTime: '10:30', endTime: '12:30', duration: '2 hrs', room: '307 (AB-3)', instructor: 'Ms. Sana NasirCS' },
      ],
      Friday: [
        { id: 'ben1-f1', courseCode: 'BIO100', courseName: 'Fundamental of Biology (LAB)', startTime: '08:30', endTime: '11:30', duration: '3 hrs', room: 'GL-2 (AB-3)', instructor: 'Dr. Naseer Ali Shah', isLab: true },
      ],
      Saturday: [
        { id: 'ben1-s1', courseCode: 'HUM161', courseName: 'Understanding of Holy Quran – I', startTime: '08:30', endTime: '10:00', room: 'SEMINAR', instructor: 'Dr. Ume Farwa' },
        { id: 'ben1-s2', courseCode: 'HUM104', courseName: 'Functional English', startTime: '11:30', endTime: '14:30', duration: '3 hrs', room: '107 (AB-1)', instructor: 'Ms. Rahat-ul-Ain' },
      ],
      Sunday: [],
    },
    courses: [
      { code: 'CSC101', title: 'Application of Information and Communication Technologies', creditHours: '3(2,1)', instructor: 'Ms. Sana NasirCS', remarks: 'Merged BCH-1' },
      { code: 'CSC101 LAB', title: 'Application of ICT (Lab)', creditHours: 'LAB', instructor: 'Ms. Sana Nasir', isLab: true, remarks: 'Merged BCH-1' },
      { code: 'BIO100', title: 'Fundamental of Biology', creditHours: '3(2,1)', instructor: 'Dr. Naseer Ali Shah', remarks: 'Merged BCH-1' },
      { code: 'BIO100 LAB', title: 'Fundamental of Biology (Lab)', creditHours: 'LAB', instructor: 'Dr. Naseer Ali Shah', isLab: true, remarks: 'Merged BCH-1' },
      { code: 'HUM104', title: 'Functional English', creditHours: '3(3,0)', instructor: 'Ms. Rahat-ul-Ain', remarks: 'Merged BCH-1' },
      { code: 'MTH103', title: 'Exploring Quantitative Skills', creditHours: '3(3,0)', instructor: 'Ms. Itrat Rubab', remarks: 'Merged BCH-1' },
      { code: 'HUM123', title: 'Fundamentals of Philosophy', creditHours: '2(2,0)', instructor: 'HYBRID' },
      { code: 'HUM110 / HUM116', title: 'Islamic Studies / Ethics', creditHours: '2(2,0)', instructor: 'HYBRID' },
      { code: 'HUM161', title: 'Understanding of Holy Quran – I', creditHours: '1(0,1)', instructor: 'Dr. Ume Farwa' },
    ],
  },

  'bmc-1': {
    id: 'bmc-1',
    departmentId: 'humanities',
    departmentName: 'Department of Humanities',
    program: 'BS Media & Communication',
    sectionCode: '1',
    officialTitle: 'Fall 2026 - BMC - 1',
    offDays: ['Wednesday', 'Sunday'],
    schedule: {
      Monday: [
        { id: 'bmc1-m1', courseCode: 'MTH103', courseName: 'Exploring Quantitative Skills', startTime: '08:30', endTime: '10:00', room: 'B-11 (AB-3)', instructor: 'Ms. Itrat Rubab' },
        { id: 'bmc1-m2', courseCode: 'BIO100', courseName: 'Fundamental of Biology', startTime: '10:30', endTime: '12:30', duration: '2 hrs', room: '307 (AB-3)', instructor: 'Dr. Kifayat ullah' },
      ],
      Tuesday: [
        { id: 'bmc1-t1', courseCode: 'BIO100', courseName: 'Fundamental of Biology (LAB)', startTime: '08:30', endTime: '11:30', duration: '3 hrs', room: 'GL-2 (AB-3)', instructor: 'Dr. Kifayat ullah', isLab: true },
      ],
      Wednesday: [],
      Thursday: [
        { id: 'bmc1-th1', courseCode: 'CSC101', courseName: 'Application of Information and Communication Technologies', startTime: '08:30', endTime: '10:00', room: '307 (AB-3)', instructor: 'Dr. Ali Mustafa (CE)' },
        { id: 'bmc1-th2', courseCode: 'CSC101 LAB', courseName: 'Application of ICT (LAB)', startTime: '11:30', endTime: '14:30', duration: '3 hrs', room: 'CL-2 (AB-1)', instructor: 'Dr. Ali Mustafa (CE)', isLab: true },
      ],
      Friday: [
        { id: 'bmc1-f1', courseCode: 'MTH103', courseName: 'Exploring Quantitative Skills', startTime: '08:30', endTime: '10:00', room: 'B-27 (AB-3)', instructor: 'Ms. Itrat Rubab' },
        { id: 'bmc1-f2', courseCode: 'CSC101', courseName: 'Application of Information and Communication Technologies', startTime: '11:00', endTime: '13:00', duration: '2 hrs', room: '307 (AB-3)', instructor: 'Dr. Ali Mustafa (CE)' },
      ],
      Saturday: [
        { id: 'bmc1-s1', courseCode: 'HUM161', courseName: 'Understanding of Holy Quran – I', startTime: '08:30', endTime: '10:00', room: 'SEMINAR', instructor: 'Dr. Ume Farwa' },
        { id: 'bmc1-s2', courseCode: 'HUM104', courseName: 'Functional English', startTime: '11:30', endTime: '14:30', duration: '3 hrs', room: '107 (AB-1)', instructor: 'Ms. Rahat-ul-Ain' },
      ],
      Sunday: [],
    },
    courses: [
      { code: 'CSC101', title: 'Application of Information and Communication Technologies', creditHours: '3(2,1)', instructor: 'Dr. Ali Mustafa (CE)' },
      { code: 'CSC101 LAB', title: 'Application of ICT (Lab)', creditHours: 'LAB', instructor: 'Dr. Ali Mustafa (CE)', isLab: true },
      { code: 'BIO100', title: 'Fundamental of Biology', creditHours: '3(2,1)', instructor: 'Dr. Kifayat ullah' },
      { code: 'BIO100 LAB', title: 'Fundamental of Biology (Lab)', creditHours: 'LAB', instructor: 'Dr. Kifayat ullah', isLab: true },
      { code: 'HUM104', title: 'Functional English', creditHours: '3(3,0)', instructor: 'Ms. Rahat-ul-Ain' },
      { code: 'MTH103', title: 'Exploring Quantitative Skills', creditHours: '3(3,0)', instructor: 'Ms. Itrat Rubab' },
      { code: 'HUM123', title: 'Fundamentals of Philosophy', creditHours: '2(2,0)', instructor: 'HYBRID' },
      { code: 'HUM110 / HUM116', title: 'Islamic Studies / Ethics', creditHours: '2(2,0)', instructor: 'HYBRID' },
      { code: 'HUM161', title: 'Understanding of Holy Quran – I', creditHours: '1(0,1)', instructor: 'Dr. Ume Farwa' },
    ],
  },

  'bir-1': {
    id: 'bir-1',
    departmentId: 'humanities',
    departmentName: 'Department of Humanities',
    program: 'BS International Relations',
    sectionCode: '1',
    officialTitle: 'Fall 2026 - BIR - 1',
    offDays: ['Wednesday', 'Friday', 'Sunday'],
    schedule: {
      Monday: [
        { id: 'bir1-m1', courseCode: 'MTH103', courseName: 'Exploring Quantitative Skills', startTime: '10:00', endTime: '11:30', room: 'B-11 (AB-3)', instructor: 'Ms. Itrat Rubab' },
        { id: 'bir1-m2', courseCode: 'CSC101', courseName: 'Application of Information and Communication Technologies', startTime: '12:30', endTime: '14:30', duration: '2 hrs', room: '307 (AB-3)', instructor: 'Dr. Omar Ahmed (CE)' },
      ],
      Tuesday: [
        { id: 'bir1-t1', courseCode: 'MTH103', courseName: 'Exploring Quantitative Skills', startTime: '10:00', endTime: '11:30', room: 'B-11 (AB-3)', instructor: 'Ms. Itrat Rubab' },
        { id: 'bir1-t2', courseCode: 'BIO100', courseName: 'Fundamentals of Biology (LAB)', startTime: '11:30', endTime: '14:30', duration: '3 hrs', room: 'GL-1', instructor: 'Dr. Kifayat ullah', isLab: true },
      ],
      Wednesday: [],
      Thursday: [
        { id: 'bir1-th1', courseCode: 'CSC101 LAB', courseName: 'Application of ICT (LAB)', startTime: '08:30', endTime: '11:30', duration: '3 hrs', room: 'CL-2 (AB-1)', instructor: 'Dr. Omar Ahmed (CE)', isLab: true },
        { id: 'bir1-th2', courseCode: 'BIO100', courseName: 'Fundamental of Biology', startTime: '12:30', endTime: '14:30', duration: '2 hrs', room: '307 (AB-3)', instructor: 'Dr. Kifayat ullah' },
      ],
      Friday: [],
      Saturday: [
        { id: 'bir1-s1', courseCode: 'HUM161', courseName: 'Understanding of Holy Quran – I', startTime: '08:30', endTime: '10:00', room: 'SEMINAR', instructor: 'Dr. Ume Farwa' },
        { id: 'bir1-s2', courseCode: 'HUM104', courseName: 'Functional English', startTime: '11:30', endTime: '14:30', duration: '3 hrs', room: '108 (AB-1)', instructor: 'Ms. Rahat-ul-Ain' },
      ],
      Sunday: [],
    },
    courses: [
      { code: 'CSC101', title: 'Application of Information and Communication Technologies', creditHours: '3(2,1)', instructor: 'Dr. Omar Ahmed (CE)' },
      { code: 'CSC101 LAB', title: 'Application of ICT (Lab)', creditHours: 'LAB', instructor: 'Dr. Omar Ahmed (CE)', isLab: true },
      { code: 'BIO100', title: 'Fundamental of Biology', creditHours: '3(2,1)', instructor: 'Dr. Kifayat ullah' },
      { code: 'BIO100 LAB', title: 'Fundamentals of Biology (Lab)', creditHours: 'LAB', instructor: 'Dr. Kifayat ullah', isLab: true },
      { code: 'HUM104', title: 'Functional English', creditHours: '3(3,0)', instructor: 'Ms. Rahat-ul-Ain' },
      { code: 'MTH103', title: 'Exploring Quantitative Skills', creditHours: '3(3,0)', instructor: 'Ms. Itrat Rubab' },
      { code: 'HUM123', title: 'Fundamentals of Philosophy', creditHours: '2(2,0)', instructor: 'HYBRID' },
      { code: 'HUM110 / HUM116', title: 'Islamic Studies / Ethics', creditHours: '2(2,0)', instructor: 'HYBRID' },
      { code: 'HUM161', title: 'Understanding of Holy Quran – I', creditHours: '1(0,1)', instructor: 'Dr. Ume Farwa' },
    ],
  },
};
