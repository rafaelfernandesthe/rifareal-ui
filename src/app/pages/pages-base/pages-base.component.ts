import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages-base',
  template: ` !OPS - PÁGINA SEM CONTEÚDO! `
})
export class PagesBaseComponent implements OnInit {

  constructor() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  ngOnInit() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

}
