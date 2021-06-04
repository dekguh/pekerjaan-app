import { faListAlt, faMapMarkerAlt, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import FormInputAuto from "../../molecules/FormInputAuto";
import { jsonListCategory, jsonListProvinsi } from "../../utils/json/data";
import Button from '../../atomics/Button';

const HomeHeroSearch = () => {
    const [valLocation, setValLocation] = useState('');
    const [valCategory, setValCategory] = useState('');

    const handleReturnValLoc = value => {
        setValLocation(value);
    }

    const handleReturnValCat = value => {
        setValCategory(value);
    }

    return (
        <form className='form__search-hero'>
            <div className='form__search-hero-location'>
                <FormInputAuto
                    icon={faMapMarkerAlt}
                    list={jsonListProvinsi}
                    returnValue={handleReturnValLoc}
                    placeholder='pilih lokasi'
                />
            </div>

            <div className='form__search-hero-category'>
                <FormInputAuto
                    icon={faListAlt}
                    list={jsonListCategory}
                    returnValue={handleReturnValCat}
                    placeholder='pilih kategori'
                />
            </div>

            <div className='form__search-hero-button'>
                <Button icon={faSearch} />
            </div>
        </form>
    )
}

export default HomeHeroSearch
