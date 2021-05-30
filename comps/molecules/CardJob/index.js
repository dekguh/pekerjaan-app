import Link from 'next/link';
import Label from '../../atomics/Label';
import ButtonLink from '../../atomics/ButtonLink';
import Title from "../../atomics/Title";
import { faArrowRight, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardJob = ({ classes, link, title, company, logo, isUrgent, jobType, isRemote, date, district, province }) => {
    return (
        <div className={classes ? `card__job ${classes}` : 'card__job'}>
            <div className='card__job-top'>
                <i className='mr-2'><FontAwesomeIcon icon={faMapMarkerAlt} /></i>
                <span>{district && `${district}, `}{province && province}</span>
            </div>
            <div className='card__job-header'>
                <div className='card__job-header-logo'>
                    <img src={logo} />
                </div>

                <div className='card__job-header-detail'>
                    <Title className='card__job-header-title' component='h5' style={{
                        fontWeight: '500'
                    }}>
                        <Link href={link}>
                            <a>{title}</a>
                        </Link>
                    </Title>
                    <span className='card__job-header-company'>{company}</span>
                </div>
            </div>

            <div className='card__job-body'>
                {isUrgent && <Label text='urgent' type='danger' style={{ marginRight: '8px', marginBottom: '4px' }} />}
                {jobType && <Label text={jobType} type='success' style={{ marginRight: '8px', marginBottom: '4px' }} />}
                {isRemote && <Label text='remote' type='info' style={{ marginRight: '8px', marginBottom: '4px' }} />}
            </div>

            <div className='card__job-footer'>
                <ButtonLink href={link} icon={faArrowRight} text='Selengkapnya' />

                <span className='card__job-date'>diposting pada {date}</span>
            </div>
        </div>
    )
}

CardJob.defaultProps = {
    link: '#',
}

export default CardJob
