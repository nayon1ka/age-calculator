# Age Calculator

A simple, modern web application that calculates a user's exact age in years, months, and days based on their selected birthdate. Built with vanilla JavaScript, Vite, Luxon, and Flatpickr, the app features a clean, responsive UI and robust input validation.

## Live Demo

> 🚧 Not deployed yet. A live demo link will be added here once the project is hosted.

## Project URL
This project is a solution to the Roadmap.sh Age Calculator project:
https://roadmap.sh/projects/age-calculator

## Features

- 📅 Select a birthdate using a JavaScript-powered datepicker (Flatpickr)
- 🧮 Calculate exact age in years, months, and days using Luxon
- ✅ Input validation to prevent invalid or future dates
- 📄 Results displayed instantly on the same page
- 📱 Fully responsive, modern interface built with pure CSS
- 🌗 Automatic light/dark mode support based on system preference

## Technologies Used

- **HTML** – Semantic markup
- **CSS** – Custom, responsive styling (no frameworks)
- **JavaScript (ES Modules)** – Application logic
- **Vite** – Fast development server and build tool
- **Luxon** – Date and time calculations
- **Flatpickr** – Lightweight JavaScript datepicker

## Installation

Clone the repository, then install dependencies and start the development server:

```bash
npm install
npm install luxon flatpickr
npm run dev
```
age-calculator/
├── index.html
├── package.json
├── src/
│ ├── main.js
│ └── style.css
└── README.md

## Future Improvements

- Add unit tests for age calculation logic
- Support multiple date formats and locales
- Add a "copy result" or "share result" button
- Add an option to calculate age relative to a custom target date (not just today)
- Improve accessibility with enhanced ARIA support and keyboard navigation
- Deploy the project and add a live demo link

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
The app will be available at the local URL printed in your terminal (typically `http://localhost:5173`).

## Project Structure
