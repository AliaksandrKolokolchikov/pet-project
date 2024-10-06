import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { InputField } from '../Dashboard';

describe('InputField Component', () => {
  const mockOnChange = jest.fn();

  const defaultPropsEmail = {
    label: 'Email',
    type: 'text',
    value: '',
    valid: false,
    onChange: mockOnChange,
    placeholder: 'Email',
    name: 'email',
  };

  it('renders input field with label email', () => {
    render(<InputField {...defaultPropsEmail} />);

    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
  });

  it('calls onChange handler when input value changes email', () => {
    render(<InputField {...defaultPropsEmail} />);

    const input = screen.getByPlaceholderText('Email');
    fireEvent.change(input, { target: { value: 'test@example.com' } });

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  it('shows error message email when error prop is provided', () => {
    render(<InputField {...defaultPropsEmail} error="Invalid email" />);

    expect(screen.getByText('Invalid email')).toBeInTheDocument();

    const input = screen.getByPlaceholderText('Email');
    expect(input).toHaveClass('border-red-500');
  });

  it('shows valid style when input email is valid', () => {
    render(
      <InputField
        {...defaultPropsEmail}
        valid={true}
        value="valid@example.com"
      />,
    );

    const input = screen.getByPlaceholderText('Email');
    expect(input).toHaveClass('bg-green-100 border-green-500');
  });

  const defaultPropsPassword = {
    label: 'Password',
    type: 'password',
    value: '',
    valid: false,
    onChange: mockOnChange,
    placeholder: 'Your password',
    name: 'password',
  };

  it('renders input field with label password and placeholder', () => {
    render(<InputField {...defaultPropsPassword} />);

    expect(screen.getByText(/Password/)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Your password/)).toBeInTheDocument();
  });

  it('calls onChange handler when input value changes password', () => {
    render(<InputField {...defaultPropsPassword} />);

    const input = screen.getByPlaceholderText(/Your password/);
    fireEvent.change(input, { target: { value: 'sasasasa!' } });

    expect(mockOnChange).toHaveBeenCalledTimes(2);
  });

  it('shows error message password when error prop is provided', () => {
    render(
      <InputField
        {...defaultPropsPassword}
        error={
          'Password must be at least 8 characters long and include special characters'
        }
      />,
    );

    expect(
      screen.getByText(
        'Password must be at least 8 characters long and include special characters',
      ),
    ).toBeInTheDocument();

    const input = screen.getByPlaceholderText(/Your password/);
    expect(input).toHaveClass('border-red-500');
  });

  it('shows valid style when input password is valid', () => {
    render(
      <InputField {...defaultPropsPassword} valid={true} value="sasasasa!" />,
    );

    const input = screen.getByPlaceholderText(/Your password/);
    expect(input).toHaveClass(
      'bg-green-100 border-green-500 focus:ring-green-500',
    );
  });
});
