import PropTypes from 'prop-types';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ButtonLink = ({ style, classes, btnClassType, href, text, icon }) => {
    const classType = btnClassType == 'navy' ? 'btn btn-navy' : 'btn btn-primary';

    return(
        <Link href={href}>
            <a
                style={style}
                className={classes ? `${classType} ${classes}` : `${classType}`}
            >
                {icon && <i className='mr-2'><FontAwesomeIcon icon={icon} /></i>}
                <span className='d-inline-block'>{text}</span>
            </a>
        </Link>
    );
}

ButtonLink.defaultProps = {
    href: '#',
    text: 'Button Link'
}

export default ButtonLink;