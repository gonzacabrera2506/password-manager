import { Component, inject } from "@angular/core";
import { Router, RouterLink, RouterModule } from "@angular/router";
import { AuthStateService } from "../data-access/auth-state.service";


@Component({
    standalone: true,
    imports: [RouterModule, RouterLink],
    selector: 'app-layout',
    template: `
     <header class="h-[80px] mb-8 w-full max-w-screen-lg mx-auto px-4">
      <nav class="flex items-center justify-between h-full">
        <a class="text-2xl font-bold" routerLink="/tasks">Clientes</a>
        <button
          type="button"
          class="focus:outline-none text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
          (click)="logOut()"
        >
          Salir
        </button>
      </nav>
    </header>
     <router-outlet /> `
})

export default class LayoutComponent {
    private _authState = inject(AuthStateService);
    private _router = inject(Router);

    async logOut() {
        await this._authState.logOut();
        this._router.navigateByUrl('/auth/sign-in');
    }
}