import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BaoIconModule } from '../icon';
import { BaoDropDownMenuComponent, BaoDropDownMenuItemComponent } from './dropdown-menu.component';

const DROPDOWN_MENU_DIRECTIVES = [BaoDropDownMenuComponent, BaoDropDownMenuItemComponent];

@NgModule({
  imports: [BaoIconModule, CommonModule, OverlayModule],
  declarations: [DROPDOWN_MENU_DIRECTIVES],
  exports: [DROPDOWN_MENU_DIRECTIVES, OverlayModule]
})
export class BaoDropDownMenuModule {}
