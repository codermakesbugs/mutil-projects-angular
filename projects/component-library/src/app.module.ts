import { NgModule } from '@angular/core';
import { ButtonToggleComponent } from './components/button-toggle/button-toggle.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MaterialModule } from './shared/material.module';
import { ColorStylesComponent } from './components/color-styles/color-styles.component';

@NgModule({
  declarations: [
    ButtonToggleComponent,
    CheckboxComponent,
    ColorStylesComponent,
  ],
  imports: [
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CdkTreeModule,
  ],
  bootstrap: [],
  exports: [ButtonToggleComponent, CheckboxComponent, ColorStylesComponent, MaterialModule],
})
export class ComponentLibrary {}
