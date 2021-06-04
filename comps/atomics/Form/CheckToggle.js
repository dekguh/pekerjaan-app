import { ToggleButton } from 'react-bootstrap';

const CheckToggle = ({ type, checked, value, text, ...rest }) => {
    return (
        <ToggleButton
        className="form__control-check-toggle"
        id='toggle-check'
        type={type}
        variant="outline-primary"
        checked={checked}
        value={value}
        {...rest}
      >
        {text}
      </ToggleButton>
    )
}

CheckToggle.defaultProps = {
    type: 'checkbox',
    checked: true
}

export default CheckToggle
