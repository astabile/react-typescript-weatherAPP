import axios from 'axios';
import { z } from 'zod';
import type { SearchType } from '../types';
import { useState, useMemo } from 'react';

const initialState = {
    name: '',
    main: {
        temp: 0,
        temp_min: 0,
        temp_max: 0,
        pressure: 0,
        humidity: 0,
    }
}

// Schema to validate the weather response with Zod
const Wheater = z.object({
    name: z.string(),
    main: z.object({
        temp: z.number(),
        temp_min: z.number(),
        temp_max: z.number(),
        pressure: z.number(),
        humidity: z.number(),
    }),
});

export type Wheater = z.infer<typeof Wheater>;

export default function useWheater() {

    const [weather, setWeather] = useState<Wheater>(initialState);
    const [loading, setLoading] = useState(false);
    const [notFound, setNotFound] = useState(false);

    const fetchWeather = async (search: SearchType) => {
        const appId = import.meta.env.VITE_API_KEY;
        setLoading(true);
        setWeather(initialState);
        try {
            // Get the latitude and longitude of the city
            const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appId}`;
            const { data } = await axios(geoUrl);

            // Check if coordinates are found
            if (data.length === 0) {
                setNotFound(true);
                return;
            }

            // Get the weather of the city
            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=${appId}`;
            const { data: weatherResult } = await axios(weatherUrl);

            // Validate the weather response with Zod
            const result = Wheater.safeParse(weatherResult);

            if (result.success) {
                setWeather(result.data);
                setNotFound(false);
            }

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const hasWeatherData = useMemo(() => weather.name, [weather]);

    return { weather, loading, notFound, fetchWeather, hasWeatherData };
}