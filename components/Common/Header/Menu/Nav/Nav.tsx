import Link from 'next/link';
import React from 'react';
import styles from './Nav.module.scss';

function mouseEnterAnimation(e: React.MouseEvent) {
    const thisLi = e.target as HTMLAnchorElement;
    thisLi.style.color = "pink";
}

function mouseLeaveAnimation(e: React.MouseEvent) {
    const thisLi = e.target as HTMLAnchorElement;
    thisLi.style.color = "white";
}

const linkProperties = {
    onMouseEnter: mouseEnterAnimation,
    onMouseLeave: mouseLeaveAnimation
}

const linkStyles = {
    textDecoration: "none",
    color: "white"
}

function Nav() {

    return (
        <div className={styles.Nav}>
            <nav>
                <ul>
                    <li>
                        <Link href="/about" style={linkStyles} {...linkProperties}>About</Link>
                    </li>
                    <li>
                        <Link href="/blog" style={linkStyles} {...linkProperties}>Blog</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;
