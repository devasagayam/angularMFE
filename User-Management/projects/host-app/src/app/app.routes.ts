import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

const REMOTE_ENTRY_URL = "http://localhost:4300/remoteEntry.js";

export const routes: Routes = [
    {
        path: 'user-list',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule)
    },
    {
        path: 'add-user',
        loadChildren: () => {
            return loadRemoteModule({
                remoteEntry: REMOTE_ENTRY_URL,
                type:"module",
                exposedModule: './AddUserModule' 
            }).then(m => m.AddUserModule)
              .catch(error => console.error("Error loading remote module:", error));
        }
    },
    {
        path: '**',
        redirectTo: ''
    }
];
