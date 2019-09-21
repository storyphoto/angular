// Logout.service.ts

import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class LogoutGuard implements CanDeactivate<boolean> {
    canDeactivate(
        component: null,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return window.confirm("나가시겠습니까?");
    }
}