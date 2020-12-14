import { AssinarNoticiasService } from './../../services/assinar-noticias.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.scss']
})
export class RodapeComponent implements OnInit {

  constructor(private assinarNoticiasService: AssinarNoticiasService) { }

  ngOnInit() {
  }

  onNoticias(emailField) {

    if(!emailField.value){
      return;
    }

    if(emailField.validationMessage) {
      return;
    }

    this.assinarNoticiasService.save(emailField.value).then(r => {
      console.log(emailField.value + " salvo com sucesso");
    });

    emailField.value = '';
    alert('Concluído, vamos te avisar quando tiver novidade ;)');


  }

  getNow() {
    return new Date();
  }

}
