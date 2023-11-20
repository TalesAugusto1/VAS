import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private translate: TranslateService, private storage: Storage) {
    translate.setDefaultLang('en');
  }
  async ngOnInit() {
    await this.storage.create();
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
