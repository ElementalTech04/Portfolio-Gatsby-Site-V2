import React, { useState } from 'react';
import { Link } from 'gatsby';
import style from './header.module.less'; // Ensure this path is correct
import '../../../styles/global.less'; // Ensure this path is correct
import { useWindowSize } from '../../../utils/hooks';

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [width] = useWindowSize();

  const toggleMenu = () => {
    if (width !== 0 && width <= 768) {
      setMenu(!menu);
    }
  };

  return (
    <>
      <div className={style.circleMenu} role="button" tabIndex="0" onKeyDown={toggleMenu} onClick={toggleMenu}>
        <div className={`${style.hamburger} ${menu ? style.menuIcon : ''}`}>
          <div className={style.line} />
          <div className={style.line} />
          <div className={style.hamburgerText}>MENU</div>
        </div>
      </div>
      <div className={`${style.navWrap} ${menu ? '' : style.hidden} ${menu ? style.openMenu : ''}`}>
        <div className={style.backgroundDiv}>
          <ul className={style.nav}>
            <li className={style.navItem}>
              <Link to="/" onClick={toggleMenu} activeClassName={style.anchorActive}>
                About
              </Link>
            </li>
            <li className={style.navItem}>
              <Link to="/contact" onClick={toggleMenu} activeClassName={style.anchorActive}>
                Contact
              </Link>
            </li>
            <li className={style.navItem}>
              <a href="https://travistech.hashnode.dev/" target="_blank" activeClassName={style.anchorActive}>
                Blog
              </a>
            </li>
            <li className={style.navItem}>
              <Link to="/projects" onClick={toggleMenu} activeClassName={style.anchorActive}>
                Projects
              </Link>
            </li>
            <li className={style.navItem}>
              <a href="/resume" target="_blank" activeClassName={style.anchorActive}>
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
