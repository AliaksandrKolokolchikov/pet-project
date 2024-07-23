import './index.css';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/MainPage.tsx';
import { SignInPage, SignUpPage } from './pages';

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<MainPage />} />
        <Route path={'/signin'} element={<SignInPage />} />
        <Route path={'/signup'} element={<SignUpPage />} />
      </Routes>
    </>
  );
}

export default App;
