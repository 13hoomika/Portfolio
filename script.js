// Typewriter Effect with Multiple Phrases
const phrases = [
  "Java Developer",
  "Backend Developer",
  "Frontend Developer",
  "Full-Stack Developer",
];
let currentPhrase = 0;
let currentLetter = 0;
let isDeleting = false;
const dynamicText = document.getElementById('dynamic-text');

function typeWriter() {
  const fullText = phrases[currentPhrase];

  if (isDeleting) {
    // Delete text
    dynamicText.textContent = fullText.substring(0, currentLetter - 1);
    currentLetter--;
  } else {
    // Type text
    dynamicText.textContent = fullText.substring(0, currentLetter + 1);
    currentLetter++;
  }

  // Check if the current phrase is complete
  if (!isDeleting && currentLetter === fullText.length) {
    isDeleting = true;
    setTimeout(typeWriter, 1000); // Pause before deleting
  } else if (isDeleting && currentLetter === 0) {
    isDeleting = false;
    currentPhrase = (currentPhrase + 1) % phrases.length; // Move to the next phrase
    setTimeout(typeWriter, 500); // Pause before typing the next phrase
  } else {
    setTimeout(typeWriter, isDeleting ? 50 : 100); // Speed of typing/deleting
  }
}

// Start the typewriter effect
typeWriter();

// Toggle mobile menu
  document.getElementById('menu-icon').addEventListener('click', function () {
      const navbar = document.querySelector('.navbar');
      navbar.classList.toggle('active');
  });

// Initialize EmailJS
(function(){
  emailjs.init("4_azlP0JLiOfn1Y8Z"); // Replace with your EmailJS user ID
})();

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission

  // Collect form data
  const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      phone: document.getElementById("phone").value,
      message: document.getElementById("message").value
  };

  // Send email using EmailJS
  emailjs.send("service_2qnwl0m", "template_x0znaf2", formData)
  .then(function(response) {
      alert("Message sent successfully!");
      document.getElementById("contactForm").reset(); // Clear form
  }, function(error) {
      alert("Failed to send message. Please try again.");
  });
});


// Disable right-click
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

// Disable keyboard shortcuts for developer tools
document.addEventListener("keydown", function (e) {
  // Disable F12, Ctrl+Shift+I, Ctrl+U, etc.
  if (
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && e.key === "I") ||
    (e.ctrlKey && e.key === "u")
  ) {
    e.preventDefault();
  }
});
