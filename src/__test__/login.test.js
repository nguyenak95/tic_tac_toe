import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

it('renders Login box', () => {
  render(<App />);
  expect(screen.getByText('Login')).toBeInTheDocument();
});

it('input wrong email', async () => {
  render(<App />);
  fireEvent.change(screen.getByLabelText(/email/i), {
    target: {value: 'test@gmail.com'},
  })
  fireEvent.change(screen.getByLabelText(/password/i), {
    target: {value: '123456'},
  })
  fireEvent.click(screen.getByText(/login/i))
  
  expect(screen.getByText(/Not found any user with this email/i)).toBeInTheDocument()
});

it('input wrong password', async () => {
  render(<App />);
  fireEvent.change(screen.getByLabelText(/email/i), {
    target: {value: 'test@example.com'},
  })
  fireEvent.change(screen.getByLabelText(/password/i), {
    target: {value: '1234567'},
  })
  fireEvent.click(screen.getByText(/login/i))
  
  expect(screen.getByText(/Wrong password/i)).toBeInTheDocument()
});

it('success login', async () => {
  render(<App />);
  fireEvent.change(screen.getByLabelText(/email/i), {
    target: {value: 'test@example.com'},
  })
  fireEvent.change(screen.getByLabelText(/password/i), {
    target: {value: '123456'},
  })
  fireEvent.click(screen.getByText(/login/i))
  
  expect(screen.getByText(/logout/i)).toBeInTheDocument()
});

it('authorized login', async () => {
  localStorage.setItem('isAuth', 'true')
  render(<App />);
  
  expect(screen.getByText(/logout/i)).toBeInTheDocument()
});

it('logout success', async () => {
  render(<App />);
  fireEvent.click(screen.getByText(/logout/i))
  
  expect(screen.getByText(/sign in/i)).toBeInTheDocument()
});
