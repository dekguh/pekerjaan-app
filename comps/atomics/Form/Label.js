import { FormLabel } from 'react-bootstrap';

const Label = ({style, text}) => {
    return(
        <FormLabel className='form__label' style={style}>{text}</FormLabel>
    );
}

export default Label;