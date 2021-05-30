import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import TextIcon from '../../atomics/TextIcon'
import Title from '../../atomics/Title'

const Contact = ({ email, phone, address }) => {
    return (
        <div className='margin-bottom-30'>
            <Title component='h4' classes='margin-bottom-20 text-white'>
                <span>Kontak Kami</span>
            </Title>

            {email && <TextIcon
            classes='text-white margin-bottom-5'
            classesIcon='text-white'
            icon={faEnvelope}
            text={email} />}

            {phone && <TextIcon
            classes='text-white margin-bottom-5'
            classesIcon='text-white'
            icon={faPhoneAlt}
            text={phone} />}

            {address && <TextIcon
            classes='text-white margin-bottom-5'
            classesIcon='text-white'
            icon={faMapMarkerAlt}
            text={address} />}
        </div>
    )
}

export default Contact
