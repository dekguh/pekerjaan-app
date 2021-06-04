import Head from 'next/head';
import HeaderPage from "../../../comps/organisms/HeaderPage";
import JobDetail from "../../../comps/organisms/JobDetail";
import { jsonListDataJob } from "../../../comps/utils/json/data";
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";

const JobDetailPage = ({ dataFresh }) => {
    const [findData, setFindData] = useState();
    const router = useRouter();
    const { title } = router.query;
    const getId = title.substring(0, 1);

    useEffect(() => {
        const find = dataFresh.find(data => data.id == getId);
        setFindData(find);
    }, []);

    return (
        <>
            <Head>
                <title>Pekerjaan.APP | Informasi Lowongan</title>
            </Head>
            <HeaderPage title='Informasi' style={{
                paddingBottom: '120px'
            }} />

            <JobDetail dataSingle={findData} dataList={dataFresh} />
        </>
    )
}

export async function getStaticProps() {
    const dataFresh = jsonListDataJob;
    return {
        props: {
            dataFresh
        }
    }
}

export async function getStaticPaths() {
    const fetchTitle = jsonListDataJob.map(data => {
        return {
            params: {
                title: `${data.id}-${data.title.replace(/ /g, '-')}`
            }
        }
    })
    return {
        paths: fetchTitle,
        fallback: false
    }
}


export default JobDetailPage
