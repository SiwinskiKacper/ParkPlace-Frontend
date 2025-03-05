import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './src/app/app.config';
import { AppComponent } from './src/app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './src/app/app.routes';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    provideRouter(routes)
  ]
}).catch((err) => console.error(err));