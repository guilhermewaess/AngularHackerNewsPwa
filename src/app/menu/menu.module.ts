import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { MaterialModule } from './../material/material.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LogoComponent } from '../logo/logo.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
  ],
  exports: [AppMenuComponent, SidenavComponent],
  declarations: [
    AppMenuComponent, 
    SidenavComponent,
    LogoComponent,
  ]
})
export class MenuModule { }
