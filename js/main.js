// Hamburger menu
document.querySelector('.Open').addEventListener('click', () => {
  document.querySelector('.nav-link').style.display = 'flex';
  document.querySelector('.Open').style.display = 'none';
  document.querySelector('.Close').style.display = 'inline-block'
})

document.querySelector('.Close').addEventListener('click', () => {
  document.querySelector('.nav-link').style.display = 'none';
  document.querySelector('.Open').style.display = 'inline-block';
  document.querySelector('.Close').style.display = 'none'
})

// ................Slide image............
let slideIndex = 0;

    function showSlides() {
        let slides = document.getElementsByClassName("mySlides");
        
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slideIndex++;

        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 5000); 
    }

  showSlides();

// Inline check
document.querySelector('.inline').addEventListener('click', () => {
  document.querySelector('.inline input').classList.toggle('red')
})
