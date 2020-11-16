import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-menu-navegacao',
  templateUrl: './menu-navegacao.component.html',
  styleUrls: ['./menu-navegacao.component.scss']
})
export class MenuNavegacaoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  clickMenuItem(scrollTop: boolean) {
    $('#navBarContent').collapse('hide');
    if ( scrollTop ) {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }

}
