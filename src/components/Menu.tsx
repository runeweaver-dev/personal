import react from 'react';
import { Link } from 'react-router-dom';
import '../styles/Menu.scss';
import Nav from './Nav';
import Title from './Title';

function Menu(){
    return (
        <div className="Menu">
            <Link to="/" style={{ textDecoration: 'none' }}>
                <Title />
            </Link>
            <Nav />
        </div>
    )
}

export default Menu;