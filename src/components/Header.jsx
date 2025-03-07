import React from 'react';
import { NavLink } from 'react-router-dom';
import '../components/Header.css';
import logo_light from '../assets/foodland-seeklogo.png';
import logo_dark from '../assets/foodland-seeklogo.png';
import search_icon_light from '../assets/search-w.png';
import search_icon_dark from '../assets/search-b.png';
import toggle_light from '../assets/night.png';
import toggle_dark from '../assets/day.png';
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";

const Header = ({ theme, setTheme }) => {
  const toggle_mode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  const dispatch = useDispatch();

  return (
    <div className='navbar'>
      <img src={theme === 'light' ? logo_light : logo_dark} alt="" className='logo' />
      <ul>
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/menu" 
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/recipe" 
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Recipe
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <div className='search-box'>
        <input type='text' placeholder='Search...' onChange={(e) => dispatch(setSearch(e.target.value))} />
        <img src={theme === 'light' ? search_icon_light : search_icon_dark} alt='' />
      </div>
      <img onClick={toggle_mode} src={theme === 'light' ? toggle_light : toggle_dark} alt='' className='toggle-icon' />
    </div>
  );
};

export default Header;
