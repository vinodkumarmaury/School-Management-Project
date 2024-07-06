// Exam.js
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import {
  ExamContainer,
  SidebarContainer,
  Content,
  ExamHeader,
  ExamForm,
  FormLabel,
  FormInput,
  AddButton,
} from '../../styles/ExamStyles';
import Nav from '../../components/Navbar';

const Exam = () => {
  const [examData, setExamData] = useState([]);
  const [name, setName] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [className, setClassName] = useState('');
  const [marks, setMarks] = useState('');

  useEffect(() => {
    fetchExams();
  }, []);

  const fetchExams = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/exam/getall');
      setExamData(response.data.exams); // Assuming response data structure has 'exams' array
    } catch (error) {
      console.error('Error fetching exams:', error);
    }
  };

  const handleAddExam = async (e) => {
    e.preventDefault();
    const newExam = { name, registrationNumber, className, marks: parseInt(marks) };
    try {
      const response = await axios.post('http://localhost:4000/api/v1/exam', newExam);
      setExamData([...examData, response.data.exam]); // Assuming response data structure has 'exam' object
      setName('');
      setRegistrationNumber('');
      setClassName('');
      setMarks('');
    } catch (error) {
      console.error('Error adding exam:', error);
    }
  };

  const calculateTotalMarks = () => {
    return examData.reduce((total, exam) => total + exam.marks, 0);
  };

  return (
    <>
      <Nav />
      <ExamContainer>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <Content>
          <ExamHeader>Exam Details</ExamHeader>
          <ExamForm onSubmit={handleAddExam}>
            <FormLabel>Name:</FormLabel>
            <FormInput
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <FormLabel>Registration Number:</FormLabel>
            <FormInput
              type="text"
              value={registrationNumber}
              onChange={(e) => setRegistrationNumber(e.target.value)}
              required
            />
            <FormLabel>Class:</FormLabel>
            <FormInput
              type="text"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
              required
            />
            <FormLabel>Marks:</FormLabel>
            <FormInput
              type="number"
              value={marks}
              onChange={(e) => setMarks(e.target.value)}
              required
            />
            <AddButton type="submit">Add Exam</AddButton>
          </ExamForm>
          <h2>Total Marks: {calculateTotalMarks()}</h2>
          <h3>Exam Details:</h3>
          <ul>
            {examData.map((exam) => (
              <li key={exam._id}>
                Name: {exam.name}, Registration Number: {exam.registrationNumber}, Class: {exam.className}, Marks: {exam.marks}
              </li>
            ))}
          </ul>
        </Content>
      </ExamContainer>
    </>
  );
};

export default Exam;
