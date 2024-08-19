import emails from '@emailjs/browser';
import { ChangeEvent, FormEvent, useRef, useState } from 'react';

interface EmailProps {
  name: string;
  email: string;
  message: string;
  subject: string;
}

export const EmailContact = () => {
  const [formValue, setFormValue] = useState<EmailProps>({
    name: '',
    email: '',
    message: '',
    subject: '',
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>, type: string) => {
    setFormValue((prevState) => ({ ...prevState, [type]: e.target.value }));
  };
  const form = useRef(null);
  const sendEmail = (e: FormEvent) => {
    const { name, email, message, subject } = formValue;
    e.preventDefault();

    emails
      .send(
        'service_a44s0ko',
        'template_m9gottz',
        { name, email, message, subject },
        {
          publicKey: 'nATcz3pWSN-YA9fs7',
        },
      )
      .then(
        () => {
          console.log('SUCCESS!');
          console.log(form.current);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="min-w-[984px] min-h-[507px] bg-white shadow-2xl rounded-lg ml-6"
    >
      <div className="pl-[50px]">
        <p className="font-semibold text-[24px] pt-11 pb-2">Just Say Hello!</p>
        <p className="text-[14px] text-[#808080] max-w-[486px] pb-6">
          Do you fancy saying hi to me or you want to get started with your
          project and you need my help? Feel free to contact me.
        </p>
        <div className="flex gap-4 pb-4">
          <input
            className="border w-[434px] h-[49px] focus:outline-none rounded-[8px] pl-4"
            type="text"
            value={formValue.name}
            onChange={(e) => handleChange(e, 'name')}
            placeholder="Template Cookie"
          />
          <input
            className="border w-[434px] h-[49px] focus:outline-none rounded-[8px] pl-4"
            type="email"
            value={formValue.email}
            onChange={(e) => handleChange(e, 'email')}
            placeholder="Template Cookie"
          />
        </div>
        <input
          className="border w-[884px] h-[49px] focus:outline-none rounded-[8px] pl-4"
          type="name"
          value={formValue.message}
          onChange={(e) => handleChange(e, 'message')}
          placeholder="Message"
        />
        <input
          className="border w-[884px] h-[98px] focus:outline-none rounded-[8px] pl-4 pb-12 mt-4"
          type="name"
          value={formValue.subject}
          onChange={(e) => handleChange(e, 'subject')}
          placeholder="Subjects"
        />
        <button className="w-[199px] h-[51px] bg-[#00B307] hover:bg-[#2C742F] rounded-full mt-6">
          <p className="text-center font-semibold text-white">Send Message</p>
        </button>
      </div>
    </form>
  );
};
