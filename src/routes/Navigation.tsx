import { BrowserRouter, NavLink, Routes, Route, Navigate } from 'react-router-dom';
import logo from '../assets/react.svg';
import {
  FormikAbstract,
  FormikBasicPage,
  FormikComponents,
  FormikYupPage,
  RegisterPage,
} from '../03-forms/pages';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink
                to={'/register'}
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Register page
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/formik-basic'}
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Formik
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/formik-yup'}
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Formik-yup
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/formik-components'}
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Formik-components
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/formik-abs'}
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Formik-abs
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="home" element={<h1>Home Page</h1>} />
          <Route path="formik-basic" element={<FormikBasicPage />} />
          <Route path="formik-yup" element={<FormikYupPage />} />
          <Route path="formik-components" element={<FormikComponents />} />
          <Route path="formik-abs" element={<FormikAbstract />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="/*" element={<Navigate to={'/home'} replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
