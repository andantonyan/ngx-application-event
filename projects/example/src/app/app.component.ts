import { Component } from '@angular/core';

import { NgxApplicationEventService, NgxEventListener } from 'ngx-application-event';

class UserChangedEvent {
}

class UserDeletedEvent {
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lastEvent: UserChangedEvent | UserDeletedEvent | null = null;

  constructor(private ngxApplicationEventService: NgxApplicationEventService) {
  }

  publishUserChangedEvent() {
    this.ngxApplicationEventService.publishEvent(new UserChangedEvent())
  }

  publishUserDeleteEvent() {
    this.ngxApplicationEventService.publishEvent(new UserDeletedEvent())
  }

  @NgxEventListener
  private listenUserChange(event: UserChangedEvent) {
    console.log(`New event: [${event.constructor.name}]`);
    this.lastEvent = event;
  }

  @NgxEventListener
  private listenUserDelete(event: UserDeletedEvent) {
    console.log(`New event: [${event.constructor.name}]`);
    this.lastEvent = event;
  }
}
