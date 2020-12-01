import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.scss']
})
export class RodapeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onNoticias() {

    alert('Concluído, vamos te avisar quando tiver novidade ;)');

    document.location.reload();

  }

}
