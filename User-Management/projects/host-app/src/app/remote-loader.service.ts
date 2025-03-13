import { loadRemoteModule } from '@angular-architects/module-federation';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RemoteLoaderService {
  private moduleRef: any;

  async loadDynamicModule() {
    if (this.moduleRef) {
      return this.moduleRef; 
    }

    try {
      const remoteModule = await loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4400/remoteEntry.js',
        exposedModule: './DynamicFormModule',
      });

      console.log('Remote module loaded:', remoteModule);
      this.moduleRef = remoteModule.DynamicFormModule;
      return this.moduleRef;
    } catch (error) {
      console.error('Error loading remote module:', error);
      return null;
    }
  }

  async getDynamicFormComponent() {
    const module = await this.loadDynamicModule();
    return module?.ɵmod?.declarations?.find((c:any) => c.name === 'DynamicFormComponent');
  }
}
