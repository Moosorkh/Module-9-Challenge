import dotenv from "dotenv";
dotenv.config();

// TODO: Define an interface for the Coordinates object
interface Coordinates {
  lat: number;
  lon: number;
}

// TODO: Define a class for the Weather object
class Weather {
  temp: number;
  humidity: number;
  windSpeed: number;
  description: string;
  icon: string;

  constructor(
    temp: number,
    humidity: number,
    windSpeed: number,
    description: string,
    icon: string
  ) {
    this.temp = temp;
    this.humidity = humidity;
    this.windSpeed = windSpeed;
    this.description = description;
    this.icon = icon;
  }
}

// TODO: Complete the WeatherService class
class WeatherService {
  // TODO: Create fetchLocationData method
  private async fetchLocationData(city: string): Promise<Coordinates> {
    const response = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${process.env.API_KEY}`
    );
    const data = await response.json();
    return this.destructureLocationData(data);
  }

  // TODO: Create destructureLocationData method
  private destructureLocationData(locationData: any): Coordinates {
    const { lat, lon } = locationData[0];
    return { lat, lon };
  }

  // TODO: Create fetchWeatherData method
  private async fetchWeatherData(coordinates: Coordinates): Promise<any> {
    const { lat, lon } = coordinates;
    const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}&units=imperial`;
    const response = await fetch(weatherUrl);
    const weatherData = await response.json();
    return weatherData;
  }

  // TODO: Build parseCurrentWeather method
  private parseCurrentWeather(response: any): Weather {
    const { temp, humidity } = response.main;
    const windSpeed = response.wind.speed;
    const description = response.weather[0].description;
    const icon = response.weather[0].icon;

    return new Weather(temp, humidity, windSpeed, description, icon);
  }

  // TODO: Complete buildForecastArray method
  private buildForecastArray(weatherData: any[]): Weather[] {
    const forecast = weatherData
      .filter((_, index) => index % 8 === 0)
      .map((entry) => this.parseCurrentWeather(entry));
    return forecast;
  }

  // TODO: Complete getWeatherForCity method
  async getWeatherForCity(city: string): Promise<any> {
    const coordinates = await this.fetchLocationData(city);
    const weatherData = await this.fetchWeatherData(coordinates);

    const currentWeather = this.parseCurrentWeather(weatherData.list[0]);
    const forecast = this.buildForecastArray(weatherData.list);

    return {
      city: city,
      currentWeather,
      forecast,
    };
  }
}

export default new WeatherService();
