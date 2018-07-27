import { Component, ViewChild, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
@Component({
  selector: 'app-theatre',
  templateUrl: './theatre.component.html',
  styleUrls: ['./theatre.component.scss']
})
export class TheatreComponent implements OnInit {
  displayedColumns: string[] = ['poster', 'title', 'id', 'release', 'description'];
  dataSource: any;
  manualPage = 0;
  localStorageTheatre: any;
  constructor(private dataService: DataService) {
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngOnInit() {
    this.dataService.getInTheaters().subscribe(res => {
      this.dataSource = new MatTableDataSource(res.results);
      this.localStorageTheatre = res.results;
      localStorage.setItem('items', JSON.stringify(this.localStorageTheatre.length));
      const dataTheatre = localStorage.getItem('items');
      console.log(dataTheatre);
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

