import PropTypes from 'prop-types';
import { FormControl } from 'react-bootstrap';

const Range = ({ style, value, min, max, onChange, defaultVal, ...rest }) => {
    return (
        <FormControl
            type='range'
            value={value}
            defaultValue={defaultVal}
            min={min}
            max={max}
            style={style}
            onChange={onChange}
            {...rest}
        >
        </FormControl>
    )
}

Range.defaultProps = {
    min: 0,
    max: 1000000000,
    defaultVal: 0
}

export default Range
