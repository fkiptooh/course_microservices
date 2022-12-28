// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/nav-bar';
import { HomePage } from './pages/home/HomePage';
import { AdminPage } from './pages/admin/AdminPage';
import { ProfilePage } from './pages/profile/ProfilePage';
import { RegisterPage } from './pages/register/RegisterPage';
import { LoginPage } from './pages/login/LoginPage';
import { NotFoundPage } from './pages/not-found/NotFoundPage';
import { UnauthorizedPage } from './pages/unauthorized/UnauthorizedPage';
import { AuthGuard } from './guards/AuthGuard';
import { Role } from './models/role';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/admin" element={
            <AuthGuard roles={[Role.ADMIN]}>
              <AdminPage/>
            </AuthGuard>
          }/>
          <Route path="/profile" element={
            <AuthGuard roles={[Role.ADMIN, Role.USER]}>
              <ProfilePage/>
            </AuthGuard>
          }/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/401" element={<UnauthorizedPage/>}/>
          <Route path="/404" element={<NotFoundPage/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
