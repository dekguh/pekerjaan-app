import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const ListLink = ({ classes, baseURL, query, list }) => {
    const [dataList, setDataList] = useState([]);
    useEffect(() => {
        const dataSlice = list.slice(0, 4);
        setDataList(dataSlice);
    }, []);

    return (
        <ul className={classes ? `list__quick-link ${classes}` : 'list__quick-link'}>
            {dataList && dataList.map((data, i) => (
                <li key={i}>
                    <Link href={baseURL ? `${baseURL}/${query}=${data}` : `/${data}`}>
                        <a>
                            <i className='mr-2'><FontAwesomeIcon icon={faChevronRight} /></i>
                            <span>{data.replace(/_/g, ' ')}</span>
                        </a>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default ListLink
