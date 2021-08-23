import {  AfterViewInit, Component, Directive, ElementRef, Input, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'bao-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BaoDropDownMenuComponent implements  AfterViewInit{

  @Input() public isOpen = false;
  @Input() public triggerOrigin: any;
  @Input() public width: string = '256px';
  @ViewChild('dropDownContainer', { static: false }) private staticContainer: ElementRef;

  constructor(private renderer: Renderer2) {}
  
  private setWidthAttribute() {
    console.log("nativeElement1111")
   console.log( "children",Array.from(this.staticContainer.nativeElement.children));

    console.log("renderer",this.renderer)
    console.log(this.staticContainer)

    /*const nativeElement = Array.from(this.staticContainer.nativeElement);
    console.log("222222")
    console.log(nativeElement)
    this.renderer.setStyle(nativeElement,"width",180)*/
  }

  public ngAfterViewInit() {
    this.setWidthAttribute();
  }

 /* public onContentChange() {
    this.setWidthAttribute();
  }*/
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
  host: { class: 'bao-dropdown-menu-item' }
})
export class BaoDropDownMenuItemComponent {

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
