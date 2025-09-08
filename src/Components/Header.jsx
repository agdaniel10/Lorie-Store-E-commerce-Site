import React, { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import headerImage from './Images/react_header-image.jpeg';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import { FavoriteContext } from './FavoriteContext';
import { CartContext } from './CartContext';
import Search from './Search';

function Header() {
  const [click, setClick] = useState(false);
  const { favoriteCount } = useContext(FavoriteContext)
  const { cartCount } = useContext(CartContext)

  const handleClick = () => setClick(!click);

  const showSearch = () => {
    click ? <Search /> : ''
  }

  const navigate = useNavigate();

  const links = [
    { id: 'home', label: 'Home', path: '/', end: true },
    { id: 'store', label: 'Store', path: '/store' },
    { id: 'blog', label: 'Blog', path: '/blog' },
    { id: 'contact', label: 'Contact', path: '/contact' },
    { id: 'trending', label: 'Trending', path: '/trending' },
  ];

  // Window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 700 && click) {
        setClick(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [click]);

  return (
    <header>
      <div className="Header_container">
        <div className="menu-icon" onClick={(e) => { e.stopPropagation(); handleClick(); }}>
          <i className={click ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} aria-label="Menu" />
        </div>

        <div className="img-title-container">
          <img src={headerImage} alt="Header" />
          <h3>LORIE</h3>
        </div>

        <div className="Header-pages">
          <ul>
            {links.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  end={link.end}
                  aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="list-icons">
          <ul>
            <li><i className="fa-solid fa-magnifying-glass" onClick={() => showSearch()}></i></li>
            <li>
              <div className='cart-container'>
                <span className='cart-icon' onClick={() => navigate("/CartPage")}>
                  <i className="fa-solid fa-cart-shopping"></i>
                </span>
                <span className="cart-count">{cartCount}</span>
              </div>
            </li>
            <li>
              <div className="fave-container">
                <span className="fave-icon" onClick={() => navigate("/FavoritePage")} >
                  <i className="fa-solid fa-heart"></i>
                </span>
                <span className="fave-count">{favoriteCount}</span>
              </div>
            </li>
            <button>Login</button>
          </ul>
        </div>

        <nav className={`hamburger-items ${click ? 'open' : ''}`}>
          <div className="xmark">
            <i className="fa-solid fa-xmark close-icon" onClick={handleClick} aria-label="Close menu" />
          </div>
          <h3>CARTELLA</h3>
          <ul>
            {links.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  end={link.end}
                  onClick={() => setClick(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;