import HeaderPage from "../../comps/organisms/HeaderPage";
import JobArchive from "../../comps/organisms/JobArchive";
import { jsonListDataJob } from '../../comps/utils/json/data';

const JobArchivePage = ({ dataFresh }) => {
    return (
        <>
            <HeaderPage title='Lowongan Kerja' />
            <JobArchive dataList={dataFresh} />
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
