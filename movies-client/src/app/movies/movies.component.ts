import { Component, ViewChild, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  displayedColumns: string[] = ['poster', 'title', 'id', 'release', 'description'];
  dataSource: any;
  manualPage = 0;
  localstorageMovies: any;
  constructor(private moviesService: MoviesService) { }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngOnInit() {
    this.moviesService.getMovies().subscribe(res => {
      this.dataSource = new MatTableDataSource(res.results);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.localstorageMovies = res.results;
      localStorage.setItem('items', JSON.stringify(this.localstorageMovies.length));
      const dataMovies = localStorage.getItem('items');
      console.log(dataMovies);
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


