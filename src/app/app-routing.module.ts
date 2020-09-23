import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FeaturedQuestionComponent } from './featured-question/featured-question.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: FeaturedQuestionComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'profile/:userId',
    component: UserProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
