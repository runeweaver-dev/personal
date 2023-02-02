import { useEffect, useState } from 'react'

function useGitFetch() {
    const [repos, setRepos] = useState([])
    const [error, setError]: any = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        async function getGithubData() {

            if(process.env.NEXT_PUBLIC_DISABLE_GIT_COMPONENT == "true"){
                setError("Disabled for local env")
                return
            }

            if(process.env.NEXT_PUBLIC_DISABLE_CACHE == "false"){

                let cachedData = localStorage.getItem("repoData")

                if (cachedData) {
                    let parsedData = JSON.parse(cachedData)

                    let shouldGetNewData = (Date.now() - parsedData.timeCached) > 600000

                    if (!shouldGetNewData && parsedData.repos) {
                        setRepos(parsedData.repos)
                        setLoading(false)

                        return
                    }
                }
            }

            try {
                const response = await fetch(`api/get-repo-data/3`)
                const reposJson = await response.json()

                for(let x = 0; x < reposJson.length; x++){
                    const response = await fetch(`api/get-commit-data/${reposJson[x]["name"]}`)
                    const commitsJson = await response.json()
                    reposJson[x]["commit_data"] = commitsJson
                }

                setRepos(reposJson)
                
                createCacheRepoData(reposJson)
            } catch (e) {
                setError(e)
            } finally {
                setLoading(false)
            }
        }

        getGithubData()

    }, [])

    return { repos, loading, error }
}

function createCacheRepoData(json: any) {

    const repoData = {
        repos: json,
        timeCached: Date.now()
    }

    localStorage.setItem("repoData", JSON.stringify(repoData))
}

export default useGitFetch
