import { BrowserRouter, NavLink, Routes, Route, Navigate } from 'react-router-dom';
import logo from '../assets/react.svg';
import { LazyPag1, LazyPag2, LazyPag3 } from '../01-lazyload/pages';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink
                to={'/lazy1'}
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Lazy1
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/lazy2'}
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Lazy2
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/lazy3'}
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Lazy3
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="lazy1" element={<LazyPag1 />} />
          <Route path="lazy2" element={<LazyPag2 />} />
          <Route path="lazy3" element={<LazyPag3 />} />
          <Route path="/*" element={<Navigate to={'/lazy1'} replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
