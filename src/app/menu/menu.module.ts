import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { MaterialModule } from './../material/material.module';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ],
  exports: [AppMenuComponent, SidenavComponent],
  declarations: [
    AppMenuComponent, 
    SidenavComponent
  ]
})
export class MenuModule { }
