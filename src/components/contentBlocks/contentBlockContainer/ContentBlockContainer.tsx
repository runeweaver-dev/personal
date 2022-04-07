import react from 'react';
import ContentBlock, { IContentBlockProps } from '../contentBlock/ContentBlock';
import './ContentBlockContainer.scss';

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