var prevScrollpos = window.pageYOffset;
var internNav = document.querySelector('.intern-nav');

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    internNav.style.transform = 'translateY(0)';
  } else {
    internNav.style.transform = 'translateY(100%)';
  }
  prevScrollpos = currentScrollPos;
};

