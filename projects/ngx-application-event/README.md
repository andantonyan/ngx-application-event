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

  publish(): void {
    this.applicationEventService.publish(new UserDeleted())
  }
}
```

```ts
// listen event in Component

@Component({...})
export class AppListener {
  
  @NgxEventListener
  private on(event: UserDeleted) {
    console.log(`New event: [${event.constructor.name}]`);
  }
}
```


```ts
// listen event in Service

@Service({...})
export class AppListener {
  constructor(private applicationEventService: NgxApplicationEventService) {
  }

  publish(): void {
    this.applicationEventService.publish(new UserDeleted())
  }

  listen(): void {
    this.applicationEventService.listen(UserDeleted).subscribe(console.log)
  }
}
```
