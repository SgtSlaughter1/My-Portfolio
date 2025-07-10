document.addEventListener('DOMContentLoaded', function() {
  // Function to handle read more/less functionality
  function setupReadMore(className, moreTextClass) {
    const readMore = document.querySelector('.' + className);
    const moreText = document.querySelector('.' + moreTextClass);
    if (readMore && moreText) {
      readMore.addEventListener('click', function(e) {
        e.preventDefault();
        if (moreText.classList.contains('d-none')) {
          moreText.classList.remove('d-none');
          readMore.textContent = 'Read Less';
        } else {
          moreText.classList.add('d-none');
          readMore.textContent = 'Read More';
        }
      });
    }
  }

  // Setup all read more functionality
  setupReadMore('nebula-read-more', 'nebula-more-text');
  setupReadMore('edutams-read-more', 'edutams-more-text');
  setupReadMore('ecommerce-read-more', 'ecommerce-more-text');
  setupReadMore('ecommerce2-read-more', 'ecommerce2-more-text');
  setupReadMore('ecommerce3-read-more', 'ecommerce3-more-text');
  setupReadMore('dessert-read-more', 'dessert-more-text');
  setupReadMore('portfolio-read-more', 'portfolio-more-text');
  setupReadMore('conference-read-more', 'conference-more-text');
  setupReadMore('advice-read-more', 'advice-more-text');
  setupReadMore('job-read-more', 'job-more-text');
});


