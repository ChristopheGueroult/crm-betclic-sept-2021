import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  public langs = ['fr', 'en'];
  constructor(private translateService: TranslateService) {}
  check() {
    console.log('CD NAV');
  }
  changeLang(event: any) {
    const lang = event.target.value;
    this.translateService.use(lang);
  }

  ngOnInit(): void {
    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      console.log('vous venez de changer de langue');
    });
  }
}
