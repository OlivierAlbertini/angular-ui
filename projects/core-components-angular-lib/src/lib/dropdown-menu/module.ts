import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BaoIconModule } from '../icon';
import {
  BaoDividerComponent,
  BaoDropDownMenuComponent,
  BaoDropDownMenuContentComponent,
  BaoDropDownMenuDescriptionComponent,
  BaoDropDownMenuItemComponent,
  BaoDropDownMenuLabelComponent,
  BaoDropDownMenuTitleComponent
} from './dropdown-menu.component';

const DROPDOWN_MENU_DIRECTIVES = [
  BaoDropDownMenuComponent,
  BaoDropDownMenuItemComponent,
  BaoDropDownMenuLabelComponent,
  BaoDropDownMenuDescriptionComponent,
  BaoDropDownMenuTitleComponent,
  BaoDropDownMenuContentComponent,
  BaoDividerComponent,
];

@NgModule({
  imports: [BaoIconModule, CommonModule, OverlayModule],
  declarations: [DROPDOWN_MENU_DIRECTIVES],
  exports: [DROPDOWN_MENU_DIRECTIVES, OverlayModule]
})
export class BaoDropDownMenuModule {}
