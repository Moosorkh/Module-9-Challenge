import fs from 'fs/promises';
import { v4 as uuidv4 } from 'uuid';


// TODO: Define a City class with name and id properties
class City {
  id: string;
  name: string;

  constructor(name: string) {
    this.id = uuidv4();
    this.name = name;
  }
}

class HistoryService {
  private filePath = "db/searchHistory.json";

  private async read(): Promise<City[]> {
    const data = await fs.readFile(this.filePath, "utf8");
    return JSON.parse(data) as City[];
  }

  // TODO: Define a write method that writes the updated cities array to the searchHistory.json file
  private async write(cities: City[]): Promise<void> {
    await fs.writeFile(
      this.filePath,
      JSON.stringify(cities, null, 2), 
      "utf-8"
    );
  }

  // TODO: Define a getCities method that reads the cities from the searchHistory.json file and returns them as an array of City objects
  async getCities(): Promise<City[]> {
    return await this.read();
  }

  // TODO: Define an addCity method that adds a city to the searchHistory.json file
  async addCity(cityName: string): Promise<void> {
    const cities = await this.read();
    cities.push(new City(cityName));
    await this.write(cities);
  }

  // * BONUS TODO: Define a removeCity method that removes a city from the searchHistory.json file
  async removeCity(id: string): Promise<void> {
    let cities = await this.read();
    cities = cities.filter((cityName) => cityName.id !== id);
    await this.write(cities);
  }
}

export default new HistoryService();
