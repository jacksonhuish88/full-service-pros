function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function fillStars() {
    const starDiv = document.querySelector('.star-rating div');
    let fillPercentage = 0;
    const interval = setInterval(() => {
        if (fillPercentage <= 100) {
            starDiv.style.setProperty('--fill', `${fillPercentage}%`);
            fillPercentage++;  // Increase fill by 1% each interval
        } else {
            clearInterval(interval);  // Stop the interval when 100% is reached
        }
    }, 10);  // Update the fill every 10 milliseconds
}

function checkAndFillStars() {
    const starDiv = document.querySelector('.star-rating div');
    if (isInViewport(starDiv)) {
        fillStars();
        window.removeEventListener('scroll', checkAndFillStars); // Remove event listener after filling
    }
}

// Add event listener for scroll
window.addEventListener('scroll', checkAndFillStars);

// Check on initial load if element is already in view
document.addEventListener('DOMContentLoaded', () => {
    checkAndFillStars(); // Check immediately on load
});
