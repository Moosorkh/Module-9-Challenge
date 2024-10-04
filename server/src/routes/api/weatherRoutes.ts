import { Router, type Request, type Response } from "express";
import HistoryService from "../../service/historyService.js";
import WeatherService from "../../service/weatherService.js";

const router = Router();

// TODO: POST Request with city name to retrieve weather data
router.post("/", (req: Request, res: Response) => {
  const cityName = req.body.cityName;
  // TODO: GET weather data from city name
  WeatherService.getWeatherForCity(cityName).then((data) => {
    // TODO: save city to search history
    HistoryService.addCity(cityName);
    res.json(data);
    console.log("Weather Data:", data);
  });
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
