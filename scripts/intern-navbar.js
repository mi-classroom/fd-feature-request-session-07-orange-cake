var prevScrollpos = window.pageYOffset;
var internNav = document.querySelector('.intern-nav');

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    internNav.classList.remove('hidden');
  } else {
    internNav.classList.add('hidden');
  }
  prevScrollpos = currentScrollPos;
};
