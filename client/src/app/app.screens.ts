/***  Generated file, do not change.  */
import { Page } from 'ionic-angular/navigation/nav-util';
import { MenuComponent } from './menu/menu.component';
import { Blank_PhonePortrait } from '../pages/Blank/PhonePortrait/Blank';
import { Ssss_PhonePortrait } from '../pages/Ssss/PhonePortrait/Ssss';
import { 111 _PhonePortrait } from '../pages/111/PhonePortrait/111';
export class Screens {
  static declarations: Page[] = [
    MenuComponent,
    Blank_PhonePortrait,
    Ssss_PhonePortrait,
    111 _PhonePortrait
  ];
  static mapping = {
    'Blank': {
      PhonePortrait: Blank_PhonePortrait
    },
    'Ssss': {
      PhonePortrait: Ssss_PhonePortrait
    },
    '111': {
      PhonePortrait: 111 _PhonePortrait
    }
  }
}