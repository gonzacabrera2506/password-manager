import { Routes } from "@angular/router";

export default [
    {
        path: '',
        loadComponent: () => import('./clients-list/clients-list.component')
    },
    {
        path: 'new',
        loadComponent: () => import('./clients-form/clients-form.component')
    },
    {
        path: 'edit/:id',
        loadComponent: () => import('./clients-form/clients-form.component')
    }
   
] as Routes;