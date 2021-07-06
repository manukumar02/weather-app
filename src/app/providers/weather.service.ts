import { Constant } from './../shared/constant/constant';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  // private _cityName: string = 'Pune';

  public searchedCityName = new BehaviorSubject<string>('Pune');
  searchedCityName$ = this.searchedCityName.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  // get searchedCityName() {
  //   return this._cityName;
  // }

  // set searchedCityName(cityName: string) {
  //   this._cityName = cityName;
  // }

  getSearchedCityName(cityName: string) {
    this.searchedCityName.next(cityName);
  }

  getWeatherItems() {

  }

  searchWeatherData(cityName: string): Observable<any> {
    return this.http.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${cityName}&cnt=16&appid=${Constant.WEATHER_KEY}&units=metric`);
  }

}
