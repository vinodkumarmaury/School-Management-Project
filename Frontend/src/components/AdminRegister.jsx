import React, { useState } from 'react';
import { AdminRegisterContainer, FormContainer, InputField, SubmitButton } from '../styles/AdminRegisterStyles';
import axios from 'axios';
import Nav from "./Navbar";

const AdminRegister = () => { 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/api/v1/register/admin', { email, password });
      if (response.status === 200) {
        window.location.href = '/admin-signIn';
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  }; 

  return (
    <>
      <Nav />
      <AdminRegisterContainer>
        <h2>Admin Register</h2>
        <FormContainer onSubmit={handleRegister}>
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
          <SubmitButton type="submit">Register</SubmitButton>
        </FormContainer>
      </AdminRegisterContainer>
    </>
  );
};

export default AdminRegister;
