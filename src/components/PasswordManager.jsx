import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PasswordManager.css';

const PasswordManager = () => {
  const [step, setStep] = useState('passwordReset'); // Manage steps
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const simulateAPI = (successMessage, nextStep) => {
    setTimeout(() => {
      setMessage(successMessage);
      setStep(nextStep);
    }, 1000); // Mock API delay
  };

  const handlePasswordReset = (e) => {
    e.preventDefault();
    if (email === '') {
      setMessage('Please enter your email.');
      return;
    }
    simulateAPI('Password reset request submitted. Check your email!', 'emailSent');
  };

  const handleConfirmNewPassword = (e) => {
    e.preventDefault();
    if (password1 !== password2) {
      setMessage('Passwords do not match.');
      return;
    }
    simulateAPI('Password has been reset successfully!', 'passwordComplete');
  };

  const renderPasswordResetForm = () => (
    <>
      <h3 className="login-title">Password Reset</h3>
      {message && <div className="alert alert-success"><i className="fas fa-check-circle"></i> {message}</div>}
      <form onSubmit={handlePasswordReset} className="form-box">
        <div className="form-group">
          <label htmlFor="email">
            <i className="fas fa-envelope"></i> Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Request Password Reset
        </button>
      </form>
    </>
  );

  const renderEmailSent = () => (
    <>
      <h3 className="login-title">Email Sent</h3>
      <div className="alert alert-success">
        <i className="fas fa-check-circle"></i> An email has been sent with instructions to reset your password. Check your email.
      </div>
      <button onClick={() => setStep('confirmPassword')} className="btn btn-primary">
        Continue to Reset Password
      </button>
    </>
  );

  const renderConfirmNewPasswordForm = () => (
    <>
      <h3 className="login-title">Confirm New Password</h3>
      {message && (
        <div className={`alert alert-${message.includes('successfully') ? 'success' : 'danger'}`}>
          <i className={`fas fa-${message.includes('successfully') ? 'check' : 'exclamation'}-circle`}></i> {message}
        </div>
      )}
      <form onSubmit={handleConfirmNewPassword} className="form-box">
        <div className="form-group">
          <label htmlFor="password1">New Password</label>
          <input
            type="password"
            id="password1"
            value={password1}
            onChange={(e) => setPassword1(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password2">Confirm Password</label>
          <input
            type="password"
            id="password2"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Reset Password</button>
      </form>
    </>
  );

  const renderPasswordResetComplete = () => (
    <>
      <h3 className="login-title">Password Reset Complete</h3>
      <div className="alert alert-success">
        <i className="fas fa-check-circle"></i> Your password has been set, you are now able to log in!
      </div>
      <button onClick={() => navigate('/login')} className="btn btn-primary">Sign In Here</button>
    </>
  );

  return (
    <div id="login">
      {step === 'passwordReset' && renderPasswordResetForm()}
      {step === 'emailSent' && renderEmailSent()}
      {step === 'confirmPassword' && renderConfirmNewPasswordForm()}
      {step === 'passwordComplete' && renderPasswordResetComplete()}
    </div>
  );
};

export default PasswordManager;
