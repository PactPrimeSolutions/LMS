import React, { useState } from 'react';
import styled from 'styled-components';

const AuthForm = () => {
  const [formState, setFormState] = useState('login');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    resetEmail: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implement your login/register/reset logic here
    switch (formState) {
      case 'login':
        setMessage('Login successful!');
        break;
      case 'register':
        setMessage('Registration successful!');
        break;
      case 'resetPassword':
        setMessage('Password reset email sent!');
        break;
      default:
        setMessage('');
    }
  };

  const switchForm = (newState) => {
    setFormState(newState);
    setMessage('');
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      resetEmail: '',
    });
  };

  const renderForm = () => {
    switch (formState) {
      case 'login':
        return (
          <>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </FormGroup>
          </>
        );
      case 'register':
        return (
          <>
            <FormGroup>
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </FormGroup>
          </>
        );
      case 'resetPassword':
        return (
          <FormGroup>
            <Label htmlFor="resetEmail">Email</Label>
            <Input
              id="resetEmail"
              name="resetEmail"
              type="email"
              value={formData.resetEmail}
              onChange={handleChange}
              required
            />
          </FormGroup>
        );
      default:
        return null;
    }
  };

  return (
    <Wrapper>
      <Card>
        <CardHeader>
          <CardTitle>
            {formState === 'login' ? 'Login' : formState === 'register' ? 'Create Account' : 'Reset Password'}
          </CardTitle>
          <CardDescription>
            {formState === 'login' ? 'Sign in to your account' : 
             formState === 'register' ? 'Sign up for a new account' : 
             'Enter your email to reset your password'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form onSubmit={handleSubmit}>
            {renderForm()}
            {message && <Message>{message}</Message>}
            <SubmitButton type="submit">
              {formState === 'login' ? 'Login' : formState === 'register' ? 'Sign Up' : 'Reset Password'}
            </SubmitButton>
          </Form>
        </CardContent>
        <CardFooter>
          {formState === 'login' && (
            <>
              <LinkButton onClick={() => switchForm('register')}>
                Don't have an account? Sign up
              </LinkButton>
              <LinkButton onClick={() => switchForm('resetPassword')}>
                Forgot Password?
              </LinkButton>
            </>
          )}
          {formState === 'register' && (
            <LinkButton onClick={() => switchForm('login')}>
              Already have an account? Login
            </LinkButton>
          )}
          {formState === 'resetPassword' && (
            <LinkButton onClick={() => switchForm('login')}>
              Back to Login
            </LinkButton>
          )}
        </CardFooter>
      </Card>
    </Wrapper>
  );
};

// Styled components
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 98vh;
  background: linear-gradient(to bottom right, #60a5fa, #a78bfa);
`;

const Card = styled.div`
  width: 350px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
`;

const CardHeader = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const CardDescription = styled.p`
  color: #6b7280;
  font-size: 0.875rem;
`;

const CardContent = styled.div`
  margin-bottom: 1.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  font-size: 1rem;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: linear-gradient(to right, #60a5fa, #a78bfa);
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(to right, #3b82f6, #8b5cf6);
    transform: translateY(-1px);
  }
`;

const CardFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const LinkButton = styled.button`
  background: none;
  border: none;
  color: #4f46e5;
  font-size: 0.875rem;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: #4338ca;
  }
`;

const Message = styled.p`
  font-size: 0.875rem;
  color: #10b981;
  text-align: center;
  margin-bottom: 0.5rem;
`;

export default AuthForm;