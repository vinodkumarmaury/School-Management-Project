import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/components/Home.jsx';
import ChooseUser from '../src/components/ChooseUser.jsx';
import AdminRegister from './components/AdminRegister.jsx';
import AdminSignIn from '../src/components/AdminSignin.jsx';
import StudentSignIn from '../src/components/StudentSignIn.jsx';
import TeacherSignIn from '../src/components/TeacherSignIn.jsx';
import AdminDashboard from '../src/pages/Admin/Dashboard.jsx';
import StudentDashboard from '../src/pages/Students/Dashboard.jsx';
import TeacherDashboard from '../src/pages/Teachers/Dashboard.jsx';

import Classes from '../src/pages/Admin/Classes.jsx';
import Exam from '../src/pages/Admin/Exam.jsx';
import Attendance from '../src/pages/Admin/Attendance.jsx';
import Performance from '../src/pages/Admin/Performance.jsx';
import Teachers from '../src/pages/Admin/Teachers.jsx';
import Students from '../src/pages/Admin/Students.jsx';
import Assignments from '../src/pages/Admin/Assignments.jsx';
import Library from '../src/pages/Admin/Library.jsx';
import EventCalender from '../src/pages/Admin/EventCalender.jsx';
import SettingsProfile from '../src/pages/Admin/SettingsProfile.jsx';
import Announcement from '../src/pages/Admin/Announcement.jsx';

import StudentAssignments from '../src/pages/Students/Assignments.jsx';
import ExamSection from '../src/pages/Students/Exam.jsx';
import PerformanceSection from '../src/pages/Students/Performance.jsx';
import AttendanceSection from '../src/pages/Students/Attendance.jsx';
import LibrarySection from '../src/pages/Students/Library.jsx';
import AnnouncementSection from '../src/pages/Students/Announcement.jsx';
import ProfileSection from '../src/pages/Students/Profile.jsx';

import ClassSection from '../src/pages/Teachers/Classes.jsx';
import StudentSection from '../src/pages/Teachers/Students.jsx';
import TeacherSection from '../src/pages/Teachers/Teachers.jsx';
import CheckPerformanceSection from '../src/pages/Teachers/Performance.jsx';
import EventSection from '../src/pages/Teachers/Events.jsx';
import TeacherProfileSection from '../src/pages/Teachers/Profile.jsx';
import CheckAnnouncementSection from '../src/pages/Teachers/Announcement.jsx';
import AssignmentSection from '../src/pages/Teachers/Assignments.jsx';
import CheckAttendanceSection from '../src/pages/Teachers/Attendance.jsx';
import CheckExamSection from '../src/pages/Teachers/Exams.jsx';


const App = () => { 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/choose-user" element={<ChooseUser />} />

        {/* All the sign-in pages/routes */}
        <Route exact path="/admin-register" element={<AdminRegister />} />
        <Route exact path="/admin-signIn" element={<AdminSignIn />} />
        <Route exact path="/student-signIn" element={<StudentSignIn />} />
        <Route exact path="/teacher-signIn" element={<TeacherSignIn />} />

        {/* All the dashboard routes */}

        <Route exact path="/admin/dashboard" element={<AdminDashboard />} />
        <Route exact path="/teacher/dashboard" element={<TeacherDashboard />} />        
        <Route exact path="/student/dashboard" element={<StudentDashboard />} />

        {/* Admin section here */}

        <Route exact path="/admin/classes" element={<Classes />} />
        <Route exact path="/admin/exams" element={<Exam />} />
        <Route exact path="/admin/attendance" element={<Attendance />} />
        <Route exact path="/admin/performance" element={<Performance />} />
        <Route exact path="/admin/teachers" element={<Teachers />} />
        <Route exact path="/admin/students" element={<Students />} />
        <Route exact path="/admin/assignments" element={<Assignments />} />
        <Route exact path="/admin/library" element={<Library />} />
        <Route exact path="/admin/communication" element={<Announcement />} />
        <Route exact path="/admin/events" element={<EventCalender />} />
        <Route exact path="/admin/settings" element={<SettingsProfile />} />

        {/* Students sections here  */}

        <Route exact path="/student/assignments" element={<StudentAssignments />} />
        <Route exact path="/student/exams" element={<ExamSection />} />
        <Route exact path="/student/performance" element={<PerformanceSection />} />
        <Route exact path="/student/attendance" element={<AttendanceSection />} />
        <Route exact path="/student/library" element={<LibrarySection />} />
        <Route exact path="/student/communication" element={<AnnouncementSection/>} />
        <Route exact path="/student/settings" element={<ProfileSection />} />

        {/* Teachers sections here */}
        <Route exact path="/teacher/classes" element={<ClassSection />} />
        <Route exact path="/teacher/students" element={<StudentSection />} />
        <Route exact path="/teacher/teachers" element={<TeacherSection />} />
        <Route exact path="/teacher/assignments" element={<AssignmentSection />} />
        <Route exact path="/teacher/exams" element={<CheckExamSection />} />
        <Route exact path="/teacher/performance" element={<CheckPerformanceSection />} />
        <Route exact path="/teacher/attendance" element={<CheckAttendanceSection />} />
        <Route exact path="/teacher/communication" element={<CheckAnnouncementSection />} />
        <Route exact path="/teacher/events" element={<EventSection />} />
        <Route exact path="/teacher/settings" element={<TeacherProfileSection/>} />

      </Routes>
    </Router>
  );
};

export default App;



