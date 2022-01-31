import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AlunosGuard implements CanActivateChild {
    
    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {

        if(state.url.includes('editar')){
            //alert('Usuário não autorizado');
            // return Observable.of(false);
           // return false;
        }

        return true;
    }
}
