import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { WeatherData } from './environment/environment';

import { WeatherService } from './services/weather.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  city: string = 'Tashkent';
  temp: number = 0;
  cityName: string = '';
  weatherDescription: string = '';
  className: string = '';
  weatherData!: WeatherData;

  humidity: number = 0;
  windSpeed: number = 0;
  windDegree: number = 0;
  maxTemp: number = 0;
  minTemp: number = 0;

  today: Date = new Date();
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeatherData(this.city);
    this.city = '';
  }

  onSubmit() {
    this.getWeatherData(this.city);
    this.city = '';
  }

  private getWeatherData(city: string) {
    this.weatherService.getWeatherData(city).subscribe({
      next: (res) => {
        this.temp = Math.ceil(res.main.temp - 273.15);
        this.cityName = res.name;
        this.weatherData = res;
        this.weatherDescription = res.weather[0].description.toUpperCase();
        this.humidity = res.main.humidity;
        this.windSpeed = res.wind.speed;
        this.windDegree = res.wind.deg;
        this.maxTemp = Math.ceil(res.main.temp_max - 273.15);
        this.minTemp = Math.ceil(res.main.temp_min - 273.15);

        // giving a class name depending on a weather
        if (this.temp >= 0 && this.temp < 10) {
          this.className = 'container-snowy';
        } else if (this.temp >= 5 && this.temp <= 20) {
          this.className = 'container-rainy';
        } else {
          this.className = 'container-shiny';
        }

        console.log(res);
      },
      error: (err) => console.log('Error: ', err),
    });
  }
}
