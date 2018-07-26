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
  constructor(private moviesService: MoviesService) {

}

@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;

ngOnInit() {
  this.moviesService.getPopularTVShows().subscribe(res => {
    this.dataSource = new MatTableDataSource(res.results);
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
}

