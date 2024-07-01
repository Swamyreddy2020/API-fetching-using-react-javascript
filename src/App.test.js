import React from 'react';
import { render, screen } from '@testing-library/react';
import LoginForm from './LoginForm'; // Adjust the import path as necessary

test('renders login form elements', () => {
  render(<LoginForm />);
  
  // Check if the Login header is in the document
  const headerElement = screen.getByText(/login/i);
  expect(headerElement).toBeInTheDocument();

  // Check if the username input is in the document
  const usernameInput = screen.getByPlaceholderText(/username/i);
  expect(usernameInput).toBeInTheDocument();

  // Check if the password input is in the document
  const passwordInput = screen.getByPlaceholderText(/password/i);
  expect(passwordInput).toBeInTheDocument();

  // Check if the remember me checkbox is in the document
  const checkboxLabel = screen.getByLabelText(/remember me/i);
  expect(checkboxLabel).toBeInTheDocument();

  // Check if the forgot password link is in the document
  const forgotPasswordLink = screen.getByText(/forgot password\?/i);
  expect(forgotPasswordLink).toBeInTheDocument();

  // Check if the login button is in the document
  const loginButton = screen.getByRole('button', { name: /login/i });
  expect(loginButton).toBeInTheDocument();

  // Check if the registration link is in the document
  const registerLink = screen.getByText(/don't have an account\? register/i);
  expect(registerLink).toBeInTheDocument();
});
