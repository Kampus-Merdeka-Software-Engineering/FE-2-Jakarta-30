// // Hamburger menu
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

// // Inline check
// // document.querySelector('.inline').addEventListener('click', () => {
// //   document.querySelector('.inline input').classList.toggle('red')
// // })


async function fetchNews() {
  try {
    const response = await fetch('https://erin-difficult-gopher.cyclic.app/recapi', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // You can include additional headers if needed (e.g., authorization token)
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data from the backend API');
    }

    const data = await response.json();
    displayData(data.data.articles); 
  } catch (error) {
    console.error(error.message);
    // Handle errors or show an error message to the user
  }
}

function displayData(newsData) {
  const mainContent = document.querySelector('.little-wraper');

  // Clear existing content
  mainContent.innerHTML = '';

  // Check if there are articles to display
  if (!newsData || newsData.length === 0) {
    mainContent.innerHTML = '<p>No news available at the moment.</p>';
    return;
  }

  // Loop through articles
  newsData.forEach((articleData) => {
    const article = document.createElement('div');
    article.className = 'little-content';
    article.innerHTML = `
      <div class="recommendation-item">
        <div class="image-container">
          <img src="${articleData.urlToImage}" alt="Recommendation Image">
        </div>
        <div class="isi-rekomendasi">
          <a href="${articleData.url}">${articleData.title}</a>
          <span class="date"><i class="fas fa-clock"></i> ${articleData.publishedAt}</span>
        </div>
      </div>
    `;
    mainContent.appendChild(article);
  });
}

// Call the fetchNews function to get data and display it when the page loads
window.onload = fetchNews;