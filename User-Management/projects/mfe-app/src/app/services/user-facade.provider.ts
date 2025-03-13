// user-facade.provider.ts
import { APP_INITIALIZER, FactoryProvider, Injector } from '@angular/core';

let userFacadeInstance: any;

export const USER_FACADE = 'USER_FACADE';

export const initUserFacade = async (injector: Injector) => {
  userFacadeInstance = await initUserFacade(injector);
  return userFacadeInstance;
};

export const userFacadeProvider: FactoryProvider = {
  provide: USER_FACADE,
  useFactory: () => userFacadeInstance,
  deps: []
};

export const userFacadeInitializer = {
  provide: APP_INITIALIZER,
  useFactory: (injector: Injector) => () => initUserFacade(injector),
  multi: true,
  deps: [Injector]
};