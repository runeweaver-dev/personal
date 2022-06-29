import { Link } from 'react-router-dom';
import '../styles/NameSection.scss';

const linkStyles = {
    textDecoration: "none",
    color: "black"
}

function NameSection(){
    return (
        <div className="NameSection">
            <Link to="/" style={linkStyles}>
            <h1>Cameron Raw</h1>
            </Link>
            <div className="color-line"></div>
            <h2 className="role">Full-Stack Developer</h2>
        </div>
    );
}

export default NameSection;
