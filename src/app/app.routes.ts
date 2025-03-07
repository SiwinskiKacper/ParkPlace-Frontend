import { Routes } from '@angular/router';
import { RegisterPanelComponent } from './register-panel/register-panel.component';
import { ReservationDashboardComponent } from './reservation-dashboard/reservation-dashboard.component';
import { ReservationPanelComponent } from './reservation-panel/reservation-panel.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: 'dashboard', component: ReservationDashboardComponent },
  { path: 'reservation', component: ReservationPanelComponent },
  { path: '', component: RegisterPanelComponent },
  { path: 'login', component: LoginComponent },
];