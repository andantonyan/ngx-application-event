import 'reflect-metadata';

import { ɵNG_COMP_DEF as NG_COMP_DEF } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { NgxApplicationEventModule } from './ngx-application-event.module';

export function NgxEventListener(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  if (!(target.constructor?.[NG_COMP_DEF])) {
    throw new Error('Invalid target class, target must be Angular component');
  }

  const types = Reflect.getMetadata('design:paramtypes', target, propertyKey);

  if (types.length !== 1) {
    throw new Error('Event type is not specified, or is more than one');
  }

  const type = types[0];

  if (typeof type !== 'function') {
    throw new Error('Invalid argument passed, expecting Function or Class');
  }

  const ngOnInit = target.ngOnInit;
  const ngOnDestroy = target.ngOnDestroy;
  const unsubscribe$ = new Subject<void>();

  target.ngOnInit = function () {
    NgxApplicationEventModule.getApplicationEventService()
      .listen(type)
      .pipe(takeUntil(unsubscribe$))
      .subscribe(e => descriptor.value.call(this, e));

    if (ngOnInit) ngOnInit.call(this);
  };

  target.ngOnDestroy = function () {
    unsubscribe$.next();
    unsubscribe$.complete();

    if (ngOnDestroy) ngOnDestroy.call(this);
  };

  return descriptor;
}
