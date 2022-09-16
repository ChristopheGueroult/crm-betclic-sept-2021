import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public title = 'crm-betclic';
  constructor(private titleService: Title, private metaService: Meta) {}
  check() {
    console.log('CD APP');
  }
  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      { name: 'description', content: 'Angular Universal Example' },
      { name: 'robots', content: 'index, follow' },
    ]);
  }
}
