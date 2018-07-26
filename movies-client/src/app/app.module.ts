import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { TheatreComponent } from './theatre/theatre.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { DataFilterPipe } from './data-filter.pipe';
import {MatTableModule} from '@angular/material/table';
// tslint:disable-next-line:max-line-length
import {MatFormFieldModule, MatSortModule, MatInputModule, MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule} from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';
import { CdkTableModule } from '../../node_modules/@angular/cdk/table';
import { CdkTreeModule } from '../../node_modules/@angular/cdk/tree';
@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    TheatreComponent,
    TvShowsComponent,
    DataFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    CdkTableModule,
    CdkTreeModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatInputModule,
    HttpModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
