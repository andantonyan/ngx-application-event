import { Injector, NgModule } from '@angular/core';

import { NgxApplicationEventService } from "./ngx-application-event.service";

@NgModule()
export class NgxApplicationEventModule {
  private static applicationEventService: NgxApplicationEventService | null = null;

  static getApplicationEventService(): NgxApplicationEventService {
    if (NgxApplicationEventModule.applicationEventService === null) {
      throw Error('NgxApplicationEventService not initialized');
    }

    return NgxApplicationEventModule.applicationEventService;
  }

  constructor(private injector: Injector) {
    NgxApplicationEventModule.applicationEventService = this.injector.get(NgxApplicationEventService);
  }
}
