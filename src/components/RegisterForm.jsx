// RegisterForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, Alert, Container } from 'react-bootstrap';
import './RegisterForm.css'

const RegisterForm = ({ toggleForm }) => { // Receive toggleForm prop
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password1: '',
    password2: '',
    phone: '',
    first_name: '',
    last_name: '',
  });

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      await axios.post('/api/register', formData);
      // Redirect or show success message
    } catch (error) {
      setMessage('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="py-5 card">
            <div className="form-title">
              <i className="fas fa-lock me-2"></i>
              Create Your Account
            </div>
      <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                required
              />
            </Form.Group>
      <Form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-12"> {/* Make it full width */}
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password1"
                value={formData.password1}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="password2"
                value={formData.password2}
                onChange={handleChange}
                required
              />
            </Form.Group>
            {/* <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Form.Group> */}
          </div>
        </div>

        {message && <Alert variant="danger">{message}</Alert>}
        <Button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Signing you up...' : <><i className="fas fa-user-plus"></i> SIGN UP</>}
        </Button>
        <div className="mt-3">
          <span>Already Registered? </span>
          <Button className="togglee" variant="link" onClick={toggleForm}>Login</Button> {/* Toggle button */}
        </div>
      </Form>
    </Container>
  );
};

export default RegisterForm;
