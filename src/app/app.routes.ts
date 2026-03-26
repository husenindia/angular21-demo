import { Routes } from '@angular/router';
import { Products } from './products/products';
import { Home } from './home/home';

export const routes: Routes = [
    { path: '', component: Home},
    { path: 'product-list', component: Products }, // default route

    
];
