
// ------ move upper transition ------

// Select the floating image element
const floatingImage = document.getElementById('floatingImageDiv');
let lastScrollY = 500;


// Function to show or hide the image based on scroll direction
function handleScroll() {
    const currentScrollY = window.scrollY;

    // Check if scrolling down and past a certain threshold (e.g., 100px)
    if (currentScrollY > 10 || currentScrollY > lastScrollY) {
        floatingImage.style.opacity = '1'; // Show the image
    } else {
        floatingImage.style.opacity = '0'; // Hide the image
    }

    lastScrollY = currentScrollY;
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);