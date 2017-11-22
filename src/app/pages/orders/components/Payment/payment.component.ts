import {Component, OnInit} from '@angular/core';

import { DataTablesService } from '../../../tables/components/dataTables/dataTables.service';
import {environment} from '../../../../../environments/environment';
import {Http} from '@angular/http';
import {ActivatedRoute} from '@angular/router';
import {TokenService} from '../../../../theme/services/token.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './payment.component.html',
  styleUrls: ['../List/list.scss'],
})
export class PaymentComponent implements OnInit {

  public data: any[];
  public filterQuery = '';
  public rowsOnPage = 10;
  public activePage = 1;
  public header: string;
  public status: number;
  public sortBy = 'payment_at';
  public sortOrder = '-';
  public itemsTotal = 0;
  p = 1;

  constructor(private service: DataTablesService, private http: Http,
              private route: ActivatedRoute,
              private tokenService: TokenService) {
  }
  public loadData() {
    this.tokenService.requestWithToken(environment.hostname + '/api/admin/payments?page='
      + (this.activePage)  + '&size=' + this.rowsOnPage + '&sort='
      + this.sortOrder + this.sortBy, 'GET').subscribe((data) => {
      setTimeout(() => {
        console.log(data);
        this.data = data.data;
        this.itemsTotal = data.total;
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

  public remove(item) {
    let index;
    index = this.data.indexOf(item);
    if (index > -1) {
      this.data.splice(index, 1);
    }
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
