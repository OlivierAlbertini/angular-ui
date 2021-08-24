import {  Component, Directive, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'bao-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BaoDropDownMenuComponent {

  @Input() public isOpen = false;
  @Input() public triggerOrigin: any;
  @Input() public width: string = '256px';
}

@Component({
  selector: 'bao-divider, [bao-divider], [baoDivider]',
  templateUrl: 'divider.html',
  encapsulation: ViewEncapsulation.None,
  host: { class: 'divider' }
})
export class BaoDividerComponent {}
/**
 * Dropdown menu item, needed as it's used as a selector in the API.
 */
@Directive({
  selector: 'bao-dropdown-menu-item, [bao-dropdown-menu-item], [baoDropdownMenuItem]',
  host: { class: 'bao-dropdown-menu-item',
  "[class.bao-dropdown-menu-item-disabled]":"isDisabled===true"
}
})
export class BaoDropDownMenuItemComponent {
  @Input() public isDisabled = false;
}


@Directive({
  selector: 'bao-dropdown-menu-title, [bao-dropdown-menu-title], [baoDropdownMenuTitle]',
  host: { class: 'bao-dropdown-menu-title' }
})
export class BaoDropDownMenuTitleComponent {}

@Directive({
  selector: 'bao-dropdown-menu-checkbox, [bao-dropdown-menu-checkbox], [baoDropdownMenuCheckbox]',
  host: { class: 'bao-dropdown-menu-checkbox' }
})
export class BaoDropDownMenuCheckboxComponent {}
@Directive({
  selector: 'bao-dropdown-menu-label, [bao-dropdown-menu-label], [baoDropdownMenuLabel]',
  host: { class: 'bao-dropdown-menu-label',
  "[class.bao-dropdown-menu-item-disabled]":"isDisabled===true" }
})
export class BaoDropDownMenuLabelComponent {
  @Input() public isDisabled = false;

}
@Directive({
  selector: 'bao-dropdown-menu-description, [bao-dropdown-menu-description], [baoDropdownMenuDescription]',
  host: { class: 'bao-dropdown-menu-description' }
})
export class BaoDropDownMenuDescriptionComponent {}

@Directive({
  selector: 'bao-dropdown-menu-content, [bao-dropdown-menu-content], [baoDropdownMenuContent]',
  host: { class: 'bao-dropdown-menu-content' }
})
export class BaoDropDownMenuContentComponent {}
