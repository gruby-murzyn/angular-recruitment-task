import { Component, ViewChild, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss']
})
export class TvShowsComponent implements OnInit {
  displayedColumns: string[] = ['poster', 'name', 'id', 'release', 'description'];
  dataSource: any;
  localStorageData: any;
  manualPage = 0;
  constructor(private moviesService: MoviesService) { }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.moviesService.getPopularTVShows().subscribe(res => {
      this.dataSource = new MatTableDataSource(res.results);
      this.localStorageData = res.results;
      localStorage.setItem('items', JSON.stringify(this.localStorageData.length));
      const dataTvShows = localStorage.getItem('items');
      console.log(dataTvShows);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public updateManualPage(index: number): void {
    this.manualPage = index;
    this.paginator.pageIndex = index;
    this.paginator.page.next({
      pageIndex: this.paginator.pageIndex,
      pageSize: this.paginator.pageSize,
      length: this.paginator.length
    });
  }
  public clearManualPage(): void {
    this.manualPage = 0;
  }
}

