// Add functionality here (e.g., Accordion for lesson content)

const lessonContent = document.querySelector('.lesson-content');
const lessonTitle = document.querySelector('h2');

lessonTitle.addEventListener('click', () => {
  lessonContent.classList.toggle('hidden'); // Use class toggle for better maintainability
});

// Add similar functionality for toggling code editor visibility (if desired)

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});


const categoryLinks = document.querySelectorAll('.course-categories li a');

categoryLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default link behavior

    const parentLi = this.parentElement;
    const subCategories = parentLi.querySelector('.sub-categories');

    // Toggle active class and subcategories visibility
    parentLi.classList.toggle('active');
    subCategories.classList.toggle('active');
  });
});


const searchBar = document.getElementById('search-bar');
const courseList = document.querySelector('.course-categories ul'); // Adjust selector as needed

searchBar.addEventListener('keyup', function() {
  const searchTerm = searchBar.value.toLowerCase();
  const courseItems = courseList.querySelectorAll('li');

  courseItems.forEach(course => {
    const courseTitle = course.querySelector('a').textContent.toLowerCase();
    if (courseTitle.includes(searchTerm)) {
      course.style.display = 'block';
    } else {
      course.style.display = 'none';
    }
  });
});

const progressBar = document.querySelector('.progress-fill');

// Function to update progress bar width
function updateProgress(progress) {
  progressBar.style.width = `${progress}%`;
}

// Update progress based on user actions (replace with your logic)
const lessonCompleted = true; // Example: Update when a lesson is completed

if (lessonCompleted) {
  updateProgress(40); // Update progress to 40%
}

// Local Storage (Optional)

// Store progress data in Local Storage
localStorage.setItem('courseProgress', progress);

// Retrieve progress data from Local Storage on page load
const storedProgress = localStorage.getItem('courseProgress');
if (storedProgress) {
  updateProgress(storedProgress);
}
