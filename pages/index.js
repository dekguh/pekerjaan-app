import Head from 'next/head';
import { Col, Container, Row } from 'react-bootstrap';
import ButtonLink from '../comps/atomics/ButtonLink';
import Button from '../comps/atomics/Button';
import FormGroup from '../comps/molecules/FormGroup';
import Input from '../comps/atomics/Form/Input';
import SelectMultiple from '../comps/atomics/Form/SelectMultiple';
import FormGroupIcon from '../comps/molecules/FormGroupIcon';
import { faEnvelope, faMarker } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <ButtonLink text='Button Link' />
            <ButtonLink btnClassType='navy' />
          </Col>

          <Col md={6}>
            <Button />
            <Button btnClassType='navy' />
          </Col>

          <Col md={6}>
            <FormGroup textLabel='tes'>
              <Input placeholder='tes doang' />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup textLabel='tes'>
              <SelectMultiple list={['Full_Time', 'Freelance', 'Part_Time']} />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroupIcon icon={faEnvelope}>
              <Input placeholder='tes doang' />
            </FormGroupIcon>
          </Col>
        </Row>
      </Container>
    </>
  )
}
