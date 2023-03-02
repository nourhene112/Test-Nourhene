
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { AuthentificationComponent } from './authentification/authentification.component';

const routes: Routes = [
  { path: 'posts', component: PostListComponent },
  { path: 'authentification', component: AuthentificationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }