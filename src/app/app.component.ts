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
  weatherData!: WeatherData;
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
        this.temp = Math.round(res.main.temp - 273.15);
        this.cityName = res.name;
        this.weatherData = res;
        console.log(res);
      },
      error: (err) => console.log('Error: ', err),
    });
  }
}
