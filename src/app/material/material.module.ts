import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatChipsModule,
  MatCardModule,
  MatDividerModule,
  MatGridListModule,
  MatListModule,
  MatToolbarModule,
} from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatDividerModule,
    MatGridListModule,
    MatListModule,
    MatToolbarModule,
  ],
})
export class MaterialModule { }
