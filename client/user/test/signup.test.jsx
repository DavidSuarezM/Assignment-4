import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Signup from '../signup';
import { MemoryRouter } from 'react-router-dom';
import { create } from '../api-user';

jest.mock('../api-user');

describe('Signup Component', () => {
  beforeEach(() => {
    create.mockClear();
  });

  test('renders the Signup form', () => {
    render(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
    );

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  test('submits form successfully and opens dialog', async () => {
    create.mockResolvedValueOnce({}); // no error = success

    render(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: 'Milena' },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'milena@test.com' },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'secretpass' },
    });

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    await waitFor(() => {
      expect(create).toHaveBeenCalledWith({
        name: 'Milena',
        email: 'milena@test.com',
        password: 'secretpass',
      });

      expect(screen.getByText(/new account successfully created/i)).toBeInTheDocument();
    });
  });

  test('shows error when signup fails', async () => {
    create.mockResolvedValueOnce({ error: 'Email already exists' });

    render(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: 'Milena' },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'used@test.com' },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: '123456' },
    });

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    await waitFor(() => {
      expect(screen.getByText(/email already exists/i)).toBeInTheDocument();
    });
  });
});
