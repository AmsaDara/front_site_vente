import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './gards/auth.guard';
import { AboutPageComponent } from './layouts/about-page/about-page.component';
import { ArticlesPageComponent } from './layouts/articles-page/articles-page.component';
import { ContactPageComponent } from './layouts/contact-page/contact-page.component';
import { HomePageComponent } from './layouts/home-page/home-page.component';
import { RegisterPageComponent } from './layouts/register-page/register-page.component';
import { SigninPageComponent } from './layouts/signin-page/signin-page.component';

const routes: Routes = [
  {
    path:'',
    component:HomePageComponent
  },
  {
    path:'allarticles',
    component:ArticlesPageComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'unallarticles',
    component:ArticlesPageComponent
  },
  {
    path:'about',
    component:AboutPageComponent
  },
  {
    path:'contact',
    component:ContactPageComponent
  },
  {
    path:'signin',
    component:SigninPageComponent
  },
  {
    path:'register',
    component:RegisterPageComponent
  },
  {
    path:'**',
    redirectTo:'',
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }