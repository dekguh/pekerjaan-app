const Title = ({ component: Component, classes, text, children, ...rest }) => {
    return (
        <Component
            className={classes ? `title__custom ${classes}` : 'title__custom'}
            {...rest}
        >
            {children}
        </Component>
    )
}

export default Title
