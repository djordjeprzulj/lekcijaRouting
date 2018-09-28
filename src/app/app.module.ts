import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { KontoComponent } from './components/konto/konto.component';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatPaginator } from '@angular/material';
import { KontoTableComponent } from './konto-table/konto-table.component';
import { SampleTableComponent } from './sample-table/sample-table.component';
import { KontoDetailComponent } from './konto-detail/konto-detail.component';
import { HomeComponent } from './home/home.component';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule,  MatInputModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { IzvodiComponent } from './izvodi/izvodi.component';
import { TipoviZaduzenjaComponent } from './tipovi-zaduzenja/tipovi-zaduzenja.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    KontoComponent,
    KontoTableComponent,
    SampleTableComponent,
    KontoDetailComponent,
    NavigationComponent,
    IzvodiComponent,
    TipoviZaduzenjaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AppRoutingModule
  ],
  providers: [MatPaginator, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
