import { SectionTimetable } from '../types';

export const MGMT_TIMETABLES: Record<string, SectionTimetable> = {
  'bbd-1a': {
    id: 'bbd-1a',
    departmentId: 'management-sciences',
    departmentName: 'Department of Management Sciences',
    program: 'BS Business Data Analytics',
    sectionCode: '1A',
    officialTitle: 'Fall 2026 - BBD - 1A',
    offDays: ['Saturday', 'Sunday'],
    schedule: {
      Monday: [
        { id: 'bbd1a-m1', courseCode: 'MGT171', courseName: 'Computing Technologies for Business', startTime: '08:30', endTime: '10:30', duration: '2 hrs', room: '234-A', instructor: 'Ms. Aziza Munir' },
        { id: 'bbd1a-m2', courseCode: 'MGT171 LAB', courseName: 'Computing Technologies for Business (LAB)', startTime: '11:30', endTime: '14:30', duration: '3 hrs', room: 'CL-17 (AB-3)', instructor: 'TBA', isLab: true },
      ],
      Tuesday: [
        { id: 'bbd1a-t1', courseCode: 'ECO400', courseName: 'Business Economics', startTime: '08:30', endTime: '10:00', room: '210', instructor: 'Dr. Wajeeha Manzoor' },
        { id: 'bbd1a-t2', courseCode: 'ECO400', courseName: 'Business Economics', startTime: '10:00', endTime: '11:30', room: '210', instructor: 'Dr. Wajeeha Manzoor' },
      ],
      Wednesday: [
        { id: 'bbd1a-w1', courseCode: 'MGT210', courseName: 'Fundamentals of Marketing', startTime: '08:30', endTime: '10:00', room: '204-A', instructor: 'Ms. Sarwat Kazmi' },
        { id: 'bbd1a-w2', courseCode: 'MGT101', courseName: 'Introduction to Management', startTime: '10:00', endTime: '11:30', room: '204-A', instructor: 'Dr. Ayesha Adnan' },
      ],
      Thursday: [
        { id: 'bbd1a-th1', courseCode: 'MGT101', courseName: 'Introduction to Management', startTime: '08:30', endTime: '10:00', room: '204-A', instructor: 'Dr. Ayesha Adnan' },
        { id: 'bbd1a-th2', courseCode: 'MGT210', courseName: 'Fundamentals of Marketing', startTime: '10:00', endTime: '11:30', room: '204-A', instructor: 'Ms. Sarwat Kazmi' },
        { id: 'bbd1a-th3', courseCode: 'MTH103', courseName: 'Exploring Quantitative Skills', startTime: '14:30', endTime: '17:30', duration: '3 hrs', room: '204-B (AB-3)', instructor: 'Mr. Waheed ur Rehman' },
      ],
      Friday: [
        { id: 'bbd1a-f1', courseCode: 'HUM101', courseName: 'Fehm ul Quran- I', startTime: '08:30', endTime: '10:00', room: 'SEMINAR', instructor: 'SEMINAR' },
        { id: 'bbd1a-f2', courseCode: 'HUM104', courseName: 'Functional English', startTime: '11:30', endTime: '14:30', duration: '3 hrs', room: 'G-06 (AB-2)', instructor: 'Ms. Rahat ul Ain Azim' },
      ],
      Saturday: [],
      Sunday: [],
    },
    courses: [
      { code: 'HUM104', title: 'Functional English', creditHours: '3(3,0)', instructor: 'Ms. Rahat ul Ain Azim' },
      { code: 'MGT101', title: 'Introduction to Management', creditHours: '3(3,0)', instructor: 'Dr. Ayesha Adnan' },
      { code: 'ECO400', title: 'Business Economics', creditHours: '3(3,0)', instructor: 'Dr. Wajeeha Manzoor' },
      { code: 'MGT210', title: 'Fundamentals of Marketing', creditHours: '3(3,0)', instructor: 'Ms. Sarwat Kazmi' },
      { code: 'MGT171', title: 'Computing Technologies for Business', creditHours: '3(2,1)', instructor: 'Ms. Aziza Munir' },
      { code: 'MGT171 LAB', title: 'Computing Technologies for Business (Lab)', creditHours: 'LAB', instructor: 'TBA', isLab: true },
      { code: 'MTH103', title: 'Exploring Quantitative Skills', creditHours: '3(3,0)', instructor: 'Mr. Waheed ur Rehman' },
      { code: 'HUM101', title: 'Fehm ul Quran- I', creditHours: '1(0,1)', instructor: 'SEMINAR' },
      { code: 'HUM112 / HUM116', title: 'Islamic Studies / Ethics', creditHours: '2(2,0)', instructor: 'HYBRID' },
    ],
  },

  'bbd-1b': {
    id: 'bbd-1b',
    departmentId: 'management-sciences',
    departmentName: 'Department of Management Sciences',
    program: 'BS Business Data Analytics',
    sectionCode: '1B',
    officialTitle: 'Fall 2026 - BBD - 1B',
    offDays: ['Saturday', 'Sunday'],
    schedule: {
      Monday: [
        { id: 'bbd1b-m1', courseCode: 'MGT101', courseName: 'Introduction to Management', startTime: '08:30', endTime: '10:00', room: '204-A', instructor: 'Dr. Ayesha Adnan' },
        { id: 'bbd1b-m2', courseCode: 'ECO400', courseName: 'Business Economics', startTime: '10:00', endTime: '11:30', room: '204-A', instructor: 'Dr. Maaida Hashmi' },
      ],
      Tuesday: [
        { id: 'bbd1b-t1', courseCode: 'MGT210', courseName: 'Fundamentals of Marketing', startTime: '08:30', endTime: '10:00', room: '204-A', instructor: 'Ms. Sarwat Kazmi' },
        { id: 'bbd1b-t2', courseCode: 'MGT101', courseName: 'Introduction to Management', startTime: '10:00', endTime: '11:30', room: '204-A', instructor: 'Dr. Ayesha Adnan' },
      ],
      Wednesday: [
        { id: 'bbd1b-w1', courseCode: 'ECO400', courseName: 'Business Economics', startTime: '08:30', endTime: '10:00', room: '204-B', instructor: 'Dr. Maaida Hashmi' },
        { id: 'bbd1b-w2', courseCode: 'MGT210', courseName: 'Fundamentals of Marketing', startTime: '10:00', endTime: '11:30', room: '204-B', instructor: 'Ms. Sarwat Kazmi' },
      ],
      Thursday: [
        { id: 'bbd1b-th1', courseCode: 'MGT171', courseName: 'Computing Technologies for Business', startTime: '08:30', endTime: '10:30', duration: '2 hrs', room: '234-A', instructor: 'Ms. Aziza Munir' },
        { id: 'bbd1b-th2', courseCode: 'MGT171 LAB', courseName: 'Computing Technologies for Business (LAB)', startTime: '11:30', endTime: '14:30', duration: '3 hrs', room: 'CL-17 (AB-3)', instructor: 'TBA', isLab: true },
        { id: 'bbd1b-th3', courseCode: 'MTH103', courseName: 'Exploring Quantitative Skills', startTime: '14:30', endTime: '17:30', duration: '3 hrs', room: '204-B (AB-3)', instructor: 'HYBRID' },
      ],
      Friday: [
        { id: 'bbd1b-f1', courseCode: 'HUM101', courseName: 'Fehm ul Quran- I', startTime: '08:30', endTime: '10:00', room: 'SEMINAR', instructor: 'SEMINAR' },
        { id: 'bbd1b-f2', courseCode: 'HUM104', courseName: 'Functional English', startTime: '11:30', endTime: '14:30', duration: '3 hrs', room: 'G-06 (AB-2)', instructor: 'Ms. Rahat ul Ain Azim' },
      ],
      Saturday: [],
      Sunday: [],
    },
    courses: [
      { code: 'HUM104', title: 'Functional English', creditHours: '3(3,0)', instructor: 'Ms. Rahat ul Ain Azim' },
      { code: 'MGT101', title: 'Introduction to Management', creditHours: '3(3,0)', instructor: 'Dr. Ayesha Adnan' },
      { code: 'ECO400', title: 'Business Economics', creditHours: '3(3,0)', instructor: 'Dr. Maaida Hashmi' },
      { code: 'MGT210', title: 'Fundamentals of Marketing', creditHours: '3(3,0)', instructor: 'Ms. Sarwat Kazmi' },
      { code: 'MGT171', title: 'Computing Technologies for Business', creditHours: '3(2,1)', instructor: 'Ms. Aziza Munir' },
      { code: 'MGT171 LAB', title: 'Computing Technologies for Business (Lab)', creditHours: 'LAB', instructor: 'TBA', isLab: true },
      { code: 'MTH103', title: 'Exploring Quantitative Skills', creditHours: '3(3,0)', instructor: 'HYBRID' },
      { code: 'HUM101', title: 'Fehm ul Quran- I', creditHours: '1(0,1)', instructor: 'SEMINAR' },
      { code: 'HUM112 / HUM116', title: 'Islamic Studies / Ethics', creditHours: '2(2,0)', instructor: 'HYBRID' },
    ],
  },

  'bbd-1c-r': {
    id: 'bbd-1c-r',
    departmentId: 'management-sciences',
    departmentName: 'Department of Management Sciences',
    program: 'BS Business Data Analytics',
    sectionCode: '1C - R',
    officialTitle: 'Fall 2026 - BBD - 1C - R',
    offDays: ['Wednesday', 'Saturday', 'Sunday'],
    schedule: {
      Monday: [
        { id: 'bbd1c-m1', courseCode: 'MGT210', courseName: 'Fundamentals of Marketing', startTime: '11:30', endTime: '13:00', room: '210', instructor: 'Ms. Sarwat Kazmi' },
        { id: 'bbd1c-m2', courseCode: 'ECO400', courseName: 'Business Economics', startTime: '13:00', endTime: '14:30', room: '210', instructor: 'Dr. Maida Hashmi' },
      ],
      Tuesday: [
        { id: 'bbd1c-t1', courseCode: 'MGT101', courseName: 'Introduction to Management', startTime: '11:30', endTime: '13:00', room: '204-A', instructor: 'Dr. Ayesha Adnan' },
        { id: 'bbd1c-t2', courseCode: 'MGT210', courseName: 'Fundamentals of Marketing', startTime: '13:00', endTime: '14:30', room: '204-A', instructor: 'Ms. Sarwat Kazmi' },
      ],
      Wednesday: [],
      Thursday: [
        { id: 'bbd1c-th1', courseCode: 'MGT101', courseName: 'Introduction to Management', startTime: '08:30', endTime: '10:00', room: '210', instructor: 'Dr. Ayesha Adnan' },
        { id: 'bbd1c-th2', courseCode: 'ECO400', courseName: 'Business Economics', startTime: '10:00', endTime: '11:30', room: '210', instructor: 'Dr. Maida Hashmi' },
      ],
      Friday: [
        { id: 'bbd1c-f1', courseCode: 'MGT171', courseName: 'Computing Technologies for Business', startTime: '08:30', endTime: '10:30', duration: '2 hrs', room: 'CL-17 (Class)', instructor: 'Ms. Aziza Munir' },
        { id: 'bbd1c-f2', courseCode: 'HUM101', courseName: 'Fehm ul Quran- I', startTime: '08:30', endTime: '10:00', room: 'SEMINAR', instructor: 'SEMINAR' },
        { id: 'bbd1c-f3', courseCode: 'MGT171 LAB', courseName: 'Computing Technologies for Business (LAB)', startTime: '10:30', endTime: '13:00', room: 'CL-17', instructor: 'TBA', isLab: true },
        { id: 'bbd1c-f4', courseCode: 'HUM104', courseName: 'Functional English', startTime: '11:30', endTime: '14:30', duration: '3 hrs', room: 'G-07 (AB-2)', instructor: 'Ms. Rahat ul Ain Azim' },
      ],
      Saturday: [],
      Sunday: [],
    },
    courses: [
      { code: 'HUM104', title: 'Functional English', creditHours: '3(3,0)', instructor: 'Ms. Rahat ul Ain Azim' },
      { code: 'MGT101', title: 'Introduction to Management', creditHours: '3(3,0)', instructor: 'Dr. Ayesha Adnan' },
      { code: 'ECO400', title: 'Business Economics', creditHours: '3(3,0)', instructor: 'Dr. Maida Hashmi' },
      { code: 'MGT210', title: 'Fundamentals of Marketing', creditHours: '3(3,0)', instructor: 'Ms. Sarwat Kazmi' },
      { code: 'MGT171', title: 'Computing Technologies for Business', creditHours: '3(2,1)', instructor: 'Ms. Aziza Munir' },
      { code: 'MGT171 LAB', title: 'Computing Technologies for Business (Lab)', creditHours: 'LAB', instructor: 'TBA', isLab: true },
      { code: 'HUM101', title: 'Fehm ul Quran- I', creditHours: '1(0,1)', instructor: 'SEMINAR' },
      { code: 'HUM112 / HUM116', title: 'Islamic Studies / Ethics', creditHours: '2(2,0)', instructor: 'HYBRID' },
    ],
  },

  'baf-1a': {
    id: 'baf-1a',
    departmentId: 'management-sciences',
    departmentName: 'Department of Management Sciences',
    program: 'BS Accounting and Finance',
    sectionCode: '1A',
    officialTitle: 'Fall 2026 - BAF - 1A',
    offDays: ['Saturday', 'Sunday'],
    schedule: {
      Monday: [
        { id: 'baf1a-m1', courseCode: 'CSC101', courseName: 'Applications of Information and Communication Technologies', startTime: '08:30', endTime: '10:30', duration: '2 hrs', room: '234-B', instructor: 'Prof. Dr. Tariq Bashir' },
        { id: 'baf1a-m2', courseCode: 'CSC101 LAB', courseName: 'Applications of ICT (LAB)', startTime: '11:30', endTime: '14:30', duration: '3 hrs', room: 'CL-09 (AB-2)', instructor: 'Mr. Aziz Ul Haq', isLab: true },
      ],
      Tuesday: [
        { id: 'baf1a-t1', courseCode: 'HUM100', courseName: 'English Comprehension and Composition', startTime: '08:30', endTime: '10:00', room: '204-B', instructor: 'Ms. Mehvish Mushtaq' },
        { id: 'baf1a-t2', courseCode: 'MGT132', courseName: 'Principles of Accounting (Slot 1)', startTime: '10:00', endTime: '11:30', room: '204-B', instructor: 'Ms. Sadia Arif' },
        { id: 'baf1a-t3', courseCode: 'MGT132', courseName: 'Principles of Accounting (Slot 2)', startTime: '11:30', endTime: '13:00', room: '204-B', instructor: 'Ms. Sadia Arif' },
      ],
      Wednesday: [
        { id: 'baf1a-w1', courseCode: 'MGT102', courseName: 'Fundamentals of Management', startTime: '08:30', endTime: '10:00', room: '211', instructor: 'Ms. Arooj Khan' },
        { id: 'baf1a-w2', courseCode: 'MTH103', courseName: 'Exploring Quantitative Skills (Slot 1)', startTime: '10:00', endTime: '11:30', room: '211', instructor: 'Mr. Muhammad Irfan' },
        { id: 'baf1a-w3', courseCode: 'MTH103', courseName: 'Exploring Quantitative Skills (Slot 2)', startTime: '11:30', endTime: '13:00', room: '211', instructor: 'Mr. Muhammad Irfan' },
      ],
      Thursday: [
        { id: 'baf1a-th1', courseCode: 'HUM100', courseName: 'English Comprehension and Composition', startTime: '08:30', endTime: '10:00', room: '211', instructor: 'Ms. Mehvish Mushtaq' },
        { id: 'baf1a-th2', courseCode: 'MGT102', courseName: 'Fundamentals of Management', startTime: '10:00', endTime: '11:30', room: '211', instructor: 'Ms. Arooj Khan' },
      ],
      Friday: [
        { id: 'baf1a-f1', courseCode: 'HUM161', courseName: 'Fehm ul Quran- I', startTime: '08:30', endTime: '10:00', room: 'SEMINAR', instructor: 'SEMINAR' },
      ],
      Saturday: [],
      Sunday: [],
    },
    courses: [
      { code: 'CSC101', title: 'Applications of Information and Communication Technologies', creditHours: '3(2,1)', instructor: 'Prof. Dr. Tariq Bashir' },
      { code: 'CSC101 LAB', title: 'Applications of ICT (Lab)', creditHours: 'LAB', instructor: 'Mr. Aziz Ul Haq', isLab: true },
      { code: 'MGT102', title: 'Fundamentals of Management', creditHours: '3(3,0)', instructor: 'Ms. Arooj Khan' },
      { code: 'MTH103', title: 'Exploring Quantitative Skills', creditHours: '3(3,0)', instructor: 'Mr. Muhammad Irfan' },
      { code: 'HUM100', title: 'English Comprehension and Composition', creditHours: '3(3,0)', instructor: 'Ms. Mehvish Mushtaq' },
      { code: 'MGT132', title: 'Principles of Accounting', creditHours: '3(3,0)', instructor: 'Ms. Sadia Arif' },
      { code: 'HUM161', title: 'Fehm ul Quran- I', creditHours: '1(0,1)', instructor: 'SEMINAR' },
      { code: 'HUM110 / HUM116', title: 'Islamic Studies / Ethics', creditHours: '2(2,0)', instructor: 'HYBRID (Online Classes)' },
    ],
  },

  'baf-1b': {
    id: 'baf-1b',
    departmentId: 'management-sciences',
    departmentName: 'Department of Management Sciences',
    program: 'BS Accounting and Finance',
    sectionCode: '1B',
    officialTitle: 'Fall 2026 - BAF - 1B',
    offDays: ['Saturday', 'Sunday'],
    schedule: {
      Monday: [
        { id: 'baf1b-m1', courseCode: 'MTH103', courseName: 'Exploring Quantitative Skills', startTime: '08:30', endTime: '10:00', room: '211', instructor: 'Mr. Muhammad Irfan' },
        { id: 'baf1b-m2', courseCode: 'MGT102', courseName: 'Fundamentals of Management', startTime: '10:00', endTime: '11:30', room: '211', instructor: 'Ms. Arooj Khan' },
        { id: 'baf1b-m3', courseCode: 'MGT132', courseName: 'Principles of Accounting', startTime: '11:30', endTime: '13:00', room: '211', instructor: 'Ms. Sadia Arif' },
      ],
      Tuesday: [
        { id: 'baf1b-t1', courseCode: 'MGT102', courseName: 'Fundamentals of Management', startTime: '08:30', endTime: '10:00', room: '211', instructor: 'Ms. Arooj Khan' },
        { id: 'baf1b-t2', courseCode: 'HUM100', courseName: 'English Comprehension and Composition', startTime: '10:00', endTime: '11:30', room: '211', instructor: 'Ms. Mehvish Mushtaq' },
        { id: 'baf1b-t3', courseCode: 'MTH103', courseName: 'Exploring Quantitative Skills', startTime: '13:00', endTime: '14:30', room: '204-B', instructor: 'Mr. Muhammad Irfan' },
      ],
      Wednesday: [
        { id: 'baf1b-w1', courseCode: 'CSC101', courseName: 'Applications of Information and Communication Technologies', startTime: '08:30', endTime: '10:30', duration: '2 hrs', room: '234-B', instructor: 'Ms. Riffat Shaista' },
        { id: 'baf1b-w2', courseCode: 'CSC101 LAB', courseName: 'Applications of ICT (LAB)', startTime: '11:30', endTime: '14:30', duration: '3 hrs', room: 'CL-15 (AB-2)', instructor: 'Dr. Kamran Hafeez', isLab: true },
      ],
      Thursday: [
        { id: 'baf1b-th1', courseCode: 'MGT132', courseName: 'Principles of Accounting', startTime: '08:30', endTime: '10:00', room: '204-B', instructor: 'Ms. Sadia Arif' },
        { id: 'baf1b-th2', courseCode: 'HUM100', courseName: 'English Comprehension and Composition', startTime: '10:00', endTime: '11:30', room: '204-B', instructor: 'Ms. Mehvish Mushtaq' },
      ],
      Friday: [
        { id: 'baf1b-f1', courseCode: 'HUM161', courseName: 'Fehm ul Quran- I', startTime: '08:30', endTime: '10:00', room: 'SEMINAR', instructor: 'SEMINAR' },
      ],
      Saturday: [],
      Sunday: [],
    },
    courses: [
      { code: 'CSC101', title: 'Applications of Information and Communication Technologies', creditHours: '3(2,1)', instructor: 'Ms. Riffat Shaista' },
      { code: 'CSC101 LAB', title: 'Applications of ICT (Lab)', creditHours: 'LAB', instructor: 'Dr. Kamran Hafeez', isLab: true },
      { code: 'MGT102', title: 'Fundamentals of Management', creditHours: '3(3,0)', instructor: 'Ms. Arooj Khan' },
      { code: 'MTH103', title: 'Exploring Quantitative Skills', creditHours: '3(3,0)', instructor: 'Mr. Muhammad Irfan' },
      { code: 'HUM100', title: 'English Comprehension and Composition', creditHours: '3(3,0)', instructor: 'Ms. Mehvish Mushtaq' },
      { code: 'MGT132', title: 'Principles of Accounting', creditHours: '3(3,0)', instructor: 'Ms. Sadia Arif' },
      { code: 'HUM161', title: 'Fehm ul Quran- I', creditHours: '1(0,1)', instructor: 'SEMINAR' },
      { code: 'HUM110 / HUM116', title: 'Islamic Studies / Ethics', creditHours: '2(2,0)', instructor: 'HYBRID' },
    ],
  },

  'baf-1c-r': {
    id: 'baf-1c-r',
    departmentId: 'management-sciences',
    departmentName: 'Department of Management Sciences',
    program: 'BS Accounting and Finance',
    sectionCode: '1C - R',
    officialTitle: 'Fall 2026 - BAF - 1C - R',
    offDays: ['Saturday', 'Sunday'],
    schedule: {
      Monday: [
        { id: 'baf1c-m1', courseCode: 'MTH103', courseName: 'Exploring Quantitative Skills (Slot 1)', startTime: '08:30', endTime: '10:00', room: '230', instructor: 'Mr. Muhammad Irfan' },
        { id: 'baf1c-m2', courseCode: 'MTH103', courseName: 'Exploring Quantitative Skills (Slot 2)', startTime: '10:00', endTime: '11:30', room: '230', instructor: 'Mr. Muhammad Irfan' },
      ],
      Tuesday: [
        { id: 'baf1c-t1', courseCode: 'MGT102', courseName: 'Fundamentals of Management', startTime: '11:30', endTime: '13:00', room: '210', instructor: 'Ms. Uzma Naeem' },
        { id: 'baf1c-t2', courseCode: 'HUM100', courseName: 'English Comprehension and Composition', startTime: '13:00', endTime: '14:30', room: '210', instructor: 'Ms. Sobia Yaqub' },
      ],
      Wednesday: [
        { id: 'baf1c-w1', courseCode: 'MGT102', courseName: 'Fundamentals of Management', startTime: '11:30', endTime: '13:00', room: '204-B', instructor: 'Ms. Uzma Naeem' },
        { id: 'baf1c-w2', courseCode: 'HUM100', courseName: 'English Comprehension and Composition', startTime: '13:00', endTime: '14:30', room: '204-B', instructor: 'Ms. Sobia Yaqub' },
      ],
      Thursday: [
        { id: 'baf1c-th1', courseCode: 'MGT132', courseName: 'Principles of Accounting (Slot 1)', startTime: '08:30', endTime: '10:00', room: '230', instructor: 'Ms. Iqra Sajid' },
        { id: 'baf1c-th2', courseCode: 'MGT132', courseName: 'Principles of Accounting (Slot 2)', startTime: '10:00', endTime: '11:30', room: '230', instructor: 'Ms. Iqra Sajid' },
      ],
      Friday: [
        { id: 'baf1c-f1', courseCode: 'CSC101', courseName: 'Applications of Information and Communication Technologies', startTime: '08:30', endTime: '10:30', duration: '2 hrs', room: 'CL-09 (Class)', instructor: 'Ms. Shafia Hussain (CE)' },
        { id: 'baf1c-f2', courseCode: 'CSC101 LAB', courseName: 'Applications of ICT (LAB)', startTime: '10:30', endTime: '13:00', room: 'CL-09 (AB-2)', instructor: 'Ms. Shafia Hussain (CE)', isLab: true },
      ],
      Saturday: [],
      Sunday: [],
    },
    courses: [
      { code: 'CSC101', title: 'Applications of Information and Communication Technologies', creditHours: '3(2,1)', instructor: 'Ms. Shafia Hussain (CE)' },
      { code: 'CSC101 LAB', title: 'Applications of ICT (Lab)', creditHours: 'LAB', instructor: 'Ms. Shafia Hussain (CE)', isLab: true },
      { code: 'MGT102', title: 'Fundamentals of Management', creditHours: '3(3,0)', instructor: 'Ms. Uzma Naeem' },
      { code: 'MTH103', title: 'Exploring Quantitative Skills', creditHours: '3(3,0)', instructor: 'Mr. Muhammad Irfan' },
      { code: 'HUM100', title: 'English Comprehension and Composition', creditHours: '3(3,0)', instructor: 'Ms. Sobia Yaqub', remarks: 'Merged BBA-1C' },
      { code: 'MGT132', title: 'Principles of Accounting', creditHours: '3(3,0)', instructor: 'Ms. Iqra Sajid' },
      { code: 'HUM161', title: 'Fehm ul Quran- I', creditHours: '1(0,1)', instructor: 'SEMINAR' },
      { code: 'HUM110 / HUM116', title: 'Islamic Studies / Ethics', creditHours: '2(2,0)', instructor: 'HYBRID' },
    ],
  },

  'bba-1a': {
    id: 'bba-1a',
    departmentId: 'management-sciences',
    departmentName: 'Department of Management Sciences',
    program: 'Bachelor of Business Administration',
    sectionCode: '1A',
    officialTitle: 'Fall 2026 - BBA - 1A',
    offDays: ['Saturday', 'Sunday'],
    schedule: {
      Monday: [
        { id: 'bba1a-m1', courseCode: 'MGT132', courseName: 'Principles of Accounting', startTime: '08:30', endTime: '10:00', room: '210', instructor: 'Ms. Anam Sultana Ali' },
        { id: 'bba1a-m2', courseCode: 'HUM100', courseName: 'English Comprehension and Composition', startTime: '10:00', endTime: '11:30', room: '210', instructor: 'Ms. Mehvish Mushtaq' },
        { id: 'bba1a-m3', courseCode: 'MTH103', courseName: 'Exploring Quantitative Skills', startTime: '13:00', endTime: '14:30', room: '211', instructor: 'Mr. Waheed ur Rehman' },
      ],
      Tuesday: [
        { id: 'bba1a-t1', courseCode: 'CSC101', courseName: 'Applications of Information and Communication Technologies', startTime: '08:30', endTime: '10:30', duration: '2 hrs', room: '234-B', instructor: 'Dr. Obaid ur Rehman' },
        { id: 'bba1a-t2', courseCode: 'CSC101 LAB', courseName: 'Applications of ICT (LAB)', startTime: '11:30', endTime: '14:30', duration: '3 hrs', room: 'CL-09 (AB-2)', instructor: 'Dr. Sharjeel Riaz', isLab: true },
      ],
      Wednesday: [
        { id: 'bba1a-w1', courseCode: 'MTH103', courseName: 'Exploring Quantitative Skills', startTime: '08:30', endTime: '10:00', room: '210', instructor: 'Mr. Waheed ur Rehman' },
        { id: 'bba1a-w2', courseCode: 'HUM100', courseName: 'English Comprehension and Composition', startTime: '10:00', endTime: '11:30', room: '210', instructor: 'Ms. Mehvish Mushtaq' },
        { id: 'bba1a-w3', courseCode: 'MGT102', courseName: 'Fundamentals of Management', startTime: '13:00', endTime: '14:30', room: '211', instructor: 'Dr. Shehla Zaman' },
      ],
      Thursday: [
        { id: 'bba1a-th1', courseCode: 'MGT132', courseName: 'Principles of Accounting', startTime: '11:30', endTime: '13:00', room: '204-A', instructor: 'Ms. Anam Sultana Ali' },
        { id: 'bba1a-th2', courseCode: 'MGT102', courseName: 'Fundamentals of Management', startTime: '13:00', endTime: '14:30', room: '204-A', instructor: 'Dr. Shehla Zaman' },
      ],
      Friday: [
        { id: 'bba1a-f1', courseCode: 'HUM161', courseName: 'Fehm ul Quran- I', startTime: '08:30', endTime: '10:00', room: 'SEMINAR', instructor: 'SEMINAR' },
      ],
      Saturday: [],
      Sunday: [],
    },
    courses: [
      { code: 'CSC101', title: 'Applications of Information and Communication Technologies', creditHours: '3(2,1)', instructor: 'Dr. Obaid ur Rehman' },
      { code: 'CSC101 LAB', title: 'Applications of ICT (Lab)', creditHours: 'LAB', instructor: 'Dr. Sharjeel Riaz', isLab: true },
      { code: 'MGT102', title: 'Fundamentals of Management', creditHours: '3(3,0)', instructor: 'Dr. Shehla Zaman' },
      { code: 'MGT132', title: 'Principles of Accounting', creditHours: '3(3,0)', instructor: 'Ms. Anam Sultana Ali' },
      { code: 'MTH103', title: 'Exploring Quantitative Skills', creditHours: '3(3,0)', instructor: 'Mr. Waheed ur Rehman' },
      { code: 'HUM100', title: 'English Comprehension and Composition', creditHours: '3(3,0)', instructor: 'Ms. Mehvish Mushtaq' },
      { code: 'HUM161', title: 'Fehm ul Quran- I', creditHours: '1(0,1)', instructor: 'SEMINAR' },
      { code: 'HUM110 / HUM116', title: 'Islamic Studies / Ethics', creditHours: '2(2,0)', instructor: 'HYBRID' },
    ],
  },

  'bba-1b': {
    id: 'bba-1b',
    departmentId: 'management-sciences',
    departmentName: 'Department of Management Sciences',
    program: 'Bachelor of Business Administration',
    sectionCode: '1B',
    officialTitle: 'Fall 2026 - BBA - 1B',
    offDays: ['Saturday', 'Sunday'],
    schedule: {
      Monday: [
        { id: 'bba1b-m1', courseCode: 'HUM100', courseName: 'English Comprehension and Composition', startTime: '08:30', endTime: '10:00', room: '204-B', instructor: 'Ms. Mehvish Mushtaq' },
        { id: 'bba1b-m2', courseCode: 'MGT102', courseName: 'Fundamentals of Management', startTime: '10:00', endTime: '11:30', room: '204-B', instructor: 'Dr. Shehla Zaman' },
      ],
      Tuesday: [
        { id: 'bba1b-t1', courseCode: 'MTH103', courseName: 'Exploring Quantitative Skills', startTime: '08:30', endTime: '10:00', room: 'CH-1 (Chemistry Dept.)', instructor: 'Mr. Noman Riaz' },
        { id: 'bba1b-t2', courseCode: 'MGT132', courseName: 'Principles of Accounting', startTime: '10:00', endTime: '11:30', room: 'CH-1', instructor: 'Ms. Anam Sultana Ali' },
        { id: 'bba1b-t3', courseCode: 'MGT102', courseName: 'Fundamentals of Management', startTime: '11:30', endTime: '13:00', room: 'CH-1', instructor: 'Dr. Shehla Zaman' },
      ],
      Wednesday: [
        { id: 'bba1b-w1', courseCode: 'HUM100', courseName: 'English Comprehension and Composition', startTime: '08:30', endTime: '10:00', room: 'CH-2 (Chemistry Dept.)', instructor: 'Ms. Mehvish Mushtaq' },
        { id: 'bba1b-w2', courseCode: 'MTH103', courseName: 'Exploring Quantitative Skills', startTime: '10:00', endTime: '11:30', room: 'CH-2', instructor: 'Mr. Noman Riaz' },
        { id: 'bba1b-w3', courseCode: 'MGT132', courseName: 'Principles of Accounting', startTime: '11:30', endTime: '13:00', room: 'CH-2', instructor: 'Ms. Anam Sultana Ali' },
      ],
      Thursday: [
        { id: 'bba1b-th1', courseCode: 'CSC101', courseName: 'Applications of Information and Communication Technologies', startTime: '08:30', endTime: '10:30', duration: '2 hrs', room: '234-B', instructor: 'Mr. Saad Zahid' },
        { id: 'bba1b-th2', courseCode: 'CSC101 LAB', courseName: 'Applications of ICT (LAB)', startTime: '11:30', endTime: '14:30', duration: '3 hrs', room: 'CL-09 (AB-2)', instructor: 'Mr. Aziz Ul Haq', isLab: true },
      ],
      Friday: [
        { id: 'bba1b-f1', courseCode: 'HUM161', courseName: 'Fehm ul Quran- I', startTime: '08:30', endTime: '10:00', room: 'SEMINAR', instructor: 'SEMINAR' },
      ],
      Saturday: [],
      Sunday: [],
    },
    courses: [
      { code: 'CSC101', title: 'Applications of Information and Communication Technologies', creditHours: '3(2,1)', instructor: 'Mr. Saad Zahid' },
      { code: 'CSC101 LAB', title: 'Applications of ICT (Lab)', creditHours: 'LAB', instructor: 'Mr. Aziz Ul Haq', isLab: true },
      { code: 'MGT102', title: 'Fundamentals of Management', creditHours: '3(3,0)', instructor: 'Dr. Shehla Zaman' },
      { code: 'MGT132', title: 'Principles of Accounting', creditHours: '3(3,0)', instructor: 'Ms. Anam Sultana Ali' },
      { code: 'MTH103', title: 'Exploring Quantitative Skills', creditHours: '3(3,0)', instructor: 'Mr. Noman Riaz' },
      { code: 'HUM100', title: 'English Comprehension and Composition', creditHours: '3(3,0)', instructor: 'Ms. Mehvish Mushtaq' },
      { code: 'HUM161', title: 'Fehm ul Quran- I', creditHours: '1(0,1)', instructor: 'SEMINAR' },
      { code: 'HUM110 / HUM116', title: 'Islamic Studies / Ethics', creditHours: '2(2,0)', instructor: 'HYBRID' },
    ],
  },

  'bba-1c-r': {
    id: 'bba-1c-r',
    departmentId: 'management-sciences',
    departmentName: 'Department of Management Sciences',
    program: 'Bachelor of Business Administration',
    sectionCode: '1C - R',
    officialTitle: 'Fall 2026 - BBA - 1C - R',
    offDays: ['Saturday', 'Sunday'],
    schedule: {
      Monday: [
        { id: 'bba1c-m1', courseCode: 'CSC101 LAB', courseName: 'Applications of ICT (LAB)', startTime: '08:30', endTime: '11:30', duration: '3 hrs', room: 'CL-09 (AB-2)', instructor: 'Mr. Saad Zahid', isLab: true },
        { id: 'bba1c-m2', courseCode: 'CSC101', courseName: 'Applications of Information and Communication Technologies', startTime: '12:30', endTime: '14:30', duration: '2 hrs', room: '234-A', instructor: 'Mr. Saad Zahid' },
      ],
      Tuesday: [
        { id: 'bba1c-t1', courseCode: 'MGT132', courseName: 'Principles of Accounting (Slot 1)', startTime: '08:30', endTime: '10:00', room: '212', instructor: 'VF - Dr. Muhammad Tahir' },
        { id: 'bba1c-t2', courseCode: 'MGT132', courseName: 'Principles of Accounting (Slot 2)', startTime: '10:00', endTime: '11:30', room: '212', instructor: 'VF - Dr. Muhammad Tahir' },
      ],
      Wednesday: [
        { id: 'bba1c-w1', courseCode: 'MGT102', courseName: 'Fundamentals of Management', startTime: '08:30', endTime: '10:00', room: '234-A', instructor: 'Dr. Shehla Zaman' },
        { id: 'bba1c-w2', courseCode: 'HUM100', courseName: 'English Comprehension and Composition', startTime: '10:00', endTime: '11:30', room: '234-A', instructor: 'Ms. Sobia Yaqub' },
        { id: 'bba1c-w3', courseCode: 'MTH103', courseName: 'Exploring Quantitative Skills', startTime: '13:00', endTime: '14:30', room: 'B-27', instructor: 'Mr. Waheed ur Rehman' },
      ],
      Thursday: [
        { id: 'bba1c-th1', courseCode: 'MTH103', courseName: 'Exploring Quantitative Skills', startTime: '11:30', endTime: '13:00', room: '211', instructor: 'Mr. Waheed ur Rehman' },
        { id: 'bba1c-th2', courseCode: 'MGT102', courseName: 'Fundamentals of Management', startTime: '13:00', endTime: '14:30', room: '211', instructor: 'Dr. Shehla Zaman' },
      ],
      Friday: [
        { id: 'bba1c-f1', courseCode: 'HUM161', courseName: 'Fehm ul Quran- I', startTime: '08:30', endTime: '10:00', room: 'SEMINAR', instructor: 'SEMINAR' },
        { id: 'bba1c-f2', courseCode: 'HUM100', courseName: 'English Comprehension and Composition', startTime: '11:30', endTime: '13:00', room: '210', instructor: 'Ms. Sobia Yaqub' },
      ],
      Saturday: [],
      Sunday: [],
    },
    courses: [
      { code: 'CSC101', title: 'Applications of Information and Communication Technologies', creditHours: '3(2,1)', instructor: 'Mr. Saad Zahid' },
      { code: 'CSC101 LAB', title: 'Applications of ICT (Lab)', creditHours: 'LAB', instructor: 'Mr. Saad Zahid', isLab: true },
      { code: 'MGT102', title: 'Fundamentals of Management', creditHours: '3(3,0)', instructor: 'Dr. Shehla Zaman' },
      { code: 'MGT132', title: 'Principles of Accounting', creditHours: '3(3,0)', instructor: 'VF - Dr. Muhammad Tahir' },
      { code: 'MTH103', title: 'Exploring Quantitative Skills', creditHours: '3(3,0)', instructor: 'Mr. Waheed ur Rehman' },
      { code: 'HUM100', title: 'English Comprehension and Composition', creditHours: '3(3,0)', instructor: 'Ms. Sobia Yaqub', remarks: 'Merged BAF-1C' },
      { code: 'HUM161', title: 'Fehm ul Quran- I', creditHours: '1(0,1)', instructor: 'SEMINAR' },
      { code: 'HUM110 / HUM116', title: 'Islamic Studies / Ethics', creditHours: '2(2,0)', instructor: 'HYBRID' },
    ],
  },
};
