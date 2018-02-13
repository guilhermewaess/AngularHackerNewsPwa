import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatToolbarModule,
  MatChipsModule,
  MatCardModule,
  MatGridListModule,
} from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatGridListModule,
    MatToolbarModule,
  ],
})
export class MaterialModule { }
