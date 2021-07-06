import { WeatherComponent } from './weather.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'weather', pathMatch: 'full' },
  { path: 'weather', component: WeatherComponent },
];

export const WeatherRoutes = RouterModule.forRoot(routes, { useHash: true });
