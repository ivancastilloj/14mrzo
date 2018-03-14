import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewyorkComponent } from './private/newyork/newyork.component';
import { HongkongComponent } from './private/hongkong/hongkong.component';
import { FilipinasComponent } from './private/filipinas/filipinas.component';
import { HomeComponent } from './private/home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
  {
    path: 'NewYork',
    component: NewyorkComponent,
    data: { title: 'NewYork' }
  },
  {
    path: 'HongKong',
    component: HongkongComponent,
    data: { title: 'HongKong' }
  },
  {
    path: 'Filipinas',
    component: FilipinasComponent,
    data: { title: 'Filipinas' }
  },
  {
    path: 'privado',
    component: HomeComponent,
    data: { title: 'Home' },
     canActivate: [AuthGuard]
  },
  {path: '', 
  component: HomeComponent},

  {path: 'login', 
  component: LoginComponent},

  {path: 'register', 
  component: RegisterComponent},
  
  {path: '**', component: NotFoundComponent}


];

@NgModule({
 
  imports: [RouterModule.forRoot(routes), RouterModule.forRoot(
    routes,
    { enableTracing: true } // <-- debugging purposes only
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
