import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecurityShowcase } from './security-showcase';

const routes: Routes = [{ path: '', component: SecurityShowcase }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityShowcaseRoutingModule { }
