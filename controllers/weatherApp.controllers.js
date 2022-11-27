//GET: /api/v1/weather/
//  description: get weather from open weather
// by: Anthony Chung

exports.getWeather = async (req, res, next) => {
  let weatherData = null;
  console.log(process.env.WEATHER_KEY);
  try {
    weatherData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=0f0f5bfa8832e6950137b71289dcb96b`
    )
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
  } catch (err) {
    next(err);
  }
  res.status(200).json(weatherData);
};
