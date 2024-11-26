
document.addEventListener('mouseup', () => {
  isDragging = false; // Reset lang
});
document.addEventListener('DOMContentLoaded', function () {
  // yung dropdown toggle
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdown = document.querySelector('.dropdown');
  const discoverLink = document.querySelector('.dropdown-toggle');

  // Check if elements is meron
  if (dropdownToggle && dropdown) {
      // Toggle the dropdown pag pinindot na
      dropdownToggle.addEventListener('click', function (event) {
          event.preventDefault();
          dropdown.classList.toggle('show');  // para makita yung toggle
          const expanded = discoverLink.getAttribute('aria-expanded') === 'true' || false;
          discoverLink.setAttribute('aria-expanded', !expanded);
          dropdown.setAttribute('aria-hidden', expanded);
      });

      // close yung dropdown pag pinindot outside the container
      window.addEventListener('click', function (event) {
          if (!discoverLink.contains(event.target) && !dropdown.contains(event.target)) {
              dropdown.classList.remove('show'); // Hide the dropdown
              discoverLink.setAttribute('aria-expanded', 'false');
              dropdown.setAttribute('aria-hidden', 'true');
          }
      });
  }
});

// Get the modal element
var modal = document.querySelector('.modal');
var modalImg = document.getElementById("modalImage");
var captionText = document.getElementById("caption");
var images = document.querySelectorAll('.lookbook-images img');
var currentIndex = 0;

// Start ng modal pag naclick na yung picture
images.forEach(function(image, index) {
    image.onclick = function() {
        currentIndex = index; // Set the current index
        openModal(this);
    }
});

// Open modal function
function openModal(image) {
    modal.style.display = "block";
    modalImg.src = image.src;
    captionText.innerHTML = image.alt;
}

// Close the modal
function closeModal() {
    modal.style.display = "none";
}

// Change image function for next and previous buttons
function changeImage(direction) {
    currentIndex += direction; // Update the index based on direction
    if (currentIndex < 0) {
        currentIndex = images.length - 1; // Wrap to last image
    } else if (currentIndex >= images.length) {
        currentIndex = 0; // Wrap to first image
    }
    modalImg.src = images[currentIndex].src; // Update modal image
    captionText.innerHTML = images[currentIndex].alt; // Update caption
}

// When the user clicks on <span> (x), close the modal
var closeButton = document.querySelector('.close');
closeButton.onclick = function() {
    closeModal();
}

// When the user presses the Esc key, left arrow or right arrow keys
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeModal(); // Close the modal
    } else if (event.key === "ArrowLeft") {
        changeImage(-1); // Previous image
    } else if (event.key === "ArrowRight") {
        changeImage(1); // Next image
    }
});