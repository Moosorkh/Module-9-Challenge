# Weather Dashboard

## Description

This project is a Weather Dashboard that allows users to search for weather information of any city. The motivation behind this project was to create a simple and intuitive application for users to quickly access weather information and store their search history for future reference.

The project was built to address the need for an accessible weather application with persistent search history. It helps users to not only retrieve current weather information but also allows them to see the previous cities they have searched for, enhancing the user experience.

Throughout the project, we learned how to work with APIs, handle persistent storage in the form of JSON files, implement in-memory fallback for data, and work with the complexities of both frontend and backend integration in a full-stack application.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)

## Installation

To install and run the project locally, follow these steps:

1. Clone the repository:

git clone https://github.com/your-username/your-repo-name.git

2. Navigate to the project directory:
cd Weather_Dashboard


3. Install the required dependencies for both the client and server:
npm install


4. In the `/server` directory, create a `db` folder if it doesn't exist:
mkdir db


5. Create a `searchHistory.json` file inside the `db` folder:
echo "[]" > db/searchHistory.json


6. Start the development environment:
- For the backend:
  ```
  npm run server
  ```
- For the frontend:
  ```
  npm run client
  ```

7. Navigate to `http://localhost:3000` in your browser to use the application.

## Usage

Once installed and running, users can search for weather data by entering the name of a city in the input field. The weather data will be fetched and displayed on the dashboard. The previous searches will be displayed on the sidebar as history, allowing the user to reselect them quickly.

Screenshots for reference:

![Weather Dashboard Screenshot](assets/images/screenshot.png)

## Credits

- GitHub profile of collaborator: [Your Friend's Name](https://github.com/your-friend-github)
- The project relies on the [OpenWeatherMap API](https://openweathermap.org/) for weather data.
- We utilized the [Vite](https://vitejs.dev/) bundler for faster front-end development.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Badges

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Top Language](https://img.shields.io/github/languages/top/your-username/your-repo-name)

## Features

- Search for current weather information by city name.
- View a 5-day forecast for the selected city.
- Persistent search history that stores previous city searches.
- Simple and responsive UI for better user experience.
- In-memory fallback for weather search history in case of server issues.

## How to Contribute

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

For more details, please see the [Contributor Covenant](https://www.contributor-covenant.org/).

## Tests

We have implemented unit tests for the backend services using Jest. To run the tests, use the following command:
npm test


Make sure all tests pass before submitting any pull requests.
