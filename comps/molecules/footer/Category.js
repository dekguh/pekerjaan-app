import ListLink from "../../atomics/ListLink";
import Title from "../../atomics/Title";
import { jsonListCategory } from "../../utils/json/data";

const Category = () => {
    return (
        <div className='margin-bottom-30'>
            <Title component='h4' classes='margin-bottom-20 text-white'>
                <span>Kategori</span>
            </Title>
            <ListLink baseURL='/jobs' query='category' list={jsonListCategory} />
        </div>
    )
}

export default Category
