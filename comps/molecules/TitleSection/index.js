import { Col, Row } from "react-bootstrap"
import Title from "../../atomics/Title"

const TitleSection = ({ style, classes, heading, titleBorder, title, description }) => {
    return (
        <div style={style} className={classes ? `title__section ${classes}` : 'title__section'}>
            <Row>
                <Col md='6'>
                    <Title component={heading}>
                        <span className='styled'>{titleBorder}</span> {title}
                    </Title>
                </Col>

                <Col md='6'>
                    <p className='mb-0'>{description}</p>
                </Col>
            </Row>
        </div>
    )
}

export default TitleSection
