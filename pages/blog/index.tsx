import useGetArticles from "../../services/useGetArticles";

function Blog(){

    const { articles, loading, error } = useGetArticles();

    if(loading){
        return (<h2>Loading...</h2>);
    }

    if(error){
        return (<h2>Error</h2>);
    }

    return (<>
        {articles.map((article: any) => (<div>{article.attributes.Title}</div>))}
    </>);
}

export default Blog;
