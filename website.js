
   

function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({
      behavior: 'smooth'
  });
}

document.addEventListener('scroll', function () {
    var backToTopBtn = document.getElementById('backToTopBtn');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}