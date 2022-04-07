import react from 'react';
import InnerHeader from '../innerHeader/InnerHeader';
import NameSection from '../nameSection/NameSection';
import './Header.scss';

function Header(){
    return (
        <div className="Header">
            <InnerHeader />
            <NameSection />
        </div>
    )
}

export default Header;