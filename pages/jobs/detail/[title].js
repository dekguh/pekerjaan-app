import HeaderPage from "../../../comps/organisms/HeaderPage";
import JobDetail from "../../../comps/organisms/JobDetail";
import { jsonListDataJob } from "../../../comps/utils/json/data";
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";

const JobDetailPage = () => {
    const [findData, setFindData] = useState();
    const router = useRouter();
    const { title } = router.query;
    const getId = title.substring(0, 1);

    useEffect(() => {
        const find = jsonListDataJob.find(data => data.id == getId);
        setFindData(find);
    }, []);

    return (
        <>
            <HeaderPage title='Informasi' style={{
                paddingBottom: '120px'
            }} />

            <JobDetail dataSingle={findData} />
        </>
    )
}


export default JobDetailPage
