import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { InputGroup } from 'react-bootstrap';
import Input from '../../atomics/Form/Input';

const FormGroupIcon = ({ icon, classes, style, textLabel, children }) => {
    return(
        <InputGroup className={classes} style={style}>
            {textLabel && <Label text={textLabel} />}
            <InputGroup.Prepend>
                <InputGroup.Text>
                    <i><FontAwesomeIcon icon={icon ? icon : faMapMarkedAlt} /></i>
                </InputGroup.Text>
            </InputGroup.Prepend>
            {children}
        </InputGroup>
    );
}

export default FormGroupIcon;