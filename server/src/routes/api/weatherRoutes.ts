import { Router } from "express";
import HistoryService from "../../service/historyService";
import WeatherService from "../../service/weatherService";

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

    // TODO: save city to search history
    await HistoryService.addCity({ name: city });

    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ message: "Error fetching weather data", error });
  }
});

// TODO: GET search history
router.get("/history", async (req, res) => {
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
