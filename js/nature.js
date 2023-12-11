// // // // Function to fetch news from the API
async function fetchNews() {
    const apiUrl = `https://newsapi.org/v2/everything?q=scenery&sortBy=relevancy&pageSize=15&apiKey=d3d925f2f29d43149491530eab2d51b4`;


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
    const mainContent = document.querySelector('.containt');
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

// Display news when the page loads
window.onload = displayNews;
