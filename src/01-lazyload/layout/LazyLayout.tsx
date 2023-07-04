import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
import { LazyPag1, LazyPag2, LazyPag3 } from '../pages';

export const LazyLayout = () => {
  return (
    <div>
      <h1>LazyLayout Page</h1>
      <ul>
        <li>
          <NavLink to={'lazy1'}>LazyPag1</NavLink>
        </li>
        <li>
          <NavLink to={'lazy2'}>LazyPag2</NavLink>
        </li>
        <li>
          <NavLink to={'lazy3'}>LazyPag3</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="lazy1" element={<LazyPag1 />}></Route>
        <Route path="lazy2" element={<LazyPag2 />}></Route>
        <Route path="lazy3" element={<LazyPag3 />}></Route>

        {/* <Route path="*" element={<div>Not Found</div>}></Route> */}
        <Route path="*" element={<Navigate replace to={'lazy1'} />}></Route>
      </Routes>
    </div>
  );
};

export default LazyLayout;
