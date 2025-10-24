# 🌤️ Weather App

A modern, responsive weather application built with React, TypeScript, and Vite. Get real-time weather information for any city worldwide with an intuitive and beautiful interface.

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=flat&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=flat&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?style=flat&logo=vite&logoColor=white)

## ✨ Features

- 🌍 **Global Coverage** - Search weather for 195+ countries worldwide
- 🔍 **Smart Search** - City and country selection with comprehensive validation
- 📊 **Detailed Weather Info** - Temperature, humidity, pressure, and more
- 🎨 **Modern UI** - Clean, responsive design with CSS Modules
- ⚡ **Fast & Optimized** - Built with Vite for lightning-fast performance
- 🔒 **Type-Safe** - Full TypeScript implementation with Zod validation
- 🎯 **Loading States** - Elegant loading spinner and error handling
- 🌐 **API Integration** - OpenWeatherMap API with Axios

## 🛠️ Technologies

- **Frontend Framework:** React 19.1.1
- **Language:** TypeScript 5.9.3
- **Build Tool:** Vite 7.1.7
- **HTTP Client:** Axios 1.12.2
- **Validation:** Zod 4.1.12
- **Styling:** CSS Modules
- **Code Quality:** ESLint

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn
- OpenWeatherMap API Key ([Get one free here](https://openweathermap.org/api))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/react-typescript-weather.git
   cd react-typescript-weather
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_API_KEY=your_openweathermap_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173`

## 📦 Build for Production

```bash
npm run build
```

The optimized build will be in the `dist` folder.

## 🎯 Usage

1. **Select a Country** - Choose from 195+ countries in the dropdown
2. **Enter a City** - Type the name of any city in the selected country
3. **Get Weather** - Click "Search" to fetch real-time weather data
4. **View Details** - See temperature, humidity, pressure, and more

## 📁 Project Structure

```
src/
├── components/
│   ├── Alert/           # Alert notifications
│   ├── Form/            # Search form component
│   ├── Spinner/         # Loading spinner
│   └── WeatherDetail/   # Weather information display
├── data/
│   └── countries.ts     # List of 195 countries
├── hooks/
│   └── useWheater.ts    # Custom hook for weather API
├── types/
│   └── index.ts         # TypeScript type definitions
├── utils/
│   └── index.ts         # Utility functions
├── App.tsx              # Main app component
├── main.tsx             # App entry point
└── index.css            # Global styles
```

## 🔑 Key Components

### Custom Hook: `useWheater`
- Manages weather API calls with OpenWeatherMap
- Handles loading and error states
- Uses Zod for runtime type validation
- Geocoding API for accurate location coordinates

### Form Component
- Smart form validation
- Country and city selection
- Real-time error alerts
- Clean and intuitive UI

### Weather Detail Component
- Displays comprehensive weather information
- Formatted temperature display
- Shows humidity and pressure levels
- Responsive design

## 🌟 Features Showcase

### Type Safety
- Full TypeScript implementation
- Zod schema validation for API responses
- Type-safe props and state management

### Performance
- Optimized with React 19.1.1
- Fast refresh with Vite
- Efficient state management with custom hooks
- Memoized values to prevent unnecessary re-renders

### User Experience
- Loading indicators for async operations
- Clear error messages
- Form validation with helpful feedback
- Responsive design for all devices

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Alejandro Stabile**

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Icons and design inspiration from modern UI/UX principles
- Built with [Vite](https://vite.dev/) and [React](https://react.dev/)

---

⭐ If you found this project helpful, please consider giving it a star!
