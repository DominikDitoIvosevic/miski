import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';


import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { HomeComponent } from './home/index';
import { CoursesComponent } from './courses/index';
import { RegisterComponent } from './register/index';
import { AboutComponent } from './about/about.component'
import { ContentComponent } from './content/content.component'
import { MembersComponent } from './members/members.component'

// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModuleModule} from './material-module/material-module.module';

@NgModule({
    imports: [
        BrowserModule,
        // BrowserAnimationsModule,
        MaterialModuleModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        MembersComponent,
        RegisterComponent,
        CoursesComponent,
        AboutComponent,
        ContentComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,

        // providers used to create fake backend
        // fakeBackendProvider,
        // MockBackend,
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
