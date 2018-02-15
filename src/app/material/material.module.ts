import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatChipsModule,
  MatCardModule,
  MatDividerModule,
  MatGridListModule,
  MatIconModule,
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
    MatIconModule,
    MatListModule,
    MatToolbarModule,
  ],
})
export class MaterialModule { }
