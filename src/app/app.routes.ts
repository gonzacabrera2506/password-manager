import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./auth/features/auth.routes')
    },
    {
        path: 'clients',
        loadChildren: () => import('./clients/features/clients.routes')
    },
    {
        path: '**',
        redirectTo: '/clients'
    }
];
