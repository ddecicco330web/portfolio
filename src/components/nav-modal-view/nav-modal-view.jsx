const NavModalView = ({ fadeOut, handleClose, handleAnimationEnd }) => {
  return (
    <div id="nav-modal-overlay">
      <div
        className={'nav-modal ' + (fadeOut ? 'fadeOut' : 'fadeIn')}
        onClick={handleClose}
        onAnimationEnd={handleAnimationEnd}
      ></div>
    </div>
  );
};

export default NavModalView;
