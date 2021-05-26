import { FormControl } from 'react-bootstrap';

const SelectMultiple = ({ list, defaultValue, onChange }) => {
    return (
        <FormControl as='select' defaultValue={defaultValue} onChange={onChange} multiple>
            <option value=''>choose option</option>
            {list.length >= 1 && list.map((data, i) => (
                <option key={i} value={data}>{data.replace(/_/g, ' ')}</option>
            ))}
        </FormControl>
    )
}

export default SelectMultiple
