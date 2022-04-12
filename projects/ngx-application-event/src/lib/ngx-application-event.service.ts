import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NgxApplicationEventService {
  private events$ = new Subject<unknown>();

  publish(event: object): void {
    this.events$.next(event);
  }

  listen<T extends Function>(type: T): Observable<T> {
    return this.events$.pipe(filter(e => e instanceof type)) as Observable<T>;
  }
}
