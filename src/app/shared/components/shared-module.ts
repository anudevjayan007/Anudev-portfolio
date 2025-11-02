import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Footer } from './footer/footer';
import { Navbar } from './navbar/navbar';

@NgModule({
  declarations: [Navbar, Footer],
  imports: [CommonModule, RouterModule],
  exports: [Navbar, Footer]
})
export class SharedModule {}
