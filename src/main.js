const scrollAmount = 100;
window.addEventListener('scroll', () => {
  if (window.scrollY >= scrollAmount) {
    document.getElementById('header').classList.add('fixed');
  } else {
    document.getElementById('header').classList.remove('fixed');
  }
});
