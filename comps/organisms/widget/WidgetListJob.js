import { useEffect, useState } from "react";
import ItemListJob from "../../molecules/widget/ItemListJob";
import WidgetWrap from "../../molecules/widget/WidgetWrap";

const WidgetListJob = ({ dataList, limit }) => {
    const [dataSort, setDataSort] = useState([]);
    useEffect(() => {
        const sort = dataList.sort((a, b) => b.id - a.id);
        const slice = sort.slice(0, limit);
        setDataSort(slice);
    }, []);

    return (
        <WidgetWrap title='Loker Terbaru'>
        {dataSort.length >= 1 && dataSort.map((data, i) => (
            <ItemListJob key={i}
                image={data?.companyLogo.url}
                title={data?.title}
                link={`/jobs/detail/${data?.id}-${data?.title.replace(/ /g, '-')}`}
                kabupaten={data?.kabupaten}
                provinsi={data?.provinsi}
                date={data?.published_at.replace('Z', '').replace('T', ' ').substring(0, 10).replace(/-/g, '/')}
            />
        ))}
        </WidgetWrap>
    )
}

export default WidgetListJob
