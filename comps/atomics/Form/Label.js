import { FormLabel } from 'react-bootstrap';

const Label = ({style, text}) => {
    return(
        <FormLabel style={style}>{text}</FormLabel>
    );
}

export default Label;