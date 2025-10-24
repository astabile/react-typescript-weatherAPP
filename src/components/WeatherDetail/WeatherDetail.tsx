import type { Wheater } from '../../hooks/useWheater';
import { formatTemperature } from '../../utils';
import styles from './WeatherDetail.module.css';

export type WeatherDetailProps = {
    weather: Wheater;
}

export default function WeatherDetail({ weather }: WeatherDetailProps) {
    return (
        <div className={styles.container}>
            <h2>Weather in {weather.name}</h2>
            <p className={styles.current}>{formatTemperature(weather.main.temp)}&deg;C</p>
            <div className={styles.temperatures}>
                <p>Min: {formatTemperature(weather.main.temp_min)}&deg;C</p>
                <p>Max: {formatTemperature(weather.main.temp_max)}&deg;C</p>
            </div>
            <div className={styles.temperatures}>
                <p className={styles.normal}>Pressure: {weather.main.pressure} hPa</p>
                <p className={styles.normal}>Humidity: {weather.main.humidity}%</p>
            </div>
        </div>
    )
}