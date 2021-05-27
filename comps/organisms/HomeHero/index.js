import { Col, Container, Row } from "react-bootstrap";
import Dotted from "../../atomics/Shape/Dotted";
import ContentLeft from "../../molecules/HomeHero/ContentLeft";
import ContentRight from "../../molecules/HomeHero/ContentRight";

const HomeHero = () => {
    return (
        <div className='hero__wrapper'>
            <Dotted
                style={{
                    position: 'absolute',
                    bottom: '0',
                    right: '0',
                    width: '180px',
                }}
                classes='anim-shape-dotted-hero'
            />
            <Container>
                <Row className='align-items-center'>
                    <Col lg={6}>
                        <ContentLeft />
                    </Col>

                    <Col lg={6}>
                        <ContentRight />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HomeHero
