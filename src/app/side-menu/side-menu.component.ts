import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'pt', name: 'Português' },
  ];
  selectedLanguage = 'en';

  constructor(
    private menu: MenuController,
    private translate: TranslateService,
    private storage: Storage
  ) {}

  async ngOnInit() {
    await this.storage.create();
    this.storage.get('selectedLanguage').then((language) => {
      if (language) {
        this.selectedLanguage = language;
        this.switchLanguage(this.selectedLanguage);
      }
    });
  }

  toggleMenu() {
    this.menu.toggle();
  }

  switchLanguage(languageCode: string) {
    this.translate.use(languageCode);
    this.storage.set('selectedLanguage', languageCode);
  }
}
