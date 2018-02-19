import { NgModule } from '@angular/core';
import {
  MatBadgeModule,
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
    MatBadgeModule,
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
