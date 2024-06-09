// Add functionality here (e.g., Accordion for lesson content)

const lessonContent = document.querySelector('.lesson-content');

lessonContent.style.display = 'none'; // Initially hide content

const lessonTitle = document.querySelector('h2');

lessonTitle.addEventListener('click', () => {
  if (lessonContent.style.display === 'none') {
    lessonContent.style.display = 'block';
  } else {
    lessonContent.style.display = 'none';
  }
});

// Add similar functionality for toggling code editor visibility (if desired)


const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});
