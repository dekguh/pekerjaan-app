import Label from '../../atomics/Form/Label';

const FormGroup = ({ style, classes, textLabel, children }) => {
    return(
        <div style={style} className={classes}>
            {textLabel && <Label text={textLabel} />}
            {children}
        </div>
    );
}

export default FormGroup;