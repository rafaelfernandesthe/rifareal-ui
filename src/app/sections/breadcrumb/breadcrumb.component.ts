import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  @Input() caminhos: any[];
  @Input() destino: string;
  @Input() cssClass: string;

  constructor() { }

  ngOnInit() {
    this.cssClass = 'inner-hero-section ' + this.cssClass;
  }

}
