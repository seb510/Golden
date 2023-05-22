const SCROLLED_STATE_CLASS = "scrolled";

const header = document.getElementById('header')

// OnScroll event handler
const onScroll = () => {

    // Get scroll value
    const scroll = document.documentElement.scrollTop

    // If scroll value is more than 0 - means the page is scrolled, add or remove class based on that
    if (scroll > 60) {
        header.classList.add(SCROLLED_STATE_CLASS);
    } else {
        header.classList.remove(SCROLLED_STATE_CLASS)
    }
}

// Use the function
window.addEventListener('scroll', onScroll);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});