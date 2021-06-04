import HeaderPage from "../../comps/organisms/HeaderPage";
import JobArchive from "../../comps/organisms/JobArchive";
import { jsonListDataJob } from '../../comps/utils/json/data';
import { useRouter } from 'next/router';

const JobArchivePage = ({ dataFresh }) => {
    const Router = useRouter();

    return (
        <>
            <Head>
                <title>Pekerjaan.APP | Temukan Lowongan Kerja</title>
            </Head>
            <HeaderPage title='Lowongan Kerja' />
            <JobArchive dataList={dataFresh} urlParams={Router.query} />
        </>
    )
}

export async function getStaticProps() {
    const dataFresh = jsonListDataJob;

    return {
        props: {
            dataFresh,
        }
    }
}

export default JobArchivePage
