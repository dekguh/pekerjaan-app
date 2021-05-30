const Label = ({ type, text, ...rest }) => {
    return (
        <label className={`label__custom ${type}`} {...rest}>
            {text}
        </label>
    )
}

export default Label
