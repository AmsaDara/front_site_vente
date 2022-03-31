import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { ArticlesPageComponent } from './articles-page/articles-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ArticlesModule } from '../articles/articles.module';
import { MaterialModule } from '../shared/material/material.module';
import { UserModule } from '../shared/user/user.module';
import { SigninPageComponent } from './signin-page/signin-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { FooterComponent } from './footer/footer.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    HomePageComponent,
    ArticlesPageComponent,
    AboutPageComponent,
    ContactPageComponent,
    SigninPageComponent,
    RegisterPageComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ArticlesModule,
    UserModule,
    MaterialModule
  ],
  exports: [
    HomePageComponent,
    ArticlesPageComponent,
    AboutPageComponent,
    ContactPageComponent,
    SigninPageComponent,
    RegisterPageComponent,
    FooterComponent
  ]
})
export class LayoutsModule { }
