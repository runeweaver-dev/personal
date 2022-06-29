import react from 'react';
import ContentBlock, { IContentBlockProps } from './ContentBlock';
import '../styles/ContentBlockContainer.scss';

export default function ContentBlockContainer(props: IContentBlockContainerProps){
    return (
        <div className="ContentBlockContainer">
            {
                props.contentBlocks.map(contentBlock => (
                    <ContentBlock {...contentBlock} />
                ))
            }
        </div>
    );
}

export interface IContentBlockContainerProps {
    contentBlocks: IContentBlockProps[]
}