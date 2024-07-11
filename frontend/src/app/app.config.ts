import { ApplicationConfig } from '@angular/core';
import { AppRoutingModule } from './app.routes'
import { provideZoneChangeDetection } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    { provide: 'APP_ROUTING_MODULE', useClass: AppRoutingModule }
  ]
};
