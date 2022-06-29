import { useEffect, useState } from 'react';

function useGetArticles() {

    const [articles, setArticles] = useState([]);
    const [error, setError]: any = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function getArticles() {

            try {
                const response = await fetch(`api/get-articles`);
                const json = await response.json();
                const articles = json.data;
                setArticles(articles);
            } catch (e) {
                setError(e)
            } finally {
                setLoading(false)
            }
        }

        getArticles();

    }, []);

    return { articles, loading, error };
}

export default useGetArticles;
