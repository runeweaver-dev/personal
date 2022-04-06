import react from 'react';
import InnerHeader from './InnerHeader';
import NameSection from './NameSection';
import '../styles/Header.scss';

function Header(){
    return (
        <div className="Header">
            <InnerHeader />
            <NameSection />
        </div>
    )
}

export default Header;