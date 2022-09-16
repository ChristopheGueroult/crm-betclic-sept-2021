import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public user = { name: 'Christophe' };
  constructor() {}
  check() {
    console.log('CD HEADER');
  }

  ngOnInit(): void {}
}
