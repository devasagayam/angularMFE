import { NgModule } from '@angular/core';
import { UserFacade } from './user.facade';

@NgModule({
  providers: [
    UserFacade
  ]
})
export class UserFacadeModule {
  static forRoot() {
    return {
      ngModule: UserFacadeModule,
      providers: [UserFacade]
    };
  }
}