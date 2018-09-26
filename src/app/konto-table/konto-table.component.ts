import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { KontoTableDataSource } from './konto-table-datasource';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-konto-table',
  templateUrl: './konto-table.component.html',
  styleUrls: ['./konto-table.component.css']
})
export class KontoTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: KontoTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'naziv'];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.dataSource = new KontoTableDataSource(this.paginator, this.sort, this.httpClient);
    this.dataSource.loadKontos();
  }
}
