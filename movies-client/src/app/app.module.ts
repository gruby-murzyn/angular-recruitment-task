import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import {MatFormFieldModule, MatSortModule, MatInputModule, MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatSelectModule} from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    TheatreComponent,
    TvShowsComponent,
    DataFilterPipe
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
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
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
