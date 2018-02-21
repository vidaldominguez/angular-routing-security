import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule, APP_INITIALIZER} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {MenubarModule} from 'primeng/menubar';
import {TieredMenuModule} from 'primeng/tieredmenu';
import {TableModule} from 'primeng/table';
import {SplitButtonModule} from 'primeng/splitbutton';
import {DialogModule} from 'primeng/dialog';

import {AuthGuardService} from './_auth/auth-guard.service';
import {AuthService} from './_auth/auth.service';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {UserComponent} from './users/user.component';
import {AuthInterceptor} from './_auth/auth.interceptor';
import {LoginComponent} from './login/login.component';
import {AppRoutes} from './app.routes';
import {ErrorComponent} from './errors/error.component';
import {UserEditComponent} from './users/user-edit.component';
import {LayoutComponent} from './layout/layout.component';
import {ShowWithRolesDirective} from './_auth/utils/show-with-roles.directive';
import {ShowWithLoggedDirective} from './_auth/utils/show-with-logged.directive';
import {HideWithLoggedDirective} from './_auth/utils/hide-with-logged.directive';
import {ShowWithAnyRolesDirective} from './_auth/utils/show-with-any-roles.directive';
import {AuthInitializer} from './_auth/auth.initializer';
import {ApiMockInterceptor} from './_apiMock/apiMock.interceptor';
import {HttpClientModule} from '@angular/common/http';
import {RouterHistoryService} from './_helpers/router-history.service';

@NgModule({
  declarations: [AppComponent, HomeComponent, UserComponent, LoginComponent, ErrorComponent, UserEditComponent, LayoutComponent, ShowWithRolesDirective, ShowWithAnyRolesDirective, ShowWithLoggedDirective, HideWithLoggedDirective],
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, FormsModule, AppRoutes, ButtonModule, InputTextModule, MenubarModule, TieredMenuModule, TableModule, SplitButtonModule, DialogModule],
  providers: [AuthService, AuthGuardService, AuthInitializer, AuthInterceptor, ApiMockInterceptor, RouterHistoryService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
