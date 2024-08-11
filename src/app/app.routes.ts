import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductlistComponent } from './productlist/productlist.component';

export const routes: Routes = [
    {path:'' , redirectTo:'home', pathMatch:'full'},
    {path:'home' , component:HomeComponent,title:'home'},
    {path:'about' , component:AboutComponent , title:"about"},
    {path:'productlist' , component:ProductlistComponent , title:"productlist"},
    {path:'**' , component:NotfoundComponent , title:'notfound'}
];
