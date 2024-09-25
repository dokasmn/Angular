import { Routes } from '@angular/router';
import { HomeComponent } from './app/pages/home/home.component';
import { LoginComponent } from './app/pages/login/login.component';
import { RegisterProductComponent } from './app/pages/register-product/register-product.component';
import { ShoppingCartComponent } from './app/pages/shopping-cart/shopping-cart.component';

export const routes: Routes = [
    {
        path:"",
        component: HomeComponent
    },
    {
        path:"login",
        component: LoginComponent
    },
    {
        path:"product",
        component: RegisterProductComponent
    },
    {
        path:"shopping-cart",
        component: ShoppingCartComponent
    }
]
