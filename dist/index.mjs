function index () {
  window.addEventListener('load', () => {
    const anims = [];
    const elems = document.querySelectorAll('.fadeIn');

    // Create an Intersection Observer instance
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        const el = entry.target;
        if (entry.isIntersecting) {
          el.classList.add('visible');
          anims.splice(anims.indexOf(el), 1);
          if (anims.length === 0) {
            observer.disconnect();
          }
        }
      });
    });

    // We're now ready to show fade in effects, so add the class to the body
    document.body.classList.add('fade-active');

    function isElementAboveTheFold (element) {
      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Check if the element's top is within the viewport
      return rect.top < viewportHeight
    }

    elems.forEach((e) => {
      if (!isElementAboveTheFold(e)) {
        anims.push(e);
        observer.observe(e); // Start observing each element
      }
    });

    function render () {
      let af;
      if (anims.length > 0) {
        af = requestAnimationFrame(render);
      } else if (af) {
        cancelAnimationFrame(af);
      }
    }
    render();
  });
}

export { index as default };
