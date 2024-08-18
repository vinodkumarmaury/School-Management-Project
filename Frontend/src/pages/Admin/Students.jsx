import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import {
  StudentsContainer,
  Content,
  StudentsContent,
  StudentsHeader,
  StudentList,
  StudentItem,
  AddStudentForm,
  AddStudentInput,
  AddStudentButton,
} from "../../styles/StudentsStyles";
import Nav from "../../components/Navbar";

const Students = () => {
  const [newStudent, setNewStudent] = useState({
    name: "",
    registrationNumber: "",
    grade: "",
    email:"",
    password:"",
  });
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/students/getall"
      );
      setStudents(response.data.students);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const handleAddStudent = async (e) => {
    e.preventDefault();
    try {
      if (
        newStudent.email.trim() === "" ||
        newStudent.password.trim() === "" ||
        newStudent.name.trim() === "" ||
        newStudent.registrationNumber.trim() === "" ||
        newStudent.grade.trim() === ""
      ) {
        throw new Error("Please fill all fields!");
      }
      const response = await axios.post(
        "http://localhost:4000/api/v1/students",
        newStudent
      );
      setStudents([...students, response.data.student]);
      setNewStudent({ email:"",password:"", name: "", registrationNumber: "", grade: "" });
    } catch (error) {
      console.error("Error adding student:", error.message);
    }
  };

  return (
    <>
      <Nav />
      <StudentsContainer>
        <Sidebar />
        <Content>
          <StudentsContent>
            <StudentsHeader>Students</StudentsHeader>
            <AddStudentForm onSubmit={handleAddStudent}>
            <AddStudentInput
                type="email"
                placeholder="Enter student email"
                value={newStudent.email}
                onChange={(e) =>
                  setNewStudent({ ...newStudent, email: e.target.value })
                }
              />
              <AddStudentInput
                type="text"
                placeholder="Enter student password"
                value={newStudent.password}
                onChange={(e) =>
                  setNewStudent({ ...newStudent, password: e.target.value })
                }
              />
              <AddStudentInput
                type="text"
                placeholder="Enter student name"
                value={newStudent.name}
                onChange={(e) =>
                  setNewStudent({ ...newStudent, name: e.target.value })
                }
              />
              <AddStudentInput
                type="text"
                placeholder="Enter registration number"
                value={newStudent.registrationNumber}
                onChange={(e) =>
                  setNewStudent({
                    ...newStudent,
                    registrationNumber: e.target.value,
                  })
                }
              />
              <AddStudentInput
                type="text"
                placeholder="Enter grade"
                value={newStudent.grade}
                onChange={(e) =>
                  setNewStudent({ ...newStudent, grade: e.target.value })
                }
              />
              <AddStudentButton type="submit">Add Student</AddStudentButton>
            </AddStudentForm>
            <StudentList>
              {students.map((student) => (
                <StudentItem key={student._id}>
                  {student.name} - {student.registrationNumber}-
                  {student.grade}-{student.email}-{student.password}
                </StudentItem>
              ))} 
            </StudentList>
          </StudentsContent>
        </Content>
      </StudentsContainer>
    </>
  );
};

export default Students;
