export type SearchType = {
    city: string;
    country: string;
}

export type Country = {
    code: string;
    name: string;
}

export type FormProps = {
    fetchWeather: (search: SearchType) => Promise<void>
}

export type Wheater = {
    name: string;
    main: {
        temp: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
    }
}