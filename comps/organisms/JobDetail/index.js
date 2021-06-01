import { Col, Container, Row } from "react-bootstrap";
import Content from "../../molecules/jobDetail/Content";
import Header from '../../molecules/jobDetail/Header';

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
                        kabupaten={dataSingle?.kabupaten}
                        provinsi={dataSingle?.provinsi}
                        salary={dataSingle?.salary}
                        isNegotiable={dataSingle?.isNegotiable}
                    />

                    <div className='job__detail-content-wrap margin-top-40'>
                        <Row>
                            <Col lg='8'>
                                <Content
                                    content={dataSingle?.jobDescription}
                                    date={dataSingle?.published_at.replace('Z', '').replace('T', ' ').substring(0, 10).replace(/-/g, '/')}
                                />
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
