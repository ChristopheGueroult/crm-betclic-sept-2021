import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-full-width',
  templateUrl: './template-full-width.component.html',
  styleUrls: ['./template-full-width.component.scss'],
})
export class TemplateFullWidthComponent implements OnInit {
  @Input() title!: string;
  constructor() {
    // mock title
    this.title = 'Un titre';
  }
  check() {
    console.log('CD TEMPLATE');
  }

  ngOnInit(): void {}
}
