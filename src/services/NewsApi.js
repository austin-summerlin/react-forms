export const fetchNews = async () => {

  const res = await fetch(`https://newsapi.org/v2/everything?q=news&pageSize=5&apiKey=${process.env.API_KEY}`);
  const { articles } = await res.json();

  return articles.map(article => ({
    title: article.title,
    author: article.author,
    description: article.description,
    url: article.url,
    image: article.urlToImage,
  }));
};

export async function SearchArticles(searchInput) {

  const res = await fetch(`https://newsapi.org/v2/everything?q=${searchInput}&pageSize=5&apiKey=${process.env.API_KEY}`);
  const { articles } = await res.json();

  return articles.map(article => ({
    title: article.title,
    author: article.author,
    description: article.description,
    url: article.url,
    image: article.urlToImage,
  }));
}




