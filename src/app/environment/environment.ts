export const environment = {
  production: false,
  base_url: 'https://weather-api99.p.rapidapi.com/weather',
  rapidApiKeyHeaderName: 'X-RapidAPI-Key',
  rapidApiKeyHeaderValue: '8acb945790msh2633fa8621a179ap1e44e3jsncb0852535bbb',

  rapidApiHostHeaderName: 'X-RapidAPI-Host',
  rapidApiHostHeaderValue: 'weather-api99.p.rapidapi.com',
};

export interface WeatherData {
  base: string;
  clouds: Clouds;
  cod: number;
  coord: Coord;
  dt: number;
  id: number;
  main: Main;
  name: string;
  sys: Sys;
  timezone: number;
  visibility: number;
  weather: Weather[];
  wind: Wind;
}

interface Clouds {
  all: number;
}

interface Coord {
  lat: number;
  lon: number;
}

interface Main {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

interface Sys {
  country: string;
  id: number;
  sunrise: number;
  sunset: number;
  type: number;
}

interface Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

interface Wind {
  deg: number;
  speed: number;
}
