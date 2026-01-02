import { useEffect, useState } from "react";
import { Cloud, CloudRain, Sun, CloudSnow, CloudFog } from "lucide-react";

export function WeatherWidget({ isScrolled = false }) {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                // Srinagar Coordinates: 34.08, 74.80
                const response = await fetch(
                    "https://api.open-meteo.com/v1/forecast?latitude=34.08&longitude=74.80&current_weather=true"
                );
                const data = await response.json();

                if (data.current_weather) {
                    setWeather({
                        temperature: data.current_weather.temperature,
                        weathercode: data.current_weather.weathercode
                    });
                }
            } catch (error) {
                console.error("Failed to fetch weather:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchWeather();
        // Poll every 30 minutes
        const interval = setInterval(fetchWeather, 30 * 60 * 1000);
        return () => clearInterval(interval);
    }, []);

    const getWeatherIcon = (code) => {
        // WMO Weather interpretation codes
        if (code <= 1) return <Sun className="w-4 h-4 text-yellow-400" />;
        if (code <= 3) return <Cloud className={`w-4 h-4 ${isScrolled ? 'text-gray-500' : 'text-gray-300'}`} />;
        if (code <= 48) return <CloudFog className={`w-4 h-4 ${isScrolled ? 'text-gray-500' : 'text-gray-400'}`} />;
        if (code <= 67) return <CloudRain className="w-4 h-4 text-blue-400" />;
        if (code <= 77) return <CloudSnow className={`w-4 h-4 ${isScrolled ? 'text-gray-600' : 'text-white'}`} />;
        if (code <= 82) return <CloudRain className="w-4 h-4 text-blue-500" />;
        if (code <= 86) return <CloudSnow className={`w-4 h-4 ${isScrolled ? 'text-gray-600' : 'text-white'}`} />;
        if (code <= 99) return <CloudRain className="w-4 h-4 text-purple-400" />; // Thunderstorm
        return <Sun className="w-4 h-4 text-yellow-400" />;
    };

    if (loading) return null;

    return (
        <div
            className={`hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-sm transition-colors cursor-default select-none ${isScrolled
                    ? 'bg-text-dark/5 border border-text-dark/10 hover:bg-text-dark/10'
                    : 'bg-white/10 border border-white/20 hover:bg-white/20'
                }`}
            title="Current weather in Srinagar"
        >
            <span className={`text-xs font-medium ${isScrolled ? 'text-text-dark/80' : 'text-white/90'}`}>Srinagar</span>
            {weather && (
                <>
                    <div className={`h-4 w-[1px] ${isScrolled ? 'bg-text-dark/20' : 'bg-white/30'}`}></div>
                    <div className="flex items-center gap-1.5">
                        {getWeatherIcon(weather.weathercode)}
                        <span className={`text-xs font-bold ${isScrolled ? 'text-text-dark' : 'text-white'}`}>{Math.round(weather.temperature)}°C</span>
                    </div>
                </>
            )}
        </div>
    );
}
