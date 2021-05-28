import { FormControl } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Input = ({ style, type, placeholder, value, onChange, ...rest }) => {
    return(
        <FormControl
            type={type}
            placeholder={placeholder}
            value={value}
            style={style}
            onChange={onChange}
            {...rest}
        >
        </FormControl>
    );
}

Input.defaultProps = {
    type: 'text'
}

export default Input;