import PropTypes from 'prop-types';
import { FormControl } from 'react-bootstrap';

const Range = ({ style, value, min, max, onChange, ...rest }) => {
    return (
        <FormControl
            type='range'
            value={value}
            min={min}
            max={max}
            style={style}
            onChange={onChange}
            {...rest}
        >
        </FormControl>
    )
}

export default Range
