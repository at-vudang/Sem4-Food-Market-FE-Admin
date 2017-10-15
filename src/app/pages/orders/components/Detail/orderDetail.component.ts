import {Component, OnInit} from '@angular/core';
import {environment} from '../../../../../environments/environment';
import {Http} from '@angular/http';
import {ActivatedRoute} from '@angular/router';
import {TokenService} from '../../../../theme/services/token.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './orderDetail.html',
})
export class OrderDetailComponent implements OnInit {
  public data: any;
  transAt: string;
  status: number;
  id: number;
  constructor(private http: Http, private route: ActivatedRoute, private tokenService: TokenService) {
    this.data = {
      orderItems: []
    };
    this.transAt = '';
  }
  sort() {
  }
  public loadData() {
    this.tokenService.requestWithToken(environment.hostname + '/api/orders/' + this.id, 'GET')
    .subscribe((data) => {
      setTimeout(() => {
        console.log(data);
        this.data = data.data;
        this.status = data.data.status;
      }, 1000);
    });
  }
  total_price(data) {
    let total;
    total = 0;
    data.forEach(item => {
      total += item.price * item.quantity;
    });
    return total.toLocaleString('vi');
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.loadData();
    });
  }
  updateStatus() {
    let confirmUpdate;
    confirmUpdate = confirm('Are you sure change status?');
    if (confirmUpdate) {
      let url;
      url = `${environment.hostname}/api/admin/change-status-orders/${this.id}?status=${this.status}`;
      this.tokenService.requestWithToken(url, 'PUT').subscribe(data => {
        alert('Update status success!');
      }, err => {
        alert('Update status fail!');
      });
    }
  }
}
