import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgxApplicationEventService {
  events$ = new Subject<unknown>();

  publishEvent(event: object) {
    this.events$.next(event);
  }
}
