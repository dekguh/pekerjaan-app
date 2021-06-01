import { Col, Container, Row } from "react-bootstrap";
import Header from '../../molecules/jobDetail/Header';
import Content from "./Content";

const JobDetail = ({ classes, dataSingle }) => {
    return (
        <div className={classes ?  `job__detail-wrapper ${classes}` : 'job__detail-wrapper'}>
            <Container>
                <div className='job__detail-inner'>
                    <Header
                        title={dataSingle?.title}
                        company={dataSingle?.company}
                        logo={dataSingle?.companyLogo?.url}
                        company_desc={dataSingle?.descriptionCompany}
                        isUrgent={dataSingle?.isUrgent}
                        jobType={dataSingle?.typeJob.replace(/_/g, ' ')}
                        isRemote={dataSingle?.isRemote}
                    />

                    <div className='job__detail-content-wrap margin-top-40'>
                        <Row>
                            <Col lg='8'>
                                <Content content={dataSingle?.jobDescription} />
                            </Col>

                            <Col lg='4'>
                                widget
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default JobDetail
