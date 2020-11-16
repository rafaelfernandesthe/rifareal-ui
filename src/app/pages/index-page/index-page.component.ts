import { PagesBaseComponent } from './../pages-base/pages-base.component';
import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss']
})
export class IndexPageComponent extends PagesBaseComponent implements OnInit {

  constructor() {
    super();
   }

  ngOnInit() {
    const img = $('.bg_img');
    img.css('background-image', function() {
      const bg = ('url(' + $(this).data('background') + ')');
      return bg;
    });
  }

}
