import { Router } from "express";
import HistoryService from "../../service/historyService.js";
import WeatherService from "../../service/weatherService.js";

const router = Router();

// TODO: POST Request with city name to retrieve weather data
router.post("/", async (req, res) => {
  try {
    const { city } = req.body;
    if (!city) {
      return res.status(400).json({ message: "City is required" });
    }

    // TODO: GET weather data from city name
    const weatherData = await WeatherService.getWeatherForCity(city);
     console.log("Weather Data:", weatherData); 

    // TODO: save city to search history
    await HistoryService.addCity({ name: city });

    return res.json(weatherData);
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return res.status(500).json({ message: "Error fetching weather data", error });
  }
});

// TODO: GET search history
router.get("/history", async (_, res) => {
  try {
    const history = await HistoryService.getCities();
    res.json(history);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving search history", error });
  }
});

// * BONUS TODO: DELETE city from search history
router.delete("/history/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await HistoryService.removeCity(id);
    res.json({ message: `City with ID ${id} deleted from history` });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting city from history", error });
  }
});

export default router;
