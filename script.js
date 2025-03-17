// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// // Animate progress bars on scroll
// const progressBars = document.querySelectorAll('.progress');

// const animateProgressBars = () => {
//   progressBars.forEach(bar => {
//     const width = bar.style.width;
//     bar.style.width = '0';
//     setTimeout(() => {
//       bar.style.width = width;
//     }, 500);
//   });
// };

// window.addEventListener('scroll', () => {
//   const skillsSection = document.getElementById('skills');
//   const sectionTop = skillsSection.offsetTop;
//   const sectionHeight = skillsSection.offsetHeight;
//   const scrollPosition = window.scrollY;

//   if (scrollPosition > sectionTop - window.innerHeight + sectionHeight / 2) {
//     animateProgressBars();
//   }
// });