import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { TranslateModule } from '@ngx-translate/core';
import { Storage } from '@ionic/storage-angular';

import { HomePageRoutingModule } from './home-routing.module';

import { SideMenuComponent } from '../side-menu/side-menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    TranslateModule,
  ],
  declarations: [HomePage, SideMenuComponent],
  providers: [Storage],
})
export class HomePageModule {}
