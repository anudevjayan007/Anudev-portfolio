import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'home', loadChildren: () => import('./features/home/home-module').then(m => m.HomeModule) },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'projects', loadChildren: () => import('./features/projects/projects-module').then(m => m.ProjectsModule) },
   { path: 'security', loadChildren: () => import('./features/security-showcase/security-showcase-module').then(m => m.SecurityShowcaseModule) },
    { path: 'contact', loadChildren: () => import('./features/contact/contact-module').then(m => m.ContactModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
