import PropTypes from 'prop-types';

const ButtonCustom = ({ style, classes, btnClassType, onClick, type, text }) => {
    const classType = btnClassType == 'navy' ? 'btn btn-navy' : 'btn btn-primary';

    return(
        <button
            type={type}
            style={style}
            className={classes ? `${classType} ${classes}` : `${classType}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
}

ButtonCustom.defaultProps = {
    type: 'button',
    text: 'Button'
}

export default ButtonCustom;