import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private menuController: MenuController) {}
  toggleMenu() {
    this.menuController.toggle('first'); // Use your actual menuId here
  }
}
