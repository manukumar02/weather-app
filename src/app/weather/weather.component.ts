import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../providers/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  weatherData: any;
  cityName: string = '';
  weatherForecaseList: any[] = [];
  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
    this.weatherService.searchedCityName$.subscribe((cityName) => {
      this.weatherService.searchWeatherData(cityName).subscribe(res => {
        console.log(res);
        this.weatherData = res;
        this.cityName = `${res.city.name} - ${res.city.country}`;
        this.weatherForecaseList = res.list;
      }, error => {
        console.log(error);
      })
    })

  }

  getDateTime(dt: any) {
    const a = new Date(dt * 1000);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const year = a.getFullYear();
    const month = months[a.getMonth()];
    const date = a.getDate();
    const hour = a.getHours();
    const min = a.getMinutes();
    const sec = a.getSeconds();
    const time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
    return time;
  }

}
