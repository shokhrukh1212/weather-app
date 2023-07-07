import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { WeatherApiService } from './services/weather-api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  city: string = 'Tashkent';
  cityId: string = '';
  temp: number = 0;
  cityName: string = '';
  weatherDescription: string = '';
  className: string = '';
  extraClassName: string = '';

  humidity: number = 0;
  windSpeed: number = 0;
  windDegree: number = 0;
  pressure: number = 0;
  feelsLike: number = 0;
  lastUpdate: string = '';
  timeNow: string = '';

  showExtraInfo: boolean = false;
  showExtraText: string = 'View More';

  constructor(private weatherApi: WeatherApiService) {}

  ngOnInit(): void {
    this.getWeatherData(this.city);
    this.city = '';
  }

  onSubmit() {
    this.getWeatherData(this.city);
    this.city = '';

    this.showExtraText = 'View More';
    this.showExtraInfo = false;
  }

  private getWeatherData(city: string) {
    this.weatherApi.getWeather(city).subscribe({
      next: (res) => {
        this.temp = Math.round(res.current.temp_c);
        this.cityName = `${res.location.country}, ${res.location.name}`;
        this.weatherDescription = res.current.condition.text;
        this.humidity = res.current.humidity;
        this.windSpeed = Math.round(res.current.wind_kph);
        this.windDegree = res.current.wind_degree;
        this.lastUpdate = res.current.last_updated;
        this.timeNow = res.location.localtime;
        this.pressure = res.current.pressure_mb;
        this.feelsLike = Math.round(res.current.feelslike_c);

        // giving a class name depending on a weather
        if (res.current.is_day === 1) {
          this.className = 'daytime';
          this.extraClassName = 'daytimeExtra';
        } else {
          this.className = 'nighttime';
          this.extraClassName = 'nighttimeExtra';
        }
      },
      error: (err) => console.log('Error: ', err),
    });
  }

  onShowExtra() {
    if (this.showExtraInfo === false) {
      this.showExtraText = 'View Less';
      this.showExtraInfo = true;
    } else {
      this.showExtraText = 'View More';
      this.showExtraInfo = false;
    }
  }
}
