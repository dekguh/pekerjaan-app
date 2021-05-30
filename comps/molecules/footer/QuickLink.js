import ListLink from "../../atomics/ListLink";
import Title from "../../atomics/Title";
import { jsonListQuickLink } from "../../utils/json/data";

const Category = () => {
    return (
        <div className='margin-bottom-30'>
            <Title component='h4' classes='margin-bottom-20 text-white'>
                <span>Pintasan Link</span>
            </Title>
            <ListLink list={jsonListQuickLink} />
        </div>
    )
}

export default Category
