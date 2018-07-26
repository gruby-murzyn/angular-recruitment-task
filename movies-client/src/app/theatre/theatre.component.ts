import { Component, ViewChild, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-theatre',
  templateUrl: './theatre.component.html',
  styleUrls: ['./theatre.component.scss']
})
export class TheatreComponent implements OnInit {
  displayedColumns: string[] = ['poster', 'title', 'id', 'release', 'description'];
  dataSource: any;
  constructor(private moviesService: MoviesService) {
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.moviesService.getInTheaters().subscribe(res => {
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

