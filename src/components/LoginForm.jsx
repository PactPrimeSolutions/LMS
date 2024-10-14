import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, Alert, Container } from 'react-bootstrap';
import RegisterForm from './RegisterForm';
import PasswordManager from './PasswordManager';
import './LoginForm.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false); // Toggle between register and login
  const [isResettingPassword, setIsResettingPassword] = useState(false); // Toggle between login and password reset

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      await axios.post('/api/login', { username, password });
      // Handle successful login, such as redirecting
    } catch (error) {
      setMessage('Invalid ID & Password.');
    } finally {
      setLoading(false);
    }
  };

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  const togglePasswordReset = () => {
    setIsResettingPassword(!isResettingPassword); // Toggle to password reset form
  };

  return (
    <Container className="mt-5">
      <div className="col-md-4 mx-auto">
        {isResettingPassword ? (
          <div className="card">
            {/* Render PasswordManager for resetting */}
            <PasswordManager />
            <div className="mt-3">
              <Button variant="link" className="togglee" onClick={togglePasswordReset}>
                Back to Sign In
              </Button>
            </div>
          </div>
        ) : isRegistering ? (
          <RegisterForm toggleForm={toggleForm} />
        ) : (
          <div className="card">
            <div className="form-title">
              <i className="fas fa-lock me-2"></i>
              Sign in
            </div>
            <div className="card-body">
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>
                    <i className="fas fa-address-card me-2"></i>User ID
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>
                    <i className="fas fa-key me-2"></i>Password
                  </Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>
                {message && <Alert variant="danger">{message}</Alert>}
                <Button type="submit" className="btn btn-primary" disabled={loading}>
                  {loading ? 'Signing you in...' : <><i className="fas fa-sign-in-alt"></i> SIGN IN</>}
                </Button>
              </Form>
              <div className="login-bottom mt-3">
                <Button variant="link" className="link" onClick={togglePasswordReset}>
                  Forgot password?
                </Button>
              </div>
              <div className="mt-3">
                <span>Don't Have an account? </span>
                <Button variant="link" className="togglee" onClick={toggleForm}>Register Now!</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default LoginForm;
