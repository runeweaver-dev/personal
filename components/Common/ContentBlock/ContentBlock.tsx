import './ContentBlock.scss';

function ContentBlock(props: IContentBlockProps){
    return (
        <div className="ContentBlock">
            <div className="contentBlockHeader">
                <h3>
                    {props.header}
                </h3>
                <p>Published: {props.date}</p>
            </div>
            <div className="contentBlockContent">
                {props.content}
            </div>
        </div>
    );
}

export interface IContentBlockProps {
    header: string,
    date: string,
    content: string
}

export default ContentBlock;
