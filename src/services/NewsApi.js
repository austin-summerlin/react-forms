export const fetchNews = async () => {

  const res = await fetch(`https://newsapi.org/v2/everything?q=news&pageSize=5&apiKey=${process.env.REACT_APP_API_KEY}`);
  const json = await res.json();

  return json.articles;
};



export async function SearchArticles(searchInput) {

  const res = await fetch(`https://newsapi.org/v2/everything?q=${searchInput}&pageSize=5&apiKey=${process.env.REACT_APP_API_KEY}`);
  const json = await res.json();

  return json.articles;
}




