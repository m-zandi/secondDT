// Function to check if the element is fully in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Get the elements to animate
// --product animation element--
const productElement = document.querySelector('.product');

const productIntroElement = document.querySelector('.productIntro');

const productTitleElement = document.querySelector('.productTitle');

const productDetailsElement = document.querySelector('.productDetails');
// -portfolio animation elemets-

const portfolioElement = document.querySelector('.portfolio');

const portfolioSloganElement = document.querySelector('.portfolioSlogan');

const mainElement = document.querySelector('.aboutImage');

const animElement1 = document.querySelector('.yearsWork');
const animElement2 = document.querySelector('.successRate');
const animElement3 = document.querySelector('.satisfiedClients');
const animElement4 = document.querySelector('.yearsWork  span:nth-child(2)');
const animElement5 = document.querySelector('.successRate  span:nth-child(2)');
const animElement6 = document.querySelector('.satisfiedClients  span:nth-child(2)');

// Check if the elements are in the viewport
function checkVisibility() {
    if (isElementInViewport(mainElement)) {
        animElement1.classList.add('visible');
    }
    if (isElementInViewport(mainElement)) {
        animElement2.classList.add('visible');
    }
    if (isElementInViewport(mainElement)) {
        animElement3.classList.add('visible');
    }
    if (isElementInViewport(mainElement)) {
        animElement4.classList.add('visible');
    }
    if (isElementInViewport(mainElement)) {
        animElement5.classList.add('visible');
    }
    if (isElementInViewport(mainElement)) {
        animElement6.classList.add('visible');
    }
    if (isElementInViewport(portfolioElement)) {
        portfolioSloganElement.classList.add('visible');
    }

    // product part
    if (isElementInViewport(productIntroElement)) {
        productIntroElement.classList.add('visible');
    
    }
    if (isElementInViewport(productTitleElement)) {
        productTitleElement.classList.add('visible');
    
    }
    if (isElementInViewport(productDetailsElement)) {
        productDetailsElement.classList.add('visible');
    
    }



}

// Listen for scroll events and check visibility
window.addEventListener('scroll', checkVisibility);

// Initial check in case the elements are already in view on page load
checkVisibility();
