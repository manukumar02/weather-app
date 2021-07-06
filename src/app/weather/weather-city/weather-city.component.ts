import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/providers/weather.service';

@Component({
  selector: 'app-weather-city',
  templateUrl: './weather-city.component.html',
  styleUrls: ['./weather-city.component.scss']
})
export class WeatherCityComponent implements OnInit {
  cities = ['London', 'Paris', 'Amsterdam', 'Prague', 'Barcelona'];
  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
  }

  getWeather(location: string) {
    this.weatherService.getSearchedCityName(location);
  }

}
