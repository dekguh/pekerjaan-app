import { faListAlt, faMapMarkerAlt, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import FormInputAuto from "../../molecules/FormInputAuto";
import { jsonListCategory, jsonListProvinsi } from "../../utils/json/data";
import Button from '../../atomics/Button';
import { useRouter } from 'next/router';

const HomeHeroSearch = () => {
    const Router = useRouter();
    const [valLocation, setValLocation] = useState('');
    const [valCategory, setValCategory] = useState('');

    const handleReturnValLoc = value => {
        setValLocation(value);
    }

    const handleReturnValCat = value => {
        setValCategory(value);
    }

    const handleSubmitSearch = e => {
        e.preventDefault();
        Router.push(`/jobs?${valLocation && `location=${valLocation}&`}${valCategory && `category=${valCategory}`}`);
    }

    return (
        <form method='POST' onSubmit={handleSubmitSearch} className='form__search-hero'>
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
                <Button type='submit' icon={faSearch} />
            </div>
        </form>
    )
}

export default HomeHeroSearch
