import Nav from './Nav';
import '../styles/InnerHeader.scss';

function InnerHeader(){
    return (
        <div className="InnerHeader">
            <div className="role">
                <h2>Full-Stack Developer</h2>
            </div>
            <Nav />
        </div>
    );
}

export default InnerHeader;
