import { useState } from 'react';
import { AdminSignInContainer, FormContainer, InputField, SubmitButton } from '../styles/AdminSignInStyles';
import axios from 'axios';
import Nav from './Navbar';
import { useNavigate } from 'react-router-dom';

const AdminSignIn = () => {
  const navigation = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
  
    if(!email && !password)
      return ;

    try {
      const response = await axios.post('http://localhost:4000/api/v1/users/admin/signin', { email, password });

      if (response.data.success) {
        // Sign-in successful, redirect to admin dashboard
        // window.location.href = '/admin/dashboard';
        navigation("/admin/dashboard");
      } else {
        // Handle sign-in errors
        console.log('Sign-in failed');
      }
    } catch (error) {
      console.log('Error during sign-in:', error);
    }
  };

  return (
   <>
   <Nav/>
    <AdminSignInContainer>
      <h2>Admin Sign In</h2>
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
        <SubmitButton to = "/admin/dashboard"
        onClick={handleSignIn}
        >Sign In</SubmitButton>
      </FormContainer>
    </AdminSignInContainer>
    </>

  );
};

export default AdminSignIn;
