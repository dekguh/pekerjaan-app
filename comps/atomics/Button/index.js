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
            {icon && <i><FontAwesomeIcon icon={icon} /></i>}
            {text && <span className='d-inline-block ml-2'>{text}</span>}
        </button>
    );
}

ButtonCustom.defaultProps = {
    type: 'button'
}

export default ButtonCustom;