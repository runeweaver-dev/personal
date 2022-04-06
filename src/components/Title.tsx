import react from 'react';
import '../styles/Title.scss';

function Title(){
    return (
        <div className="Title">
            <div className="textArea">
                <h1 className="fullName">Cameron Raw</h1>
                <hr />
                <h2 className="subTitle">Full-Stack Developer</h2>
            </div>
        </div>
    )
}

export default Title;