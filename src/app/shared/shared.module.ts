import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { MaterialModule } from '../material.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    GooglePlaceModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    HeaderComponent,
    GooglePlaceModule
  ],
  providers: []
})
export class SharedModule { }
