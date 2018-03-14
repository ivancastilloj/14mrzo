import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NewyorkComponent } from './private/newyork/newyork.component';
import { FilipinasComponent } from './private/filipinas/filipinas.component';
import { HongkongComponent } from './private/hongkong/hongkong.component';
import { HomeComponent } from './private/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from '../environments/environment';
import { ModelService } from './model.service';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {FlashMessagesService} from 'angular2-flash-messages';
import { HomepageComponent } from './homepage/homepage.component';
@NgModule({
  declarations: [
    AppComponent,
    NewyorkComponent,
    FilipinasComponent,
    HongkongComponent,
    HomeComponent,
    LoginComponent,
    NotFoundComponent,
    RegisterComponent,
    NavbarComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FlashMessagesModule
  

  ],
  providers: [ModelService, AuthGuard,AuthService,FlashMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
