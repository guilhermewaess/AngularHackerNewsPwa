import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { MaterialModule } from './../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [AppMenuComponent],
  declarations: [AppMenuComponent]
})
export class MenuModule { }
