import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { MembersComponent } from './members/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import { CoursesComponent } from './courses/index';
import { AboutComponent } from 'app/about/about.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent }, //, canActivate: [AuthGuard] },
    { path: 'courses', component: CoursesComponent },
    { path: 'about', component: AboutComponent },
    { path: 'members', component: MembersComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
