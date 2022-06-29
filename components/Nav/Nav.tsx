import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Nav.scss';
import RouteConfig from '../config/RouteConfig';

function mouseEnterAnimation(e: React.MouseEvent){
    const thisLi = e.target as HTMLAnchorElement;
    thisLi.style.color = "pink";
}

function mouseLeaveAnimation(e: React.MouseEvent){
    const thisLi = e.target as HTMLAnchorElement;
    thisLi.style.color = "black";
}

const linkProperties = {
    onMouseEnter: mouseEnterAnimation,
    onMouseLeave: mouseLeaveAnimation
}

const linkStyles = {
    textDecoration: "none",
    color: "black"
}

function Nav (){

    return(
        <div className="Nav">
            <nav>
                <ul>
                    {
                        RouteConfig.map(route => (
                            <li>
                                <Link to={route.path} {...linkProperties} style={linkStyles}>{route.text}</Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Nav;