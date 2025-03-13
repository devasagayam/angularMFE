import { NgModule } from '@angular/core';
import { RemoteLoaderService } from './remote-loader.service';

@NgModule({})
export class RemoteWrapperModule {
  static forRoot() {
    return {
      ngModule: RemoteWrapperModule,
      providers: [
        {
          provide: 'REMOTE_DYNAMIC_MODULE',
          useFactory: (loader: RemoteLoaderService) => loader.loadDynamicModule(),
          deps: [RemoteLoaderService]
        }
      ]
    };
  }
}
