import { Header } from '../components';
import { Footer } from '../components/Footer/Footer.tsx';
import { SignUpForm } from '../components/SignUpForm/SignUpForm.tsx';

export const SignUpPage = () => {
  return (
    <>
      <Header />
      <SignUpForm />
      <Footer />
    </>
  );
};
