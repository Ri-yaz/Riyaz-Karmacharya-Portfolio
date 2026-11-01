const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLinks = document.querySelectorAll('.nav__link');
const header = document.getElementById('header');
const scrollUp = document.getElementById('scroll-up');

function closeMenu() {
  navMenu.classList.remove('show-menu');
  navToggle.setAttribute('aria-expanded', 'false');
}
navToggle.addEventListener('click', () => {
  navMenu.classList.add('show-menu');
  navToggle.setAttribute('aria-expanded', 'true');
});
navClose.addEventListener('click', closeMenu);
navLinks.forEach(link => link.addEventListener('click', closeMenu));

function handleScroll() {
  const scrolled = window.scrollY > 30;
  header.classList.toggle('scrolled', scrolled);
  scrollUp.classList.toggle('show-scroll', window.scrollY > 450);

  let current = 'home';
  document.querySelectorAll('main section[id]').forEach(section => {
    if (window.scrollY >= section.offsetTop - 150) current = section.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active-link', link.getAttribute('href') === `#${current}`);
  });
}
window.addEventListener('scroll', handleScroll, { passive: true });
scrollUp.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
document.getElementById('year').textContent = new Date().getFullYear();
handleScroll();
