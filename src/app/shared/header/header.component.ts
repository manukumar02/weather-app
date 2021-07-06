import { Maps, PlacesService } from './../../providers/places.service';
import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { WeatherService } from 'src/app/providers/weather.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('search')
  searchElementRef: ElementRef | undefined;

  constructor(
    private ngZone: NgZone,
    private placesService: PlacesService,
    private weatherService: WeatherService
  ) {
    this.placesService.api.then(maps => {
      this.initAutocomplete(maps);
    });
  }

  ngOnInit() {
  }

  initAutocomplete(maps: Maps) {
    let autocomplete = new maps.places.Autocomplete(this.searchElementRef?.nativeElement);
    autocomplete.addListener('place_changed', () => {
      this.ngZone.run(() => {
        console.log(autocomplete.getPlace())
        this.weatherService.getSearchedCityName(autocomplete.getPlace().name);
      });
    });
  }

}
