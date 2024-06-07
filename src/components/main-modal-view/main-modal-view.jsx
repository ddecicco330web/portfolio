const MainModalView = ({ fadeOut, handleClose, handleAnimationEnd }) => {
  return (
    <div id="main-modal-overlay">
      <div
        className={'main-modal ' + (fadeOut ? 'fadeOut' : 'fadeIn')}
        onClick={handleClose}
        onAnimationEnd={handleAnimationEnd}
      ></div>
    </div>
  );
};

export default MainModalView;
