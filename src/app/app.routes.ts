import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterProductComponent } from './pages/register-product/register-product.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';

export const routes: Routes = [
    {
        path:"",
        component: LoginComponent
    },
    {
        path:"home",
        component: HomeComponent
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
