import {Component, OnInit} from '@angular/core';

import { DataTablesService } from '../../../tables/components/dataTables/dataTables.service';
import {Http} from '@angular/http';
import {environment} from '../../../../../environments/environment';
import {TokenService} from '../../../../theme/services/token.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './adminList.html',
  styleUrls: ['./adminList.scss'],
})
export class AdminListComponent implements OnInit {

  public data: any;
  public filterQuery = '';
  public rowsOnPage = 10;
  public activePage = 1;
  public sortBy = 'email';
  public sortOrder = '+';
  public itemsTotal = 0;
  p = 1;

  constructor(private service: DataTablesService, private http: Http, private tokenService: TokenService) {
    // this.service.getData().then((data) => {
    //   this.data = data;
    // });
    this.data = [];
  }
  public loadData() {
    this.tokenService.requestWithToken(environment.hostname + '/api/admin/users?page=' + (this.activePage)  +
      '&size=' + this.rowsOnPage + '&sort=' + this.sortOrder + this.sortBy, 'GET').subscribe((data) => {
        setTimeout(() => {
          this.data = data.data;
          console.log(this.data);
          this.itemsTotal = this.data.total;
        }, 1000);
      });
  }
  sort(key) {
    this.sortOrder = this.sortOrder === '+' ? '-' : '+';
    this.sortBy = key;
    this.loadData();
  }
  public toInt(num: string) {
    return +num;
  }

  public sortByWordLength = (a: any) => {
    return a.city.length;
  }

  public remove(item) {
    let confirmDelete;
    confirmDelete = confirm('Are you sure delete it?');
    console.log(confirmDelete);
    if (confirmDelete) {
      let url;
      url = `${environment.hostname}/user/${item.id}`;
      this.tokenService.requestWithToken(url, 'DELETE').subscribe(data => {
        let index;
        index = this.data.indexOf(item);
        if (index > -1) {
          this.data.splice(index, 1);
        }
        alert('Delete Fail!');
      }, err => {
        alert('Delete Fail!');
      });
    }
  }
  pageChanged(event) {
    this.activePage = event;
    this.loadData();
  }
  public onPageChange(event) {
    this.rowsOnPage = event.rowsOnPage;
    this.activePage = event.activePage;
    this.loadData();
  }

  public onSortOrder(event) {
    this.loadData();
  }
  ngOnInit(): void {
    this.loadData();
  }
}
