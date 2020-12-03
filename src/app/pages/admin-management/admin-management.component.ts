import { PagesBaseComponent } from './../pages-base/pages-base.component';
import { RifaService } from './../../services/rifa.service';
import { Rifa } from './../../core/model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-management',
  templateUrl: './admin-management.component.html',
  styleUrls: ['./admin-management.component.scss']
})
export class AdminManagementComponent extends PagesBaseComponent implements OnInit {

  public rifa: Rifa = new Rifa();
  public selectedFile: any;

  constructor(private rifaService: RifaService) {
    super();
  }

  ngOnInit() {
    this.rifa = new Rifa();
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  onSubmitRifa() {
    this.rifaService.postAnexo(this.selectedFile).then(() => {
      console.log('img uploaded sucess!');
    });

    this.rifa.imagem = this.selectedFile.name;
    this.rifa.dataSorteio = new Date(this.rifa.dataSorteio);
    this.rifaService.save(this.rifa).then(result => {
      console.log(result);
      if (result) {
        alert('Salvo com sucesso!');
      } else {
        alert('ERRO! Verifique o log');
      }
    });
  }

}
