import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FormInputAuto = ({ icon, list, returnValue, placeholder }) => {
    const [keyUp, setKeyUp] = useState(false);
    const [listData, setListData] = useState(list);
    const inputRef = useRef();

    const handleKeyUp = e => {
        setKeyUp(true);
        const filteredData = list.filter(data => data.toLowerCase().startsWith(e.target.value.toLowerCase()));
        setListData(filteredData);
    }

    const handleOnFocus = e => {
        setKeyUp(true);
    }

    const handleBlur = e => {
        setKeyUp(false);
    }

    const handleSuggestItem = e => {
        inputRef.current.value = e.target.textContent;
        returnValue(e.target.textContent);
    }

    return (
        <div className='form__input-auto'>
            <div className='form__input-auto-input'>
                <div className='form__input-auto-icon'>
                    <FontAwesomeIcon icon={icon} />
                </div>
                <input
                    ref={inputRef}
                    className='form-control form__control-icon'
                    onKeyUp={handleKeyUp}
                    onFocus={handleOnFocus}
                    onBlur={handleBlur}
                    placeholder={placeholder}
                />
            </div>
            <ul className={keyUp ? 'form__input-auto-list showing' : 'form__input-auto-list'}>
                {listData?.length >=1 ? listData.map((data, i) => (
                   <li onClick={handleSuggestItem} key={i}>{data.replace(/_/g, ' ')}</li>
                )) : <li>tidak ditemukan</li>}

            </ul>
        </div>
    )
}

export default FormInputAuto;
