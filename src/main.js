const handleScroll = () => {
  const scrollAmount = 100;
  if (window.scrollY >= scrollAmount) {
    document.getElementById('header').classList.add('fixed');
  } else {
    document.getElementById('header').classList.remove('fixed');
  }
};

const addScrollListener = () => {
  window.addEventListener('scroll', handleScroll);
};

const removeScrollListener = () => {
  window.removeEventListener('scroll', handleScroll);
};

export { addScrollListener, removeScrollListener };
