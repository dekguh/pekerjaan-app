import { Container } from "react-bootstrap"

const Copyright = ({ text }) => {
    return (
        <div className='footer__copyright'>
            <Container className='text-white text-center'>
                {text}
            </Container>
        </div>
    )
}

export default Copyright
