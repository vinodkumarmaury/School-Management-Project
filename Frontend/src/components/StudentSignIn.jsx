// StudentSignIn.js
import React, { useState } from 'react';
import axios from 'axios';
import { StudentSignInContainer, FormContainer, InputField, SubmitButton } from '../styles/StudentSignInStyles';
import Nav from './Navbar';
const StudentSignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    // For demonstration purposes, we'll directly navigate to the teacher dashboard route
    // Replace this with your actual sign-in logic
    console.log(`${email} and ${password}`);
    // verification and give a access token
    // backend email and password send and return a access token
    try {
      const response = await axios.get('http://localhost:4000/api/v1/students/signin', {email:email,password: password});
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching announcements:', error);
    }
  };

  return (
    <>
    <Nav/>
    <StudentSignInContainer>
      <h2>Student Sign In</h2>
      <FormContainer>
        <InputField
          type="email"
          placeholder="Email"
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /> 
        {/* Use Link component to navigate to student dashboard */}
        <SubmitButton to="/student/dashboard" onClick={handleSignIn}>Sign In</SubmitButton>
      </FormContainer>
    </StudentSignInContainer>
    </>

  );
};

export default StudentSignIn;
