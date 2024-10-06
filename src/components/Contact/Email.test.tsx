import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import emails from '@emailjs/browser';

import { EmailContact } from './Email.tsx';

jest.mock('@emailjs/browser', () => ({
  send: jest.fn(),
}));

describe('Email', () => {
  it('renders without crashing', () => {
    render(<EmailContact />);
    expect(screen.getByText(/Just Say Hello!/)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Send Message/i }),
    ).toBeInTheDocument();
  });

  it('renders form correctly input', () => {
    render(<EmailContact />);

    const inputEmail = screen.getByPlaceholderText('Email');
    expect(inputEmail).toBeInTheDocument();

    const inputName = screen.getByPlaceholderText('Name');
    expect(inputName).toBeInTheDocument();

    const inputMessage = screen.getByPlaceholderText('Message');
    expect(inputMessage).toBeInTheDocument();

    const inputSubjects = screen.getByPlaceholderText('Subjects');
    expect(inputSubjects).toBeInTheDocument();
  });

  it('updates form correctly input', () => {
    render(<EmailContact />);

    const nameInput = screen.getByPlaceholderText(/Name/) as HTMLInputElement;
    fireEvent.change(nameInput, { target: { value: 'Sashko' } });
    expect(nameInput.value).toBe('Sashko');

    const emailInput = screen.getByPlaceholderText(/Email/) as HTMLInputElement;
    fireEvent.change(emailInput, { target: { value: 'Sashko@mail.ru' } });
    expect(emailInput.value).toBe('Sashko@mail.ru');

    const messageInput = screen.getByPlaceholderText(
      /Message/,
    ) as HTMLInputElement;
    fireEvent.change(messageInput, { target: { value: 'test message' } });
    expect(messageInput.value).toBe('test message');

    const subjectInput = screen.getByPlaceholderText(
      /Subject/,
    ) as HTMLInputElement;
    fireEvent.change(subjectInput, { target: { value: 'test subject' } });
    expect(subjectInput.value).toBe('test subject');
  });

  it('form submit correctly', () => {
    const sendMock = emails.send as jest.Mock;
    sendMock.mockResolvedValue('Success');

    render(<EmailContact />);
    const nameInput = screen.getByPlaceholderText(/Name/) as HTMLInputElement;
    fireEvent.change(nameInput, { target: { value: 'Sashko' } });
    expect(nameInput.value).toBe('Sashko');

    const emailInput = screen.getByPlaceholderText(/Email/) as HTMLInputElement;
    fireEvent.change(emailInput, { target: { value: 'Sashko@mail.ru' } });
    expect(emailInput.value).toBe('Sashko@mail.ru');

    const messageInput = screen.getByPlaceholderText(
      /Message/,
    ) as HTMLInputElement;
    fireEvent.change(messageInput, { target: { value: 'test message' } });
    expect(messageInput.value).toBe('test message');

    const subjectInput = screen.getByPlaceholderText(
      /Subject/,
    ) as HTMLInputElement;
    fireEvent.change(subjectInput, { target: { value: 'test subject' } });
    expect(subjectInput.value).toBe('test subject');

    fireEvent.click(screen.getByText(/Send Message/i));

    expect(sendMock).toHaveBeenCalled();
  });
});
