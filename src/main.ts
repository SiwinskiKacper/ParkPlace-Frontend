import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';  
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    provideRouter(routes),
    ReactiveFormsModule,
    CommonModule
  ]
}).catch((err) => console.error(err));
