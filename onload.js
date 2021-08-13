window.addEventListener("load", function () {
  burgerMenu = document.getElementById('burgerMenu');
  menuOpen = false;
  burgerMenu.addEventListener('click', () => {
    if(!menuOpen) {
      burgerMenu.classList.add('open');
      menuOpen = true;
    } else {
      burgerMenu.classList.remove('open');
      menuOpen = false;
    }
  });
});