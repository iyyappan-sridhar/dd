const stars = document.querySelectorAll('.star');
    const ratingInput = document.getElementById('rating');

    stars.forEach(star => {
      star.addEventListener('click', () => {
        const value = star.getAttribute('data-value');
        ratingInput.value = value;
        stars.forEach(s => s.classList.remove('active'));
        star.classList.add('active');
        for (let i = 0; i < value; i++) {
          stars[i].classList.add('active');
        }
      });
    });
