// TeacherSignIn.js
import { useState } from 'react';
import { TeacherSignInContainer, FormContainer, InputField, SubmitButton } from '../styles/TeacherSignInStyles';
import Nav from './Navbar.jsx';
import axios from 'axios'
const TeacherSignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    // For demonstration purposes, we'll directly navigate to the teacher dashboard route
    // Replace this with your actual sign-in logic
    console.log(`${email} and ${password}`);
    // verification and give a access token
    // backend email and password send and return a access token
    try {
      const response = await axios.post('http://localhost:4000/api/v1/teachers/signin', {email:email,password: password});
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching announcements:', error);
    }
  };

  return (
    <>
    <Nav/>
    <TeacherSignInContainer>
      <h2>Teacher Sign In</h2>
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
        {/* Use Link component to navigate to teacher dashboard */}
        <SubmitButton to="/teacher/dashboard" onClick={handleSignIn}>Sign In</SubmitButton>
      </FormContainer>
    </TeacherSignInContainer>
    </>

  );
};

export default TeacherSignIn;
