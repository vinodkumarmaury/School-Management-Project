// Attendance.jsx
import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import {
  AttendanceContainer,
  Content,
  AttendanceContent,
  AttendanceHeader,
  AttendanceList,
  AttendanceItem,
  StudentName,
  CheckboxLabel,
  Divider,
  SubmitButton,
} from "../../styles/AttendanceStyles";
import Nav from "../../components/Navbar";

const Attendance = () => {
  const [students, setStudents] = useState([]);
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/v1/students/getall");
      setStudents(response.data.students);
      initializeAttendanceData(response.data.students);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const initializeAttendanceData = (students) => {
    const initialAttendanceData = students.map((student) => ({
      studentId: student._id, // Assuming MongoDB ObjectId
      name: student.name,
      status: 'Present', // Default to 'Present'
    }));
    setAttendanceData(initialAttendanceData);
  };

  const handleStatusChange = (studentId, status) => {
    const updatedData = attendanceData.map((student) => {
      if (student.studentId === studentId) {
        return { ...student, status };
      }
      return student;
    });
    setAttendanceData(updatedData);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:4000/api/v1/attendance", {
        attendanceData: attendanceData.map(({ studentId, name, status }) => ({
          studentId,
          status,
        })),
      });
      console.log("Attendance data submitted:", response.data);
    } catch (error) {
      console.error("Error submitting attendance data:", error);
    }
  };

  return (
    <>
      <Nav />
      <AttendanceContainer>
        <Sidebar />
        <Content>
          <AttendanceContent>
            <AttendanceHeader>Attendance</AttendanceHeader>
            <AttendanceList>
              {students.map((student) => (
                <AttendanceItem key={student._id}>
                  <StudentName>{student.name}</StudentName>
                  <CheckboxLabel>
                    <input
                      type="checkbox"
                      checked={attendanceData.find((data) => data.studentId === student._id)?.status === "Present"}
                      onChange={() => handleStatusChange(student._id, "Present")}
                    />
                    Present
                  </CheckboxLabel>
                  <CheckboxLabel>
                    <input
                      type="checkbox"
                      checked={attendanceData.find((data) => data.studentId === student._id)?.status === "Absent"}
                      onChange={() => handleStatusChange(student._id, "Absent")}
                    />
                    Absent
                  </CheckboxLabel>
                  <CheckboxLabel>
                    <input
                      type="checkbox"
                      checked={attendanceData.find((data) => data.studentId === student._id)?.status === "Absent with apology"}
                      onChange={() => handleStatusChange(student._id, "Absent with apology")}
                    />
                    Absent with apology
                  </CheckboxLabel>
                </AttendanceItem>
              ))}
            </AttendanceList>
            <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
          </AttendanceContent>
        </Content>
      </AttendanceContainer>
    </>
  );
};

export default Attendance;
