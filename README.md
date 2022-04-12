# General Application Event Listener

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.2.

## Usage

```ts
// define custom event types

class UserDeleted {}
```

```ts
// publish event

@Component({...})
export class AppPublisher {
  constructor(private applicationEventService: NgxApplicationEventService) {
  }

  publishEvent(): void {
    this.applicationEventService.publishEvent(new UserDeleted())
  }
}
```

```ts
@Component({...})
export class AppListener {
  
  @NgxEventListener
  private on(event: UserDeleted) {
    console.log(`New event: [${event.constructor.name}]`);
  }
}
```


## Run example application
Run `ng serve` for a dev server. Navigate to `http://localhost:4200`.
