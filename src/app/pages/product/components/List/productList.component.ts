import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {environment} from '../../../../../environments/environment';
import {CategoryService} from '../../../../theme/services/category.service';
import {TokenService} from '../../../../theme/services/token.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './productList.html',
  styleUrls: ['./productList.scss'],
})
export class ProductListComponent implements OnInit {

  public data: any;
  public filterQuery = '';
  public rowsOnPage = 10;
  public activePage = 1;
  public sortBy = 'created_at';
  public sortOrder = '+';
  public itemsTotal = 0;
  public category = null;
  p = 1;
  public categories = null;
  constructor(private categoryService: CategoryService, private http: Http, private tokenService: TokenService) {
    this.categories = [];
    categoryService.getCategory().subscribe(data => {
      this.categories = data;
      this.category = 0;
    });
    this.data = {};
  }
  public loadData() {
    let url;
    if (this.category === null || this.category === 0) {
      url = environment.hostname + '/api/items?page=' + (this.activePage)  +
        '&size=' + this.rowsOnPage + '&sort=' + this.sortOrder + this.sortBy;
    } else {
      url = environment.hostname + '/api/categories/' + this.category + '/items?page=' + (this.activePage)  +
        '&size=' + this.rowsOnPage + '&sort=' + this.sortOrder + this.sortBy;
    }
    console.log(url);
    this.tokenService.requestWithToken(url, 'GET').subscribe((data) => {
        setTimeout(() => {
          this.data = data;
          console.log(this.data);
          this.itemsTotal = this.data.total;
        }, 1000);
      });
  }
  changeModel(event) {
    console.log(event);
    this.loadData();
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
      url = `${environment.hostname}/api/admin/items/${item.id}`;
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
}
