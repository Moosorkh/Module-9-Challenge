import dotenv from 'dotenv';
dotenv.config();

// TODO: Define an interface for the Coordinates object
interface Coordinates {
  lat: number;
  lon: number;
}
// TODO: Define a class for the Weather object

// TODO: Complete the WeatherService class
class WeatherService {
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

  // TODO: Define the baseURL, API key, and city name properties
  private async fetchLocationData(city: string): Promise<Coordinates> {
    const response = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${process.env.API_KEY}`
    );
    const data = await response.json();
    const { lat, lon } = data[0];
    return { lat, lon };
  }
  // TODO: Create fetchLocationData method
  // private async fetchLocationData(query: string) {}
  private async fetchWeatherData(coordinates: Coordinates): Promise<any> {
    const { lat, lon } = coordinates;
    const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}&units=imperial`;
    const response = await fetch(weatherUrl);
    const weatherData = await response.json();
    return weatherData;
  }
  // TODO: Create destructureLocationData method
  // private destructureLocationData(locationData: Coordinates): Coordinates {}
  // TODO: Create buildGeocodeQuery method
  // private buildGeocodeQuery(): string {}
  // TODO: Create buildWeatherQuery method
  // private buildWeatherQuery(coordinates: Coordinates): string {}
  // TODO: Create fetchAndDestructureLocationData method
  // private async fetchAndDestructureLocationData() {}
  // TODO: Create fetchWeatherData method
  // private async fetchWeatherData(coordinates: Coordinates) {}
  // TODO: Build parseCurrentWeather method
  // private parseCurrentWeather(response: any) {}
  // TODO: Complete buildForecastArray method
  // private buildForecastArray(currentWeather: Weather, weatherData: any[]) {}
  // TODO: Complete getWeatherForCity method
  // async getWeatherForCity(city: string) {}
}

export default new WeatherService();
