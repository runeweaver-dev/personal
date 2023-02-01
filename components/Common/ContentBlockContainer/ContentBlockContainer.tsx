import ContentBlock, { IContentBlockProps } from '@/components/Common/ContentBlock/ContentBlock';
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
