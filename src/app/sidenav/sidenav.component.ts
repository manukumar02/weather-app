import { Constant } from './../shared/constant/constant';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  today: string = '';
  lat: number = 0;
  lng: number = 0;
  weatherData: any;
  loadingWeatherData = true;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.today = new Date().toLocaleTimeString('en-US', {
      hour12: true,
      hour: "numeric",
      minute: "numeric"
    });

    this.getCurrentLocation();

    this.weatherData = {
      main: {},
      isDay: true
    };

    console.log(this.weatherData);
  }

  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {

        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;

        this.getweatherData(this.lat, this.lng);

      }, (error) => {
        console.log(error);
      });
    } else {
      console.log('Location Permission not granted');
    }
  }

  getweatherData(lat: number, lng: number) {
    this.loadingWeatherData = true;
    this.http.get<any>(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${Constant.APP_ID}`).subscribe((res) => {
      console.log(res);
      this.setweatherData(res);
    }, error => {
      console.log(error);
      this.loadingWeatherData = false;
    })
  }

  setweatherData(data: any) {
    this.weatherData = data;
    let sunsetTime = new Date(this.weatherData.sys.sunset * 1000);
    this.weatherData.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.weatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.weatherData.temp_celcius = (this.weatherData.main.temp - 273.15).toFixed(0);
    this.weatherData.temp_min = (this.weatherData.main.temp_min - 273.15).toFixed(0);
    this.weatherData.temp_max = (this.weatherData.main.temp_max - 273.15).toFixed(0);
    this.weatherData.temp_feels_like = (this.weatherData.main.feels_like - 273.15).toFixed(0);
    this.loadingWeatherData = false;
  }

}
