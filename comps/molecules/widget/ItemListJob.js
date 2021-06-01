import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import TextIcon from '../../atomics/TextIcon';
import Title from '../../atomics/Title';

const ItemListJob = ({ image, title, link, kabupaten, provinsi, date }) => {
    return (
        <div className='item__listjob'>
            <div className='item__listjob-image'>
                <img src={image} />
            </div>

            <div className='item__listjob-detail'>
                <span className='item__listjob-date'>diposting pada {date}</span>
                <a href={link} className='item__listjob-link'>
                    <Title component='h5' classes='item__listjob-title'>
                        <span>{title}</span>
                    </Title>
                </a>
                <TextIcon icon={faMapMarkerAlt} text={`${kabupaten}, ${provinsi}`} />
            </div>
        </div>
    )
}

export default ItemListJob;
