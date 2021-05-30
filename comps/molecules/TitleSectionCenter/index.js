import Title from "../../atomics/Title"

const TitleSectionCenter = ({ style, classes, heading, titleBorder, title, description }) => {
    return (
        <div style={style} className={classes ? `title__section-center ${classes}` : 'title__section-center'}>
            <Title component={heading}>
                <span className='styled'>{titleBorder}</span> {title}
            </Title>
            {description && <p className='mb-0'>
                {description}
            </p>}
        </div>
    )
}

export default TitleSectionCenter
