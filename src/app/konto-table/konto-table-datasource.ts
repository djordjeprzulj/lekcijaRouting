import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Konto } from '../models/konto.model';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

export class KontoTableDataSource extends DataSource<Konto> {

  // ako ne inicijalizujem na prazan niz javlja se greška na konzoli
  // ali se tabela dobro prikazuje
  // kada se inicijalizuje na prazan niz inicijalno je tabela
  // prazna dok se ne uradi paginacija ili sortiranje
  data: Konto[]; // = [];

  constructor(private paginator: MatPaginator, private sort: MatSort, private httpClient: HttpClient) {
    super();
  }

  loadKontos() {
    this.httpClient.get<Konto[]>(environment.API_URL + 'konto')
        .subscribe(response => this.data = response);
  }

  connect(): Observable<Konto[]> {
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  disconnect() {}

  private getPagedData(data: Konto[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  private getSortedData(data: Konto[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'naziv': return compare(a.naziv, b.naziv, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
