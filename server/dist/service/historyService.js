import fs from "fs/promises";
import { v4 as uuidv4 } from "uuid";
// TODO: Define a City class with name and id properties
class City {
    constructor(name) {
        this.id = uuidv4();
        this.name = name;
    }
}
class HistoryService {
    constructor() {
        this.filePath = "db/searchHistory.json";
    }
    // TODO: Ensure the file exists before trying to read or write to it
    async ensureFileExists() {
        try {
            await fs.access(this.filePath);
        }
        catch (error) {
            if (error.code === "ENOENT") {
                // Create the file with an empty array if it doesn't exist
                await fs.writeFile(this.filePath, "[]", "utf8");
            }
            else {
                throw error; // Other errors should be handled properly
            }
        }
    }
    async read() {
        // TODO: Ensure the file exists before reading
        await this.ensureFileExists();
        const data = await fs.readFile(this.filePath, "utf8");
        return JSON.parse(data);
    }
    // TODO: Define a write method that writes the updated cities array to the searchHistory.json file
    async write(cities) {
        await fs.writeFile(this.filePath, JSON.stringify(cities, null, 2), "utf-8");
    }
    // TODO: Define a getCities method that reads the cities from the searchHistory.json file and returns them as an array of City objects
    async getCities() {
        return await this.read();
    }
    // TODO: Define an addCity method that adds a city to the searchHistory.json file
    async addCity(cityName) {
        const cities = await this.read();
        cities.push(new City(cityName));
        await this.write(cities);
    }
    // * BONUS TODO: Define a removeCity method that removes a city from the searchHistory.json file
    async removeCity(id) {
        let cities = await this.read();
        cities = cities.filter((cityName) => cityName.id !== id);
        await this.write(cities);
    }
}
export default new HistoryService();
