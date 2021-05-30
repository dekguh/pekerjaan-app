import { Container, Row, Col } from "react-bootstrap";
import About from "../../molecules/footer/About";
import Contact from "../../molecules/footer/Contact";
import Category from "../../molecules/footer/Category";
import QuickLink from "../../molecules/footer/QuickLink";
import Copyright from "../../molecules/footer/Copyright";

const Footer = ({ classes }) => {
    return (
        <div className={classes ? `footer__wrapper ${classes}` : 'footer__wrapper'}>
            <div className='footer__inner padding-bottom-20'>
                <Container>
                    <Row>
                        <Col md='6' lg='4'>
                            <About description='Kami merupakan platform untuk menemukan lowongan kerja terbaru diseluruh indonesia dengan berbagai jenis kategori.' />
                        </Col>

                        <Col md='6' lg='3'>
                            <Category />
                        </Col>

                        <Col md='6' lg='2'>
                            <QuickLink />
                        </Col>

                        <Col md='6' lg='3'>
                            <Contact
                                email='kadekteguhmahesa@gmail.com'
                                phone='+62 123-456-7890'
                                address='Nusa dua, Bali'
                            />
                        </Col>
                    </Row>
                </Container>
            </div>

            <Copyright text='copyright 2021. design by I Kadek Teguh Mahesa' />
        </div>
    )
}

export default Footer
