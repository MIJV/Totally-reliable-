// Load news articles
fetch('(link unavailable)')
	.then(response => response.json())
	.then(data => {
		const newsContainer = document.querySelector('.news-container');
		data.articles.forEach(article => {
			const newsArticle = document.createElement('div');
			newsArticle.classList.add('news-article');
			const h3 = document.createElement('h3');
			h3.textContent = article.title;
			const p = document.createElement('p');
			p.textContent = article.description;
			newsArticle.appendChild(h3);
			newsArticle.appendChild(p);
			newsContainer.appendChild(newsArticle);
		});

		const themeToggle = document.getElementById('theme-toggle');
		themeToggle.addEventListener('click', () => {
			document.body.classList.toggle('dark-theme');
		})
			.catch(error => console.error(error)); 
