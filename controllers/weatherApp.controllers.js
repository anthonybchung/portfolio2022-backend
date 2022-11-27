//GET: /api/v1/weather/
//  description: get weather from open weather
// by: Anthony Chung

exports.getWeather = async (req, res, next) => {
  let weatherData = null;
  try {
    weatherData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Sydney,au&APPID=${process.env.WEATHER_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        return data;
      });

    res.status(200).json(weatherData);
  } catch (err) {
    next(err);
  }
};
