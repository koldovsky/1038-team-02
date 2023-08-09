const prevButton = document.querySelector('.prev-button-course');
    const nextButton = document.querySelector('.next-button-course');
    const slides = document.querySelectorAll('.courses-offers-sign-up');
    let currentIndex = 0;

    // Функція для переключення до наступного слайда
    function nextSlide() {
        slides[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].style.display = 'block';
    }

    // Функція для переключення до попереднього слайда
    function prevSlide() {
        slides[currentIndex].style.display = 'none';
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        slides[currentIndex].style.display = 'block';
    }

    // Додати обробник для кнопок
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);