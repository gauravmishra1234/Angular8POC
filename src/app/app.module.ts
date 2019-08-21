import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { NgxInfiniteScrollerModule } from 'ngx-infinite-scroller';
// used to create fake backend


//import { AppComponent }  from './app.component';
//import { routing }        from './app.routing';

//import { JwtInterceptor, ErrorInterceptor } from './_helpers';
//import { HomeComponent } from './home';
//import { AdminComponent } from './admin';
//import { LoginComponent } from './login';
import { AppComponent } from './app.component';
//import { routing } from './app-routing.module';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { routing } from './app.routing';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forRoot([]),
        routing,
        FormsModule,
        NgxInfiniteScrollerModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AdminComponent,
        LoginComponent,
        RegistrationComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        // provider used to create fake backend

    ],
    bootstrap: [AppComponent]
})

export class AppModule { }