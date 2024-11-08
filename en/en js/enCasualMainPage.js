// Select the floating image element
const floatingImage = document.getElementById('floatingImageDiv');
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
let lastScrollY = window.scrollY;

// Function to show or hide the button based on scroll position
function handleScroll() {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 300) { // Show button after scrolling down 300px
        floatingImage.style.opacity = '1'; // Show the button
    } else {
        floatingImage.style.opacity = '0'; // Hide the button
    }

    lastScrollY = currentScrollY;
}

// Custom scroll-to-top function
function customScrollToTop(speed) {
    const scrollStep = Math.PI / (speed / 15); // Adjusting this value changes speed
    const cosParameter = window.scrollY / 2;
    let scrollCount = 0;
    let scrollMargin;

    function step() {
        if (window.scrollY !== 0) {
            requestAnimationFrame(step);
            scrollCount += 1;
            scrollMargin = cosParameter - cosParameter * Math.cos(scrollCount * scrollStep);
            window.scrollTo(0, window.scrollY - scrollMargin);
        }
    }
    requestAnimationFrame(step);
}

// Event listener for the button click
scrollToTopBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default anchor behavior

    customScrollToTop(1000000); // Pass the desired scroll speed in milliseconds
});

// Add scroll event listener to trigger the show/hide function
window.addEventListener('scroll', handleScroll);
