import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdClose, MdAccountCircle } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleToggle = () => {
    setNavOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setNavOpen(false);
  };

  const links = [
    {
      id: 1,
      path: '/',
      text: 'BOOKS',
    },

    {
      id: 2,
      path: '/categories',
      text: 'CATEGORIES',
    },
  ];

  return (
    <header className={`${navOpen ? 'show-menu' : 'header-bg'}`}>
      <div className="nav-container">
        <nav className={`flex nav-bar ${navOpen ? '' : ''}`}>
          <h1 className="logo ff-1">Bookstore CMS</h1>
          <ul className={` ${navOpen ? 'navList-sm' : 'navList-bg'}`}>
            {links.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.path}
                  activeclassname="active-link"
                  exact="true"
                  onClick={() => closeMenu()}
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className="menu"
          type="button"
          onClick={handleToggle}
        >
          {navOpen ? (<MdClose style={{ width: '40px', height: '40px', color: '#0290ff' }} />) : (<FiMenu style={{ width: '40px', height: '40px', color: '#0290ff' }} />)}
        </button>
        <MdAccountCircle
          className="user"
          style={{
            width: '24px', height: '24px', color: '#0290ff',
          }}
        />
      </div>
    </header>
  );
};

export default Navbar;
