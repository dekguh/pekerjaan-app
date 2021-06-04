import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Button from '../../atomics/Button';
import ButtonLink from '../../atomics/ButtonLink';
import NavLogo from '../../atomics/navbar/NavLogo';
import NavList from '../../molecules/navbar/NavList';

const Navbar = () => {
    const [navbarShow, setNavbarShow] = useState(false);
    const listNavbar = [
        { link: '/', text: 'Beranda' },
        { link: '/jobs', text: 'Lowongan' },
        { link: '#', text: 'Tentang Kami' },
        { link: '#', text: 'Hubungi Kami' },
    ]

    const handleToggleNav = e => {
        if(navbarShow) return setNavbarShow(false);
        if(!navbarShow) return setNavbarShow(true);
    }
    return (
        <>
            <div className='navbar__wrapper'>
                <div className='navbar__custom'>
                    <div className='navbar__custom-logo-wrap'>
                        <NavLogo />
                    </div>

                    <div className='navbar__custom-list-wrap'>
                        <NavList
                            onClickToggle={handleToggleNav}
                            list={listNavbar} classes={navbarShow ? 'showing' : ''}
                        />
                    </div>

                    <div className='navbar__custom-button-wrap'>
                        <ButtonLink href='#' text='Temukan' icon={faSearch} />
                    </div>

                    <div className='navbar__custom-toggle-wrap'>
                        <Button text='Menu' icon={faBars} onClick={handleToggleNav} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
