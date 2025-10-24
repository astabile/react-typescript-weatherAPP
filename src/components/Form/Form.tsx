import { useState, type ChangeEvent, type FormEvent } from 'react';
import type { FormProps, SearchType } from '../../types';
import { countries } from '../../data/countries';
import styles from './Form.module.css';
import Alert from '../Alert/Alert';


export default function Form({ fetchWeather }: FormProps) {

    const [search, setSearch] = useState<SearchType>({
        city: '',
        country: '',
    })

    const [alert, setAlert] = useState<string>('');

    // Handle change in the form
    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value,
        })
    }

    // Handle submit in the form
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (Object.values(search).includes('')) {
            setAlert('All fields are required');
            return;
        }

        fetchWeather(search);
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            {alert && <Alert>{alert}</Alert>}
            <div className={styles.field}>
                <label htmlFor="city">City</label>
                <input type="text" id="city" name="city" placeholder="Enter city name" value={search.city} onChange={handleChange} />
            </div>
            <div className={styles.field}>
                <label htmlFor="country">Country</label>
                <select id="country" name="country" value={search.country} onChange={handleChange}>
                    <option value="">-- Select a country --</option>
                    {countries.map((country) => (
                        <option key={country.code} value={country.code}>{country.name}</option>
                    ))}
                </select>
            </div>
            <input type="submit" value="Search" className={styles.submit} />
        </form>
    )
}