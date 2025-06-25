
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navbarContainer = document.querySelector('.navbar-container');
    
    if (menuToggle && navbarContainer) {
      menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        navbarContainer.classList.toggle('active');
      });
      
      // Close menu when clicking outside
      document.addEventListener('click', function(event) {
        const isClickInsideMenu = navbarContainer.contains(event.target);
        const isClickOnToggle = menuToggle.contains(event.target);
        
        if (!isClickInsideMenu && !isClickOnToggle && navbarContainer.classList.contains('active')) {
          menuToggle.classList.remove('active');
          navbarContainer.classList.remove('active');
        }
      });
    }
  });
  document.addEventListener('DOMContentLoaded', () => {

    // --- Intersection Observer for Scroll Animations ---
    const sectionsToAnimate = document.querySelectorAll('.animate-on-scroll');

    if (sectionsToAnimate.length > 0) { // Check if elements exist
        const observerOptions = {
            root: null, // relative to document viewport
            rootMargin: '0px',
            threshold: 0.1 // Trigger when 10% of the element is visible
        };

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // Stop observing once visible
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sectionsToAnimate.forEach(section => {
            observer.observe(section);
        });
    }

    // --- Add other JavaScript functionalities below ---
    // e.g., Mobile menu toggle, accordion logic, etc.

    // Example: Mobile Menu Toggle (if you have one like in the HTML)
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navbarContainer = document.querySelector('.navbar-container');

    if (menuToggle && navbarContainer) {
        menuToggle.addEventListener('click', () => {
            navbarContainer.classList.toggle('active'); // You'll need CSS for .navbar-container.active
            menuToggle.classList.toggle('is-active'); // Style the toggle button itself
        });
    }

}); 
// End DOMContentLoaded
  
  