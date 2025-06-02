
        const slides = document.querySelectorAll('.slide');
        const carousel = document.querySelector('.carousel');
        const indicatorsContainer = document.querySelector('.indicators');
        const slideCount = slides.length;
        let currentIndex = 0;
        let interval;

        for (let i = 0; i < Math.ceil(slideCount / 3); i++) {
            const dot = document.createElement('div');
            dot.classList.add('indicator');
            if (i === 0) dot.classList.add('active');
            dot.setAttribute('data-index', i);
            dot.addEventListener('click', () => goToSlide(i));
            indicatorsContainer.appendChild(dot);
        }
        
        function updateIndicators() {
            document.querySelectorAll('.indicator').forEach(dot => dot.classList.remove('active'));
            document.querySelector(`.indicator[data-index="${currentIndex}"]`).classList.add('active');
        }

        function goToSlide(index) {
            currentIndex = index;
            carousel.style.transform = `translateX(-${100 * index}%)`;
            updateIndicators();
            restartAutoSlide();
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % Math.ceil(slideCount / 3);
            goToSlide(currentIndex);
        }

        function startAutoSlide() {
            interval = setInterval(nextSlide, 10000);
        }

        function restartAutoSlide() {
            clearInterval(interval);
            startAutoSlide();
        }

        startAutoSlide();















        