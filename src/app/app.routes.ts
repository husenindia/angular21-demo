import { Routes } from '@angular/router';
import { Products } from './products/products';

export const routes: Routes = [
    { path: '', redirectTo: 'products', pathMatch: 'full'},
    { path: 'product-list', component: Products }, // default route

    
];
