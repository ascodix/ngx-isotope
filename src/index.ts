import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsotopeGridComponent } from './isotope-grid/isotope-grid.component';
import { IsotopeItemComponent } from './isotope-item/isotope-item.component';

export * from './isotope-grid/isotope-grid.component';
export * from './isotope-item/isotope-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    IsotopeGridComponent,
    IsotopeItemComponent,
  ],
  exports: [
    IsotopeGridComponent,
    IsotopeItemComponent,
  ]
})
export class IsotopeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: IsotopeModule,
      providers: []
    };
  }
}
