let slideIndex = 0;
showSlides(slideIndex);

function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    const indicators = document.getElementsByClassName("indicator");
    const totalSlides = slides.length;

    if (n >= totalSlides) {
        slideIndex = 0; // Loop to the first slide
    }
    if (n < 0) {
        slideIndex = totalSlides - 1; 
    }

    for (let i = 0; i < totalSlides; i++) {
        slides[i].classList.remove("active", "prev", "next");
        indicators[i].classList.remove("active");
    }

    slides[slideIndex].classList.add("active"); // Current slide
    slides[(slideIndex - 1 + totalSlides) % totalSlides].classList.add("prev"); // Previous slide
    slides[(slideIndex + 1) % totalSlides].classList.add("next"); // Next slide

    indicators[slideIndex].classList.add("active");
}

// Function to change slides
function currentSlide(n) {
    showSlides(slideIndex += n);
}

// Timer for automatic slide change
setInterval(() => {
    currentSlide(1);
}, 4000);

// Dragging functionality for slideshow
const slidesContainer = document.querySelector('.slideshow-container');
let isDragging = false;
let startX;

slidesContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const deltaX = e.clientX - startX;
        if (deltaX > 50) { // Dragged right
            currentSlide(-1);
            isDragging = false; // Reset dragging
        } else if (deltaX < -50) { // Dragged left
            currentSlide(1);
            isDragging = false; // Reset dragging
        }
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false; // Reset dragging
});
document.addEventListener('DOMContentLoaded', function () {
    // Define the dropdown toggle and dropdown menu
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdown = document.querySelector('.dropdown');
    const discoverLink = document.querySelector('.dropdown-toggle'); // Make sure it's correctly defined

    // Check if elements exist before attaching event listeners
    if (dropdownToggle && dropdown) {
        // Toggle the dropdown when the toggle link is clicked
        dropdownToggle.addEventListener('click', function (event) {
            event.preventDefault();
            dropdown.classList.toggle('show');  // Toggle visibility of the dropdown
            const expanded = discoverLink.getAttribute('aria-expanded') === 'true' || false;
            discoverLink.setAttribute('aria-expanded', !expanded);
            dropdown.setAttribute('aria-hidden', expanded);
        });

        // Close the dropdown if the user clicks outside the dropdown or the toggle
        window.addEventListener('click', function (event) {
            if (!discoverLink.contains(event.target) && !dropdown.contains(event.target)) {
                dropdown.classList.remove('show'); // Hide the dropdown
                discoverLink.setAttribute('aria-expanded', 'false');
                dropdown.setAttribute('aria-hidden', 'true');
            }
        });
    }
});
