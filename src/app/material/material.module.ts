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
  MatSidenavModule,
  MatDialogModule,
  MatSpinner,
  MatProgressSpinnerModule,
} from '@angular/material';

@NgModule({
  exports: [
    FlexLayoutModule,
    MatBadgeModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatDialogModule,
    MatDividerModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatProgressSpinnerModule
  ],
})
export class MaterialModule { }
