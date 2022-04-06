import react from 'react';
import '../styles/Home.scss';
import ContentBlock, { IContentBlockProps } from './ContentBlock';
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
    return (
        <div className="Page Home">
            <ContentBlockContainer {...contentBlockContainerProps} />
        </div>
    )
}

export default Home;