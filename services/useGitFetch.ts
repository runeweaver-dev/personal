import { useEffect, useState } from 'react';

function useGitFetch() {
    const [repos, setRepos] = useState([]);
    const [error, setError]: any = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function getGithubData() {

            if(process.env.NEXT_PUBLIC_DISABLE_GIT_COMPONENT == "true"){
                setError("Disabled for local env");
                return;
            }

            let cachedData = localStorage.getItem("repoData");

            if (cachedData) {
                let parsedData = JSON.parse(cachedData);

                let shouldGetNewData = (Date.now() - parsedData.timeCached) > 600000

                if (!shouldGetNewData && parsedData.repos) {
                    setRepos(parsedData.repos);
                    setLoading(false);

                    return;
                }
            }
            
            try {
                const response = await fetch(`api/getRepoData/3`);
                const json = await response.json();
                setRepos(json);
                createCacheRepoData(json);
            } catch (e) {
                setError(e);
            } finally {
                setLoading(false);
            }
        }

        getGithubData();

    }, []);

    return { repos, loading, error };
}

function createCacheRepoData(json: any) {

    const repoData = {
        repos: json,
        timeCached: Date.now()
    };

    localStorage.setItem("repoData", JSON.stringify(repoData));
}

export default useGitFetch;
