import './index.css';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from './pages';
import { SignInPage, SignUpPage } from './pages';
import { ROUTES } from './constants';
import { AllCategories } from './pages/AllCategories.tsx';

function App() {
  return (
    <>
      <Routes>
        <Route path={ROUTES.MAIN_NESTED} element={<MainPage />} />
        <Route path={ROUTES.SIGN_IN} element={<SignInPage />} />
        <Route path={ROUTES.SIGN_UP} element={<SignUpPage />} />
        <Route path={ROUTES.ALL_CATEGORIES} element={<AllCategories />} />
      </Routes>
    </>
  );
}

export default App;
