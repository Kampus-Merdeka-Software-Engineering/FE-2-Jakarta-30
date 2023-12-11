async function fetchNews() {
    try {
      const response = await fetch('http://localhost:8000/photo', {
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
    const mainContent = document.querySelector('.containt');
  
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
        article.className = ("post")
        article.innerHTML = `
        <div class="post-thumb">
			<img src="${articleData.urlToImage}" alt="" class="post-img">
		</div>
		<div class="post-info">
			<h3 class="post-title"><a href="${articleData.url}">${articleData.title}</a></h3>
			<p class="post-body">
            ${articleData.description}
			</p>
		</div>
        `;
      mainContent.appendChild(article);
    });
  }
  
  // Call the fetchNews function to get data and display it when the page loads
  window.onload = fetchNews;
  
  