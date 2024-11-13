import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import SignUp from './pages/auth/SignUp.component';
import SignIn from './pages/auth/SignIn.component';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' index element={<SignUp />} />
        <Route path='/login' element={<SignIn />} />
      </Routes>
    </>
  )
}

export default App
