import fs from 'fs/promises';
import { v4 as uuidv4 } from 'uuid';
import filePath from "path";

interface City {
  id: string;
  name: string;
}

class HistoryService {
  ///server/db/searchHistory.json
  // private filePath = path.resolve("server/db/searchHistory.json");
  // private filePath = "./server/db/searchHistory.json";
  private filePath =
    "C:/Users/Moosorkh/Documents/GitHub/Module-9-Challenge/server/db/searchHistory.json";

  private async read(): Promise<City[]> {
    const data = await fs.readFile(this.filePath, "utf8");
    return JSON.parse(data) as City[];
  }

  // TODO: Define a write method that writes the updated cities array to the searchHistory.json file
  private async write(cities: City[]): Promise<void> {
    await fs.writeFile(this.filePath, JSON.stringify(cities, null, 2));
  }

  // TODO: Define a getCities method that reads the cities from the searchHistory.json file and returns them as an array of City objects
  async getCities(): Promise<City[]> {
    return await this.read();
  }

  // TODO: Define an addCity method that adds a city to the searchHistory.json file
  async addCity(city: { name: string }): Promise<void> {
    const cities = await this.read();
    cities.push({ id: uuidv4(), ...city });
    await this.write(cities);
  }

  // * BONUS TODO: Define a removeCity method that removes a city from the searchHistory.json file
  async removeCity(id: string): Promise<void> {
    let cities = await this.read();
    cities = cities.filter((city) => city.id !== id);
    await this.write(cities);
  }
}

export default new HistoryService();
