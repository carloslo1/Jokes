import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

export const routes: Routes = [
    {'path': 'home', 'title': 'Home', component:HomeComponent},
    {'path': 'about', 'title': 'About', component:AboutComponent},
    {'path': '', redirectTo: 'home', pathMatch: "full"},
    {'path': '**', component:NotFoundPageComponent}
];
