import { faListAlt, faMapMarkerAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import FormGroup from '../../molecules/FormGroup';
import FormInputAuto from '../../molecules/FormInputAuto';
import FormGroupIcon from '../../molecules/FormGroupIcon';
import Range from '../../atomics/Form/Range';
import { jsonListCategory, jsonListProvinsi } from '../../utils/json/data';
import CheckToggle from '../../atomics/Form/CheckToggle';
import Title from '../../atomics/Title';
import Input from '../../atomics/Form/Input';

const FormFilterArchive = ({ getSearchFilter }) => {
    const [valTitle, setValTitle] = useState('');
    const [valLocation, setValLocation] = useState('');
    const [valCategory, setValCategory] = useState('');
    const [valMinSalary, setValMinSalary] = useState(0);
    const [valMaxSalary, setValMaxSalary] = useState(0);
    const [placement, setPlacement] = useState({
        isOnsite: false,
        isRemote: false,
    });
    const [workPosition, setWorkPosition] = useState({
        fullTime: false,
        partTime: false,
        internship: false,
        freelancer: false
    });

    useEffect(() => {
        getSearchFilter({
            filtTitle: valTitle || '',
            filtLoc: valLocation || 'Semua_Provinsi',
            filtCat: valCategory || 'Semua_Kategori',
            filtMinSal: valMinSalary,
            filtMaxSal: valMaxSalary,
            filtPlacement: placement,
            filtPosition: workPosition
        });
    }, [valTitle, valLocation, valCategory, valMinSalary, valMaxSalary, placement, workPosition]);

    const handleReturnValTitle = e => {
        setValTitle(e.target.value);
    }

    const handleReturnValLoc = value => {
        setValLocation(value.replace(/ /g, '_'));
    }

    const handleReturnValCat = value => {
        setValCategory(value.replace(/ /g, '_'));
    }

    const handleReturnValMinSalary = e => {
        setValMinSalary(e.target.value);
    }

    const handleReturnValMaxSalary = e => {
        setValMaxSalary(e.target.value);
    }

    const handleReturnIsRemote = e => {
        if(placement.isRemote) return setPlacement({ ...placement, isRemote: false});
        if(!placement.isRemote) return setPlacement({ ...placement, isRemote: true});
    }

    const handleReturnIsOnsite = e => {
        if(placement.isOnsite) return setPlacement({ ...placement, isOnsite: false});
        if(!placement.isOnsite) return setPlacement({ ...placement, isOnsite: true});
    }

    const handleReturnIsFullTime = e => {
        if(workPosition.fullTime) return setWorkPosition({ ...workPosition, fullTime: false});
        if(!workPosition.fullTime) return setWorkPosition({ ...workPosition, fullTime: true});
    }

    const handleReturnIsPartTime = e => {
        if(workPosition.partTime) return setWorkPosition({ ...workPosition, partTime: false});
        if(!workPosition.partTime) return setWorkPosition({ ...workPosition, partTime: true});
    }

    const handleReturnIsInternship = e => {
        if(workPosition.internship) return setWorkPosition({ ...workPosition, internship: false});
        if(!workPosition.internship) return setWorkPosition({ ...workPosition, internship: true});
    }

    const handleReturnIsFreelancer = e => {
        if(workPosition.freelancer) return setWorkPosition({ ...workPosition, freelancer: false});
        if(!workPosition.freelancer) return setWorkPosition({ ...workPosition, freelancer: true});
    }

    return (
        <div className='form__filter'>
        <Title component='h4' classes='margin-bottom-20'>
            <span>Filter Pencarian</span>
        </Title>
            <FormGroupIcon icon={faSearch} classes='margin-bottom-20'>
                <Input placeholder='temukan judul' onChange={handleReturnValTitle} />
            </FormGroupIcon>

            <FormGroup classes='form__filter-group margin-bottom-20'>
                <FormInputAuto
                    icon={faMapMarkerAlt}
                    list={jsonListProvinsi}
                    returnValue={handleReturnValLoc}
                    placeholder='pilih lokasi'
                />
            </FormGroup>

            <FormGroup classes='form__filter-group margin-bottom-20'>
                <FormInputAuto
                    icon={faListAlt}
                    list={jsonListCategory}
                    returnValue={handleReturnValCat}
                    placeholder='pilih kategori'
                />
            </FormGroup>

            <FormGroup
                textLabel={`min. gaji (${valMinSalary >= 1 ? Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(valMinSalary) : ' - '})`}
                classes='form__filter-group margin-bottom-20'
            >
                <Range defaultVal={0} onChange={handleReturnValMinSalary} step={2000000} max={100000000} />
            </FormGroup>

            <FormGroup
                textLabel={`maks. gaji (${valMaxSalary >= 1 ? Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(valMaxSalary) : ' - '})`}
                classes='form__filter-group margin-bottom-20'
            >
                <Range defaultVal={0} onChange={handleReturnValMaxSalary} step={2000000} min={0} max={100000000} />
            </FormGroup>

            <FormGroup textLabel='Penempatan' classes='form__filter-group margin-bottom-20'>
                <CheckToggle
                    checked={placement.isRemote}
                    text={'Remote'}
                    style={{ margin: '0 8px 8px 0'}}
                    onChange={handleReturnIsRemote}
                />
                <CheckToggle
                    checked={placement.isOnsite}
                    text={'On site'}
                    style={{ margin: '0 8px 8px 0'}}
                    onChange={handleReturnIsOnsite}
                />
            </FormGroup>

            <FormGroup textLabel='Posisi kerja' classes='form__filter-group margin-bottom-20'>
                <CheckToggle
                    onChange={handleReturnIsFullTime}
                    checked={workPosition.fullTime}
                    text={'Full Time'}
                    style={{ margin: '0 8px 8px 0'}}
                />
                <CheckToggle
                    onChange={handleReturnIsPartTime}
                    checked={workPosition.partTime}
                    text={'Part Time'}
                    style={{ margin: '0 8px 8px 0'}}
                />
                <CheckToggle
                    onChange={handleReturnIsInternship}
                    checked={workPosition.internship}
                    text={'Internship'}
                    style={{ margin: '0 8px 8px 0'}}
                />
                <CheckToggle
                    onChange={handleReturnIsFreelancer}
                    checked={workPosition.freelancer}
                    text={'Freelancer'}
                    style={{ margin: '0 8px 8px 0'}}
                />
            </FormGroup>
        </div>
    )
}

export default FormFilterArchive
