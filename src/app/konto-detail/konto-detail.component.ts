import { Component, OnInit } from '@angular/core';
import { KontoService } from '../services/konto.service';
import { Konto } from '../models/konto.model';

@Component({
  selector: 'app-konto-detail',
  templateUrl: './konto-detail.component.html',
  styleUrls: ['./konto-detail.component.css']
})
export class KontoDetailComponent implements OnInit {

  konto: Konto = new Konto(null, '', '');

  constructor(private kontoService: KontoService) { }

  ngOnInit() {
  }

  onGetById() {
    this.kontoService.getKonto(this.konto.id)
        .subscribe(response => this.konto = response);
  }

  onInsert() {
    this.kontoService.insertKonto(this.konto)
        .subscribe(response => console.log(response));
  }

  onUpdate() {
    this.kontoService.updateKonto(this.konto)
        .subscribe(response => console.log(response));
  }

  onDelete() {
    this.kontoService.deleteKonto(this.konto.id)
        .subscribe(response => console.log(response));
  }
}
