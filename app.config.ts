import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { RouterModule } from '@angular/router';
import { RegisterPanelComponent } from './register-panel/register-panel.component';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
      provideRouter(routes),  
    
  ]
};
