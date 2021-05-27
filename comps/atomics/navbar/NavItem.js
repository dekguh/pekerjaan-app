import Link from 'next/link';

const NavItem = ({ link, text }) => {
    return (
        <li className='navbar__custom-item'>
            <Link href={link}>
                <a className='navbar__custom-link'>{text}</a>
            </Link>
        </li>
    )
}

export default NavItem
