const WeatherForecastList = (details) => {
    const { day, conditions, time } = details;
    return (
        <li>
            <h2>{day}</h2>
            <p><span>Conditions:</span> {conditions}</p>
            <p><span>Time:</span> {time}</p>
        </li>
    )
}