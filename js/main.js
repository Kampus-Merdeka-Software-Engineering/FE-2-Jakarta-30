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
// document.querySelector('.inline').addEventListener('click', () => {
//   document.querySelector('.inline input').classList.toggle('red')
// })

// // // // Function to fetch news from the API
async function fetchNews() {
  const apiUrl = `https://newsapi.org/v2/everything?domains=wsj.com&pageSize=21&apiKey=d3d925f2f29d43149491530eab2d51b4`;


  try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data)
      if (data.status === 'ok') {
          return data.articles;
      } else {
          console.error('Error fetching news:', data.message);
          return [];
      }
  } catch (error) {
      console.error('Error fetching news:', error);
      return [];
  }
}

// Function to display news articles
async function displayNews() {
  const mainContent = document.querySelector('.little-wraper');
  const newsData = await fetchNews();
  console.log(newsData)

  // Clear existing content
  mainContent.innerHTML = '';

  // Check if there are articles to display
  if (newsData.length === 0) {
      mainContent.innerHTML = '<p>No news available at the moment.</p>';
      return;
  }

  // Loop article
  newsData.forEach((articleData) => {
      const article = document.createElement('div');
      article.className = ("little-content")
      article.innerHTML = `
      <div class="recommendation-item">
          <div class="image-container">
      <img src="${articleData.urlToImage}" alt="Recommendation 3">
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

// Display news when the page loads
window.onload = displayNews;



