import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CardJob from '../../molecules/cardJob'
import TitleSectionCenter from '../../molecules/TitleSectionCenter'

const LatestJobSection = ({ classes }) => {
    return (
        <div className={classes}>
            <Container>
                <TitleSectionCenter
                    classes='margin-bottom-30'
                    heading='h2'
                    titleBorder='Lowongan'
                    title='Kerja Terbaru'
                    description='Temukan lowongan kerja terbaru dari berbagai perusahaan diseluruh indonesia dengan berbagai pilihan kategori'
                />

                <Row>
                    <Col lg='4'>
                        <CardJob
                            classes='margin-bottom-30'
                            link='#'
                            title='Web Designer'
                            company='Pekerjaan.APP'
                            logo='/company_logo/logo-13.png'
                            isUrgent={true}
                            jobType='Freelance'
                            isRemote={true}
                            date='29 mei 2021'
                            district='Badung'
                            province='Bali'
                        />
                    </Col>
                    <Col lg='4'>
                        <CardJob
                            classes='margin-bottom-30'
                            link='#'
                            title='Backend Developer (node.js)'
                            company='Pekerjaan.APP'
                            logo='/company_logo/logo-13.png'
                            isUrgent={true}
                            jobType='Freelance'
                            isRemote={true}
                            date='29 mei 2021'
                            district='Badung'
                            province='Bali'
                        />
                    </Col>
                    <Col lg='4'>
                        <CardJob
                            classes='margin-bottom-30'
                            link='#'
                            title='Frontend Developer (React)'
                            company='Pekerjaan.APP'
                            logo='/company_logo/logo-13.png'
                            isUrgent={true}
                            jobType='Freelance'
                            isRemote={true}
                            date='29 mei 2021'
                            district='Badung'
                            province='Bali'
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LatestJobSection
