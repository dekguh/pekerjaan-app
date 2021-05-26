import PropTypes from 'prop-types';
import Link from 'next/link'

const ButtonLink = ({ style, classes, btnClassType, href, text }) => {
    const classType = btnClassType == 'navy' ? 'btn btn-navy' : 'btn btn-primary';

    return(
        <Link href={href}>
            <a
                style={style}
                className={classes ? `${classType} ${classes}` : `${classType}`}
            >
                {text}
            </a>
        </Link>
    );
}

ButtonLink.defaultProps = {
    href: '#',
    text: 'Button Link'
}

export default ButtonLink;