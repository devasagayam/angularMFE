import { NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {  StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducer } from './store/app.state';
import { UserEffects } from './store/user.effects';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { RemoteWrapperModule } from './remote.wrapper.module';
import { RemoteLoaderService } from './remote-loader.service';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([UserEffects]),
    StoreDevtoolsModule.instrument({
      maxAge:25,
      logOnly:false
    }),
  ],
  providers:[provideHttpClient(),{
    provide: 'REMOTE_MODULE_INITIALIZER',
    useFactory: async (loader: RemoteLoaderService) => {
      const module = await loader.loadDynamicModule();
      return module;
    },
    deps: [RemoteLoaderService],
  },],
  declarations: [
    AppComponent,
    FormPageComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
