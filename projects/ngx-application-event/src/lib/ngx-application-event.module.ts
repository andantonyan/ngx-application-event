import { Injector, NgModule } from '@angular/core';

import { NgxApplicationEventService } from './ngx-application-event.service';

@NgModule()
export class NgxApplicationEventModule {
  private static eventService: NgxApplicationEventService | null = null;

  static getApplicationEventService(): NgxApplicationEventService {
    if (NgxApplicationEventModule.eventService === null) {
      throw Error('[NgxApplicationEventService] not initialized');
    }

    return NgxApplicationEventModule.eventService;
  }

  constructor(private readonly injector: Injector) {
    NgxApplicationEventModule.eventService = this.injector.get(NgxApplicationEventService);
  }
}
