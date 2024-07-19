import './index.css';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/MainPage.tsx';
import { SignInPage } from './pages';

function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<MainPage />} />
        <Route path={'/signin'} element={<SignInPage />} />
      </Routes>
    </>
  );
}

export default App;
