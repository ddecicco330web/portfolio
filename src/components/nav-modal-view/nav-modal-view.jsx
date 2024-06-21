const NavModalView = ({ fadeOut, handleClose, handleAnimationEnd }) => {
  return (
    <div id="nav-modal-overlay">
      <div
        className={'nav-modal ' + (fadeOut ? 'fadeOut' : 'fadeIn')}
        onClick={handleClose}
        onAnimationEnd={handleAnimationEnd}
      >
        <nav>
          <ul>
            <li>
              <a href="#intro">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavModalView;
