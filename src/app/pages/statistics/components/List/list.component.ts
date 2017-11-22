import {Component, OnInit} from '@angular/core';

import { DataTablesService } from '../../../tables/components/dataTables/dataTables.service';
import {environment} from '../../../../../environments/environment';
import {Http} from '@angular/http';
import {ActivatedRoute} from '@angular/router';
import {TokenService} from '../../../../theme/services/token.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-order-list',
  templateUrl: './list.html',
  styleUrls: ['./list.scss'],
})
export class StatisticListComponent implements OnInit {

  public data: any;
  public filterQuery = '';
  public rowsOnPage = 10;
  public activePage = 1;
  public header: string;
  public status: any;
  public sortBy = 'created_at';
  public sortOrder = '-';
  public itemsTotal = 0;
  public endAt;
  public startAt;
  public today;
  p = 1;

  constructor(private service: DataTablesService, private http: Http,
              private route: ActivatedRoute,
              private tokenService: TokenService,
              private datePipe: DatePipe) {
    // this.service.getData().then((data) => {
    //   this.data = data;
    // });
    this.status = '';
    this.today = new Date();
    this.endAt = this.datePipe.transform(this.today, 'yyyy-MM-dd');
    this.startAt = new Date();
    this.startAt = this.datePipe.transform(this.startAt.setMonth(this.startAt.getMonth() - 1), 'yyyy-MM-dd');

    this.data = {};
  }
  total_price(data) {
    let total;
    total = 0;
    data.items.forEach(item => {
      total += item.price_real;
    });
    return total.toLocaleString('vi');
  }
  public loadData() {
    this.tokenService.requestWithToken(environment.hostname + '/api/admin/statisticOrders' +
      '?startDate=' + (this.startAt) +
      '&endDate=' + (this.endAt) +
      '&page=' + (this.activePage)  +
      '&status=' + (this.status) +
      '&size=' + this.rowsOnPage + '&sort=' + this.sortOrder + this.sortBy, 'GET').subscribe((data) => {
      setTimeout(() => {
        console.log(data);
        this.data = data;
        this.itemsTotal = this.data.total;
      }, 1000);
    });
  }
  sort(key) {
    this.sortOrder = this.sortOrder === '' ? '-' : '';
    this.sortBy = key;
    this.loadData();
  }
  public toInt(num: string) {
    return +num;
  }

  public sortByWordLength = (a: any) => {
    return a.city.length;
  }
  pageChanged(event) {
    this.activePage = event;
    this.loadData();
    console.log(event);
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
  changeModel(event) {
    console.log(event);
    this.loadData();
  }

}
