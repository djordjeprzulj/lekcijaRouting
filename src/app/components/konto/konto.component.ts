import { Component, OnInit } from '@angular/core';
import { KontoService } from '../../services/konto.service';
import { Konto } from '../../models/konto.model';

@Component({
  selector: 'app-konto',
  templateUrl: './konto.component.html',
  styleUrls: ['./konto.component.css']
})
export class KontoComponent implements OnInit {

  kontos: Konto[];

  constructor(private kontoService: KontoService) { }

  ngOnInit() {
    this.kontoService.getAllKontos()
        .subscribe(data => this.kontos = data);
  }
}
