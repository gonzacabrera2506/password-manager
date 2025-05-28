import { Routes } from "@angular/router";

export default [
    {
        path: '',
        loadComponent: () => import('./clients-list/clients-list.component')
    },
   
] as Routes;