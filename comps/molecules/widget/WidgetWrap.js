import Title from "../../atomics/Title"

const WidgetWrap = ({ style, title, children }) => {
    return (
        <div className='widget__wrap' style={style}>
            <div className='widget__wrap-title'>
                <Title component='h4' classes='mb-0'>
                    <span>{title}</span>
                </Title>
            </div>

            <div className='widget__wrap-content'>
                {children}
            </div>
        </div>
    )
}

export default WidgetWrap
