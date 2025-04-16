import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    { path: 'registro', component: RegistroComponent },
    { path: 'home', component: HomeComponent }

];
