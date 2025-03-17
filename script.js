// Smooth scrolling for navigation links (excluding resume link)
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    // Check if the link is not the resume link
    if (!this.getAttribute('href').endsWith('.pdf')) {
      e.preventDefault(); // Prevent default behavior only for non-resume links
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    }
    // If it's the resume link, let the default behavior (redirect) happen
  });
});
