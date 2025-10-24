import styles from './App.module.css';
import Form from './components/Form/Form';
import useWheater from './hooks/useWheater';
import WeatherDetail from './components/WeatherDetail/WeatherDetail';
import Spinner from './components/Spinner/Spinner';
import Alert from './components/Alert/Alert';

function App() {

  const { weather, loading, notFound, fetchWeather, hasWeatherData } = useWheater();

  return (
    <>
      <h1 className={styles.title}>Weather App</h1>

      <div className={styles.container}>
        <Form fetchWeather={fetchWeather} />
        {loading ? <Spinner /> : hasWeatherData && <WeatherDetail weather={weather} />}
        {notFound && <Alert>Not found</Alert>}
      </div>
    </>
  )
}

export default App
