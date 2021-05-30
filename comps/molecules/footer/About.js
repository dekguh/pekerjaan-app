import Title from '../../atomics/Title';

const About = ({ description }) => {
    return (
        <div className='margin-bottom-30'>
            <Title component='h4' classes='margin-bottom-20 text-white'>
                <span>Tentang Kami</span>
            </Title>
            <p className='mb-0 text-white'>
                {description}
            </p>
        </div>
    )
}

export default About
