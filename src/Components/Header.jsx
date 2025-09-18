import React, { useState, useEffect, useContext, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useUser, useClerk } from '@clerk/clerk-react';
import headerImage from './Images/react_header-image.jpeg';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import { FavoriteContext } from './FavoriteContext';
import { CartContext } from './CartContext';

function Header({ onSearchClick }) {
  const [click, setClick] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const { favoriteCount } = useContext(FavoriteContext);
  const { cartCount } = useContext(CartContext);
  const { isSignedIn, user } = useUser();
  const { signOut, openUserProfile } = useClerk();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const handleClick = () => setClick(!click);

  const links = [
    { id: 'home', label: 'Home', path: '/', end: true },
    { id: 'store', label: 'Store', path: '/store' },
    { id: 'blog', label: 'Blog', path: '/blog' },
    { id: 'contact', label: 'Contact', path: '/contact' },
    { id: 'trending', label: 'Trending', path: '/trending' },
  ];

  // Handle sign in navigation
  const handleSignIn = () => {
    navigate('/sign-in');
  };

  // Handle sign up navigation
  const handleSignUp = () => {
    navigate('/sign-up');
  };

  // Handle profile dropdown toggle
  const toggleProfileDropdown = (e) => {
    e.stopPropagation();
    setShowProfileDropdown(!showProfileDropdown);
  };

  // Handle sign out
  const handleSignOut = async () => {
    try {
      await signOut();
      setShowProfileDropdown(false);
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  // Handle manage account (opens Clerk's user profile modal)
  const handleManageAccount = () => {
    openUserProfile();
    setShowProfileDropdown(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowProfileDropdown(false);
      }
    };

    if (showProfileDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showProfileDropdown]);

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
            <li>
              <i 
                className="fa-solid fa-magnifying-glass" 
                onClick={onSearchClick}
                style={{ cursor: 'pointer' }}
              />
            </li>
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
            
            {/* Authentication section */}
            {isSignedIn ? (
              <li className="profile-container" ref={dropdownRef}>
                <div className="profile-avatar" onClick={toggleProfileDropdown}>
                  {user?.imageUrl ? (
                    <img 
                      src={user.imageUrl} 
                      alt="Profile" 
                      className="profile-image"
                    />
                  ) : (
                    <div className="profile-placeholder">
                      <i className="fa-solid fa-user"></i>
                    </div>
                  )}
                </div>
                
                {showProfileDropdown && (
                  <div className="profile-dropdown">
                    <div className="dropdown-header">
                      <div className="user-info">
                        <span className="user-email">
                          {user?.emailAddresses?.[0]?.emailAddress || user?.username || 'User'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="dropdown-menu">
                      <button 
                        className="dropdown-item" 
                        onClick={handleManageAccount}
                      >
                        <i className="fa-solid fa-gear"></i>
                        Manage account
                      </button>
                      
                      <button 
                        className="dropdown-item" 
                        onClick={handleSignOut}
                      >
                        <i className="fa-solid fa-sign-out-alt"></i>
                        Sign out
                      </button>
                    </div>
                    
                    <div className="dropdown-footer">
                      <small>Secured by Clerk</small>
                    </div>
                  </div>
                )}
              </li>
            ) : (
              <li className="auth-buttons">
                <button className="login-btn" onClick={handleSignIn}>
                  Sign In
                </button>
                <button className="signup-btn" onClick={handleSignUp}>
                  Sign Up
                </button>
              </li>
            )}
          </ul>
        </div>

        <nav className={`hamburger-items ${click ? 'open' : ''}`}>
          <div className="xmark">
            <i className="fa-solid fa-xmark close-icon" onClick={handleClick} aria-label="Close menu" />
          </div>
          <h3>LORIE</h3>
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
          
          {/* Mobile auth section */}
          <div className="mobile-auth">
            {isSignedIn && (
              <div className="mobile-user">
                <div className="mobile-user-info">
                  <div className="mobile-avatar">
                    {user?.imageUrl ? (
                      <img src={user.imageUrl} alt="Profile" />
                    ) : (
                      <i className="fa-solid fa-user"></i>
                    )}
                  </div>
                  <span>Hello, {user?.firstName || 'User'}!</span>
                </div>
                <div className="mobile-auth-buttons">
                  <button 
                    className="mobile-manage-btn" 
                    onClick={() => {
                      handleManageAccount();
                      setClick(false);
                    }}
                  >
                    Manage Account
                  </button>
                  <button 
                    className="mobile-signout-btn" 
                    onClick={() => {
                      handleSignOut();
                      setClick(false);
                    }}
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;