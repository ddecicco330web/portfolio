import { Button } from 'react-bootstrap';

const NavModalView = ({ fadeOut, handleClose, handleAnimationEnd }) => {
  return (
    <div id="nav-modal__overlay" className="nav-modal__overlay">
      <div
        className={'nav-modal__content ' + (fadeOut ? 'fadeOut' : 'fadeIn')}
        onAnimationEnd={handleAnimationEnd}
      >
        <Button className="close-btn" onClick={handleClose}>
          X
        </Button>
        <nav className="nav-modal__nav">
          <ul className="nav-modal__list">
            <li className="nav-modal__item">
              <a className="nav-modal__link" href="#intro">
                Home
              </a>
            </li>
            <li className="nav-modal__item">
              <a className="nav-modal__link" href="#about">
                About
              </a>
            </li>
            <li className="nav-modal__item">
              <a className="nav-modal__link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-modal__item">
              <a className="nav-modal__link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavModalView;
