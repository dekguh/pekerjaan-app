import Link from 'next/link';
import Button from '../../atomics/Button';
import NavItem from '../../atomics/navbar/NavItem';
import NavLogo from '../../atomics/navbar/NavLogo';

const NavList = ({ list, classes, onClickToggle }) => {
    return (
        <ul className={classes ? `navbar__custom-list ${classes}` : 'navbar__custom-list'}>
            <li className='navbar__custom-item-logo'>
                <NavLogo />
            </li>
            {list && list.map((data, i) => (
                <NavItem key={i} link={data.link} text={data.text} />
            ))}
            <li className='navbar__custom-item-contact'>
                <p>memiliki pertanyaan? hubungi kami langsung <Link href='#'><a>disini</a></Link></p>
                <div className='text-center margin-top-10'>
                    <Button text='tutup' onClick={onClickToggle} />
                </div>
            </li>
        </ul>
    )
}

export default NavList
