export const fetchNews = async () => {

  const res = await fetch('https://newsapi.org/v2/everything?q=news&pageSize=5&apiKey=208ffd5ceeeb4220bf6f3b0693e97d31');
  const { articles } = await res.json();

  return articles.map(article => ({
    title: article.title,
    author: article.author,
    url: article.url,
  }));
};

export async function SearchArticles(searchInput) {

  const res = await fetch(`https://newsapi.org/v2/everything?q=${searchInput}&pageSize=5&apiKey=208ffd5ceeeb4220bf6f3b0693e97d31`);
  const { articles } = await res.json();

  return articles.map(article => ({
    title: article.title,
    author: article.author,
    url: article.url,
  }));
}




