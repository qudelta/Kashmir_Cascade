
const WEATHER_CACHE = {};
const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes

/**
 * Fetches current weather for given coordinates
 * @param {number} lat 
 * @param {number} lon 
 * @returns {Promise<Object>}
 */
export async function fetchWeather(lat, lon) {
    if (!lat || !lon) return null;

    const cacheKey = `${lat.toFixed(2)},${lon.toFixed(2)}`;
    const now = Date.now();

    if (WEATHER_CACHE[cacheKey] && (now - WEATHER_CACHE[cacheKey].timestamp < CACHE_DURATION)) {
        return WEATHER_CACHE[cacheKey].data;
    }

    try {
        const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=1`
        );

        if (!response.ok) throw new Error('Weather fetch failed');

        const data = await response.json();
        const current = data.current;

        const result = {
            temp: Math.round(current.temperature_2m),
            condition: getWeatherCondition(current.weather_code),
            icon: getWeatherIcon(current.weather_code)
        };

        WEATHER_CACHE[cacheKey] = {
            timestamp: now,
            data: result
        };

        return result;
    } catch (error) {
        console.error('Weather error:', error);
        return null;
    }
}

function getWeatherCondition(code) {
    // WMO Weather interpretation codes (WW)
    const conditions = {
        0: 'Clear sky',
        1: 'Mainly clear', 2: 'Partly cloudy', 3: 'Overcast',
        45: 'Fog', 48: 'Depositing rime fog',
        51: 'Light drizzle', 53: 'Moderate drizzle', 55: 'Dense drizzle',
        61: 'Slight rain', 63: 'Moderate rain', 65: 'Heavy rain',
        71: 'Slight snow', 73: 'Moderate snow', 75: 'Heavy snow',
        77: 'Snow grains',
        80: 'Slight rain showers', 81: 'Moderate rain showers', 82: 'Violent rain showers',
        85: 'Slight snow showers', 86: 'Heavy snow showers',
        95: 'Thunderstorm', 96: 'Thunderstorm with slight hail', 99: 'Thunderstorm with heavy hail'
    };
    return conditions[code] || 'Unknown';
}

function getWeatherIcon(code) {
    // Basic mapping of codes to icons or styles
    if (code === 0) return 'Sun';
    if (code >= 1 && code <= 3) return 'CloudSun';
    if (code >= 45 && code <= 48) return 'CloudFog';
    if (code >= 51 && code <= 65) return 'CloudRain';
    if (code >= 71 && code <= 77) return 'CloudSnow';
    if (code >= 80 && code <= 82) return 'CloudRain';
    if (code >= 85 && code <= 86) return 'CloudSnow';
    if (code >= 95) return 'CloudLightning';
    return 'Cloud';
}
