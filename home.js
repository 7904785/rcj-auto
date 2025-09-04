document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector('.fade-slider');
  const slides = slider.querySelectorAll('.slide');
  const prev = slider.querySelector('.prev');
  const next = slider.querySelector('.next');
  const dotsContainer = slider.querySelector('.dots');

  let currentIndex = 0;

  // Create dots dynamically
  slides.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.dataset.index = index;
    dotsContainer.appendChild(dot);
  });

  const dots = slider.querySelectorAll('.dot');

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
      dots[i].classList.toggle('active', i === index);
    });
    currentIndex = index;
  }

  function nextSlide() {
    const newIndex = (currentIndex + 1) % slides.length;
    showSlide(newIndex);
  }

  function prevSlide() {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(newIndex);
  }

  next.addEventListener('click', nextSlide);
  prev.addEventListener('click', prevSlide);

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const index = parseInt(dot.dataset.index);
      showSlide(index);
    });
  });

  // Initial load
  showSlide(currentIndex);

  // Optional: autoplay every 5 seconds
  setInterval(nextSlide, 5000);
});


// video slider
document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector('.video-slider');
    const slides = slider.querySelectorAll('.slide');
    const prev = slider.querySelector('.prev');
    const next = slider.querySelector('.next');
    const dotsContainer = slider.querySelector('.dots');

    let currentIndex = 0;
    let autoSlideInterval;

    // Create dots dynamically
    slides.forEach((_, index) => {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      dot.dataset.index = index;
      dotsContainer.appendChild(dot);
    });

    const dots = slider.querySelectorAll('.dot');

    function showSlide(index) {
      // Pause all videos
      slides.forEach(slide => {
        const vid = slide.querySelector('video');
        vid.pause();
        slide.classList.remove('active');
      });

      // Activate the chosen slide
      slides[index].classList.add('active');
      dots.forEach(dot => dot.classList.remove('active'));
      dots[index].classList.add('active');

      currentIndex = index;
    }

    function nextSlide() {
      const newIndex = (currentIndex + 1) % slides.length;
      showSlide(newIndex);
    }

    function prevSlide() {
      const newIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(newIndex);
    }

    function startAutoSlide() {
      stopAutoSlide(); // clear any old interval
      autoSlideInterval = setInterval(nextSlide, 8000);
    }

    function stopAutoSlide() {
      clearInterval(autoSlideInterval);
    }

    next.addEventListener('click', () => {
      nextSlide();
      startAutoSlide();
    });

    prev.addEventListener('click', () => {
      prevSlide();
      startAutoSlide();
    });

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        const index = parseInt(dot.dataset.index);
        showSlide(index);
        startAutoSlide();
      });
    });

    // Watch video play/pause state
    slides.forEach(slide => {
      const vid = slide.querySelector('video');

      vid.addEventListener('play', () => {
        stopAutoSlide(); // stop when user plays
      });

      vid.addEventListener('pause', () => {
        startAutoSlide(); // resume when paused
      });

      vid.addEventListener('ended', () => {
        startAutoSlide(); // resume when video ends
        nextSlide();      // jump to next slide automatically
      });
    });

    // Initial load
    showSlide(currentIndex);
    startAutoSlide();
  });