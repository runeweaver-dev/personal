import react from 'react';
import InnerHeader from './InnerHeader';
import '../styles/Header.scss';
import NameSection from './NameSection';

function Header(){
    return (
        <div className="Header">
            <InnerHeader />
            <NameSection />
        </div>
    )
}

export default Header;