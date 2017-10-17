import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { Injectable } from '@angular/core';
import swal from 'sweetalert2';
import {TokenService} from '../services/token.service';

@Injectable()
export class ActivateGuard implements CanActivate {

  private can = false;
  constructor(private router: Router, private tokenService: TokenService) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.tokenService.getAccessToken() === null) {
      this.router.navigate(['/login']);
      return false;
    }
    // this.tokenService.isAuthenticated();
    return true;
  }
}
