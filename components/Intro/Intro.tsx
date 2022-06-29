import '../styles/intro.scss';

function Intro() {
    return (
        <div className="Intro">
            <h2>Intro</h2>
            <div className="intro-card">
                <div className="intro-text">
                    <h1>Hi, I'm Cameron</h1>
                    <p>I'm a fullstack developer, currently based in Barcelona, Spain. </p>
                </div>
                <div className="image-container">
                    <img src="/img/solsiden.jpeg" />
                    <div className="pink-backing"></div>
                    <div className="blue-backing"></div>
                </div>
            </div>
        </div>
    )
}

export default Intro;
