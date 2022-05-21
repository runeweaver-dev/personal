import React, { useState, useEffect } from "react";
import '../styles/Home.scss';
import { IContentBlockProps } from './ContentBlock';
import ContentBlockContainer, { IContentBlockContainerProps } from './ContentBlockContainer';

const homeBlockContent: IContentBlockProps = {
    header: "Understanding State Machines",
    date: "01/01/2020",
    content: "This is some content, and here is some more.. oooh I'm just full of the ol' content today, ain't I?"
}

const secondTest: IContentBlockProps = {
    header: "Aw hello num nums",
    date: "06/04/2022",
    content: "Hey lil monkey"
}

const contentBlockContainerProps = {
    contentBlocks: [
        homeBlockContent,
        secondTest
    ]
} as IContentBlockContainerProps;

function Home(){
    const [githubData, setGithubData] = useState([]);
    const [repos, setRepos] = useState([]);
    const [error, setError] : any = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getGithubData(){
            try {
                const response = await fetch("https://api.github.com/users/runeweaver-dev/repos");
                const json = await response.json();
                console.log(json);
                setRepos(json);
            }catch(e){
                setError(e)
            }finally{
                setLoading(false)
            }
        }
        getGithubData();
    }, []);

    if(error){
        return (<h1>Could not load repos</h1>);
    } 

    return (
        <div className="Page Home">
            <ContentBlockContainer {...contentBlockContainerProps} />
            <div>
                
            </div>
        </div>
    )
}

export default Home;
