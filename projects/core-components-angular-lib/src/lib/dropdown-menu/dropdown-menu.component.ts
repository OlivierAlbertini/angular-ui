import { CdkOverlayOrigin } from '@angular/cdk/overlay';
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'bao-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaoDropDownMenuComponent {
  /**
   * Is the dropwdown menu currently open
   */
  @Input() public isOpen = false;
  /**
   * The origin for the dropdown-menu
   */
  @Input() public triggerOrigin: CdkOverlayOrigin;
  /**
   * Should the dropdown menu be closed when the user clicks outside the menu
   */
  @Input() public closeOnClickOutside = true;
  /**
   * Fired when the dropdown-menu changes it's `isOpen` value itself
   */
  @Output() public isOpenChange = new EventEmitter<boolean>();

  public onBackdropClick() {
    this.isOpen = false;
    this.isOpenChange.emit(this.isOpen);
  }
}
@Component({
  selector: 'bao-divider, [bao-divider], [baoDivider]',
  templateUrl: 'divider.html',
  encapsulation: ViewEncapsulation.None,
  host: { class: 'bao-divider' }
})
export class BaoDividerComponent {}
/**
 * Dropdown menu item, needed as it's used as a selector in the API.
 */
@Directive({
  selector: 'bao-dropdown-menu-item, [bao-dropdown-menu-item], [baoDropdownMenuItem]',
  host: { class: 'bao-dropdown-menu-item', '[class.bao-dropdown-menu-item-disabled]': 'disabled===true' }
})
export class BaoDropDownMenuItemComponent {
  @Input() public disabled = false;
}
@Directive({
  selector: 'bao-dropdown-menu-title, [bao-dropdown-menu-title], [baoDropdownMenuTitle]',
  host: { class: 'bao-dropdown-menu-title' }
})
export class BaoDropDownMenuTitleComponent {}

@Directive({
  selector: 'bao-dropdown-menu-label, [bao-dropdown-menu-label], [baoDropdownMenuLabel]',
  host: { class: 'bao-dropdown-menu-label' }
})
export class BaoDropDownMenuLabelComponent {}
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
