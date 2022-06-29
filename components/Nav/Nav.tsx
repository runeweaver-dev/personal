import Link from 'next/link';
import React from 'react';
import styles from './Nav.module.scss';

function mouseEnterAnimation(e: React.MouseEvent) {
    const thisLi = e.target as HTMLAnchorElement;
    thisLi.style.color = "pink";
}

function mouseLeaveAnimation(e: React.MouseEvent) {
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

function Nav() {

    return (
        <div className={styles.Nav}>
            <nav>
                <ul>
                    <li>
                        <Link href="/about" style={linkStyles}><a {...linkProperties}>About</a></Link>
                    </li>
                    <li>
                        <Link href="/blog" style={linkStyles}><a {...linkProperties}>Blog</a></Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;
