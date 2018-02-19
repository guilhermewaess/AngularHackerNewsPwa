import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
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
    FlexLayoutModule,
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
