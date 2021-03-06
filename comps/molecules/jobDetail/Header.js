import { Col, Row } from "react-bootstrap";
import Title from "../../atomics/Title";
import Label from "../../atomics/Label";
import TextIcon from '../../atomics/TextIcon';
import { faMapMarkerAlt, faMoneyBill } from "@fortawesome/free-solid-svg-icons";

const header = ({ logo, title, company, company_desc, isUrgent, jobType, isRemote, kabupaten, provinsi, isNegotiable, salary }) => {
    return (
        <div className='job__detail-header'>
            <Row>
                <Col lg='4'>
                    <div className='job__detail-header-info margin-bottom-20'>
                        <div className='job__detail-logo'>
                            <img src={logo} />
                        </div>

                        <div className='job__detail-info'>
                            <TextIcon icon={faMapMarkerAlt} text={`${kabupaten}, ${provinsi}`} />
                            <Title className='job__detail-title' component='h4' style={{
                            fontWeight: '500'
                            }}>
                                <span>{title}</span>
                            </Title>
                            <span className='job__detail-company-name'>{company}</span>
                        </div>
                    </div>
                </Col>

                <Col lg='2'>
                    <div className='margin-bottom-20'>
                    {isUrgent && <Label text='urgent' type='danger' style={{ marginRight: '8px', marginBottom: '4px' }} />}
                    {jobType && <Label text={jobType} type='success' style={{ marginRight: '8px', marginBottom: '4px' }} />}
                    {isRemote && <Label text='remote' type='info' style={{ marginRight: '8px', marginBottom: '4px' }} />}
                    {isNegotiable && <Label text='gaji nego' type='info' style={{ marginRight: '8px', marginBottom: '4px' }} />}
                    </div>
                </Col>

                <Col lg='6'>
                    {salary && <TextIcon
                    icon={faMoneyBill}
                    text={Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(salary)} />}

                    <p className='margin-bottom-20'>
                        {company_desc}
                    </p>
                </Col>
            </Row>
        </div>
    )
}

export default header
