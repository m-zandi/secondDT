let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const bulletContainer = document.querySelector('.bullet-container');

function updateSlides() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === currentIndex) {
            slide.classList.add('active');
        }
    });

    document.querySelectorAll('.bullet').forEach((bullet, index) => {
        bullet.classList.remove('active');
        if (index === currentIndex) {
            bullet.classList.add('active');
        }
    });

    // Center the active slide
    const slideWidth = slides[0].offsetWidth;
    const containerWidth = document.querySelector('.slideshow-container').offsetWidth;
    const centerOffset = (containerWidth / 2) - (slideWidth / 2);
    
    // Calculate the new transform to center the active slide
    const translateX = -currentIndex * (slideWidth + 20) + centerOffset;
    document.querySelector('.slides').style.transform = `translateX(${translateX}px)`;
}

function createBullets() {
    slides.forEach((_, index) => {
        const bullet = document.createElement('div');
        bullet.classList.add('bullet');
        bullet.addEventListener('click', () => {
            currentIndex = index;
            updateSlides();
        });
        bulletContainer.appendChild(bullet);
    });
}

function addImageClickEvents() {
    slides.forEach((slide, index) => {
        slide.addEventListener('click', () => {
            currentIndex = index;
            updateSlides();
        });
    });
}

createBullets();
addImageClickEvents(); // Add click events to images
updateSlides();


// Auto change image every 3 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlides();
}, 20000);
