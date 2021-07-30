import { Component, Directive, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'bao-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BaoDropDownMenuComponent {
  @Input() public isOpen = false;
  @Input() public triggerOrigin: any;
}

/**
 * Drodown menu item, needed as it's used as a selector in the API.
 */
@Directive({
  selector: 'bao-dropdown-menu-item, [bao-dropdown-menu-item], [baoCardMenuItem]',
  host: { class: 'bao-dropdown-menu-item' }
})
export class BaoDropDownMenuItemComponent {}
