import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityShowcaseRoutingModule } from './security-showcase-routing-module';
import { SecurityShowcase } from './security-showcase';


@NgModule({
  declarations: [
    SecurityShowcase
  ],
  imports: [
    CommonModule,
    SecurityShowcaseRoutingModule
  ]
})
export class SecurityShowcaseModule { }
