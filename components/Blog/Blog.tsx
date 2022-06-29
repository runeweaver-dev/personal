import useGetArticles from "../services/useGetArticles"

function Blog(){

    const { articles, loading, error } = useGetArticles();

  if(error){
      return (<h1>Articles could not be loaded</h1>);
  }

  if(loading){
      return (<h1>Loading..</h1>);
  }

  console.log(articles);

  return (
    <div className="Repos">
      <h2>Articles</h2>
      {articles.map((article: any) => (
        <div>
            <h1>{article.attributes.Title}</h1>
            <p>{article.attributes.Content}</p>
        </div>
      ))}
    </div>
  )
}

export default Blog
