import { faListAlt } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import ButtonLink from '../../atomics/ButtonLink';
import CardJob from '../../molecules/CardJob';
import TitleSectionCenter from '../../molecules/TitleSectionCenter'

const LatestJobSection = ({ classes, dataLatest }) => {
    const [dataSort, setDataSort] = useState([]);

    useEffect(() => {
        const dataSortir = dataLatest.sort((a, b) => b.id - a.id);
        const dataSlice = dataSortir.slice(0, 6)
        setDataSort(dataSlice);
    }, []);

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
                {dataSort.map((data, i) => {
                    return (
                    <Col key={i} lg='4'>
                        <CardJob
                            classes='margin-bottom-30'
                            link={`/jobs/detail/${data.id}-${data.title.replace(/ /g, '-')}`}
                            title={data.title}
                            company={data.company}
                            logo={data.companyLogo.url}
                            isUrgent={data.isUrgent}
                            jobType={data.typeJob.replace(/_/g, ' ')}
                            isRemote={data.isRemote}
                            date={data.published_at.replace('Z', '').replace('T', ' ').substring(0, 10).replace(/-/g, '/')}
                            district={data.kabupaten}
                            province={data.provinsi}
                        />
                    </Col>)
                })}
                </Row>

                <div className='text-center'>
                    <ButtonLink icon={faListAlt} href='/jobs' text='Lowongan Lainnya' />
                </div>
            </Container>
        </div>
    )
}

export default LatestJobSection
