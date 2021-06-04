import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardJob from '../../molecules/CardJob';
import Pagination from "../../molecules/Pagination";
import FormFilterArchive from "../FormFilterArchive";

const JobArchive = ({ dataList, urlParams }) => {
    const [dataFilter, setDataFilter] = useState(dataList);
    const [formFilter, setFormFilter] = useState({
        filtTitle: '',
        filtLoc: 'Semua_Provinsi',
        filtCat: 'Semua_Kategori',
        filtMinSal: 0,
        filtMaxSal: 0,
        filtPlacement: {
            isOnsite: false,
            isRemote: false,
        },
        filtPosition: {
            fullTime: false,
            partTime: false,
            internship: false,
            freelancer: false
        }
    });
    const [totalPage, setTotalPage] = useState(0);
    const [paginationInfo, setPaginationInfo] = useState({
        perPage: 6,
        selectedPage: 0
    });

    const handleSearchFilter = filt => {
        setFormFilter(filt);
    }

    useEffect(() => {
        let valLoc = formFilter.filtLoc ? formFilter.filtLoc.replace(/Semua_Provinsi/g, '') : '';
        valLoc = (urlParams?.location?.length >= 1 && valLoc.length <= 0) ? urlParams.location : valLoc;

        let valCat = formFilter.filtCat ? formFilter.filtCat.replace(/Semua_Kategori/g, '') : '';
        valCat = (urlParams?.category?.length >= 1 && valCat.length <= 0) ? urlParams.category : valCat;

        const valMaxSal = formFilter.filtMaxSal > 0 ? formFilter.filtMaxSal : 1000000000;
        let filterFullTime = [],
        filterPartTime = [],
        filterFreelancer = [],
        filterInternship = [],
        filterPosition = [];

        let filtered = dataList.filter(data => {
            return data.provinsi.indexOf(valLoc) > -1
            && data.title.toLowerCase().indexOf(formFilter.filtTitle?.toLowerCase()) > -1
            && data.categoryJob.indexOf(valCat) > -1
            && data.salary >= parseInt(formFilter.filtMinSal)
            && data.salary <= parseInt(valMaxSal);
        });

        if(formFilter.filtPlacement.isRemote) filtered = dataList.filter(data => {
            return formFilter.filtPlacement.isRemote == data.isRemote;
        });

        if(formFilter.filtPlacement.isOnsite) filtered = dataList.filter(data => {
            return formFilter.filtPlacement.isOnsite == data.isOnsite;
        });

        if(formFilter.filtPosition.fullTime) filterFullTime = dataList.filter(data => {
            return data.typeJob.indexOf('Full_Time') > -1;
        });

        if(formFilter.filtPosition.partTime) filterPartTime = dataList.filter(data => {
            return data.typeJob.indexOf('Part_Time') > -1;
        });

        if(formFilter.filtPosition.freelancer) filterFreelancer = dataList.filter(data => {
            return data.typeJob.indexOf('Freelancer') > -1;
        });

        if(formFilter.filtPosition.internship) filterInternship = dataList.filter(data => {
            return data.typeJob.indexOf('Internship') > -1;
        });

        filtered = (filterFullTime?.length >= 1 || filterPartTime?.length >= 1 || filterFreelancer?.length >= 1 || filterInternship?.length >= 1)
        ? filterPosition.concat(filterFullTime, filterPartTime, filterFreelancer, filterInternship)
        : filtered;

        filtered = filtered.sort((a, b) => b.id - a.id);

        const countTotalPage = Math.ceil(filtered.length / paginationInfo.perPage);
        setTotalPage(countTotalPage);

        const startOffset = paginationInfo.selectedPage * paginationInfo.perPage;
        const endOffset = paginationInfo.perPage * (paginationInfo.selectedPage + 1);
        filtered = filtered.slice(startOffset, endOffset);

        setDataFilter(filtered);
    }, [urlParams, paginationInfo, dataList, formFilter]);

    const handlePaginationChange = num => {
        setPaginationInfo({...paginationInfo, selectedPage: num.selected});
    }

    return (
        <div className='job__archive margin-top-80'>
            <Container>
                <Row>
                    <Col lg='4'>
                        <FormFilterArchive getSearchFilter={handleSearchFilter} />
                    </Col>
                    <Col lg='8'>
                        <Row>
                        {dataFilter?.map((data, i) => {
                            return (
                            <Col key={i} lg='6'>
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

                        <Row>
                            <Col sm='12'>
                                {totalPage > 0 && <Pagination
                                    pageCount={totalPage}
                                    pageRangeDisplayed={paginationInfo.perPage}
                                    marginPagesDisplayed={0}
                                    onPageChange={handlePaginationChange}
                                />}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default JobArchive
