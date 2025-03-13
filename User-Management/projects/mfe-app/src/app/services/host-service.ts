import { loadRemoteModule } from '@angular-architects/module-federation';
import { runInInjectionContext, Injector } from '@angular/core';

export const initUserFacade = async (injector: Injector) => {
  const { UserFacade } = await loadRemoteModule({
    type: 'module',
    remoteEntry: 'http://localhost:4200/remoteEntry.js',
    exposedModule: './UserFacade'
  });
  
  // Create the instance within an injection context
  return runInInjectionContext(injector, () => new UserFacade());
};