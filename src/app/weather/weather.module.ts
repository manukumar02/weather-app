import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { WeatherComponent } from './weather.component';
import { WeatherRoutes } from './weather.routing';
import { WeatherCityComponent } from './weather-city/weather-city.component';

@NgModule({
  imports: [
    SharedModule,
    WeatherRoutes
  ],
  declarations: [WeatherComponent, WeatherCityComponent]
})
export class WeatherModule { }
