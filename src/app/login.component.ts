import {Component} from '@angular/core';
import * as _ from 'lodash';
import {AuthService} from './auth/auth.service';
import {Router} from '@angular/router';
import {AuthGuardService} from './auth/auth-guard.service';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {
  public username: string;
  public password: string;

  constructor(private authService: AuthService, private authGuardService: AuthGuardService, private router: Router) {
  }

  public async login() {
    await this.authService.login(this.username, this.password);

    const routePreviousToLogin = this.authGuardService.routePreviousToLogin;
    if (!_.isNil(routePreviousToLogin)) {
      this.router.navigateByUrl(routePreviousToLogin);
      return;
    }

    this.router.navigate(['test/home']);
  }
}
