import { Container } from "react-bootstrap"
import Title from '../../atomics/Title';
const HeaderPage = ({ title, classes, ...rest }) => {
    return (
        <div className={classes ? `header__page ${classes}` : 'header__page'} {...rest}>
            <Container>
                <div className='text-center'>
                    <Title component='h3' classes='mb-0 text-white'>
                        <span>{title}</span>
                    </Title>
                </div>
            </Container>
        </div>
    )
}

export default HeaderPage
