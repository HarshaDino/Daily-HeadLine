const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0dc07123bdc547c49beaf5837c248d51`
fetch(url).then((res) => {
    return res.json()
    }).then((data) => {
    console.log(data)
    const articles = data.articles
    const container = document.getElementById('container')

    articles.forEach((article) => {
    const newsItem = document.createElement("div")
    newsItem.className ="news"

    newsItem.innerHTML = 
    `<h3>${article.title}</h3>
    <p>${article.description}</p>
    <img src=${article.urlToImage} width="500" height="250">`
    container.appendChild(newsItem)
    })
})

const toggleBtn = document.querySelector('.ddbtn');
    const dropdown = document.querySelector('.dropdown');

    toggleBtn.addEventListener('click', () => {
      dropdown.style.display = 
        dropdown.style.display === 'block' ? 'none' : 'block';
    });