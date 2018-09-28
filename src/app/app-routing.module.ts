import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { KontoComponent } from "./components/konto/konto.component";
import { KontoDetailComponent } from "./konto-detail/konto-detail.component";
import { IzvodiComponent } from "./izvodi/izvodi.component";
import { TipoviZaduzenjaComponent } from "./tipovi-zaduzenja/tipovi-zaduzenja.component";
import { KontoTableComponent } from "./konto-table/konto-table.component";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'konto', component: KontoComponent},
    {path: 'kontoDetail/:id/edit', component: KontoDetailComponent,
      children: [
        {path: 'izvodi', component: IzvodiComponent},
        {path: 'tipoviZaduzenja', component: TipoviZaduzenjaComponent},
      ]},
    {path: 'kontoTable', component: KontoTableComponent}
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}