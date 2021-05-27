import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const ButtonCustom = ({ style, classes, btnClassType, onClick, type, text, icon }) => {
    const classType = btnClassType == 'navy' ? 'btn btn-navy' : 'btn btn-primary';

    return(
        <button
            type={type}
            style={style}
            className={classes ? `${classType} ${classes}` : `${classType}`}
            onClick={onClick}
        >
            {icon && <i className='mr-2'><FontAwesomeIcon icon={icon} /></i>}
            <span className='d-inline-block'>{text}</span>
        </button>
    );
}

ButtonCustom.defaultProps = {
    type: 'button',
    text: 'Button'
}

export default ButtonCustom;