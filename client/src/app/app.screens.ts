/***  Generated file, do not change.  */
import { Page } from 'ionic-angular/navigation/nav-util';
import { MenuComponent } from './menu/menu.component';
import { Blank_PhonePortrait } from '../pages/Blank/PhonePortrait/Blank';
import { 111 _PhonePortrait } from '../pages/111/PhonePortrait/111';
import { Test1_PhonePortrait } from '../pages/Test1/PhonePortrait/Test1';
export class Screens {
  static declarations: Page[] = [
    MenuComponent,
    Blank_PhonePortrait,
    111 _PhonePortrait,
    Test1_PhonePortrait
  ];
  static mapping = {
    'Blank': {
      PhonePortrait: Blank_PhonePortrait
    },
    '111': {
      PhonePortrait: 111 _PhonePortrait
    },
    'Test1': {
      PhonePortrait: Test1_PhonePortrait
    }
  }
}