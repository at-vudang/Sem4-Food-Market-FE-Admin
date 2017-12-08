import {Component, OnInit} from '@angular/core';
import {NgUploaderOptions} from 'ngx-uploader/src/classes/ng-uploader-options.class';
import {BasicTablesService} from '../../../tables/components/basicTables/basicTables.service';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {TokenService} from '../../../../theme/services/token.service';
import {environment} from '../../../../../environments/environment';
import {Http} from '@angular/http';

@Component({
  selector: 'app-admin-detail',
  templateUrl: './adminDetail.html',
  styleUrls: ['./adminList.scss'],
})
export class AdminDetailComponent implements OnInit {
  metricsTableData: Array<any>;
  public defaultPicture = 'assets/img/theme/no-photo.png';
  public profile: any = {
    picture: 'assets/img/app/profile/Nasta.png'
  };
  public activePage = 1;
  public checkboxModel = [{
    id: 2,
    name: 'Admin',
    checked: false,
    class: 'col-md-4'
  }, {
    id: 1,
    name: 'User',
    checked: false,
    class: 'col-md-4'
  }];
  isDisabled = false;
  public checkboxPropertiesMapping = {
    model: 'checked',
    value: 'name',
    label: 'name',
    baCheckboxClass: 'class'
  };
  public uploaderOptions: NgUploaderOptions = {
    // url: 'http://website.com/upload'
    url: '',
  };

  public fileUploaderOptions: NgUploaderOptions = {
    // url: 'http://website.com/upload'
    url: '',
  };
  public configDropZone = {
    thumbnailWidth: 300,
    thumbnailHeight: 300,
    thumbnailMethod: 'contain'
  };
  id: number;
  userForm: FormGroup;
  formPassword: FormGroup;
  orders: any;
  public rowsOnPage = 10;
  public sortBy = 'email';
  public sortOrder = '-';
  public itemsTotal = 0;
  constructor(private _basicTablesService: BasicTablesService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private tokenService: TokenService, private http: Http) {
    this.metricsTableData = _basicTablesService.metricsTableData;
    this.userForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: new FormControl('', [Validators.required]),
      birthday: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
    });
    this.formPassword = this.formBuilder.group({
      password: new FormControl('', [Validators.required]),
      password_confirmation: new FormControl('', [])
    }, {
      validator: this.MatchPassword
    });
    this.orders = [];
    this.id = 0;
    this.sortOrder = '-';
    this.sortBy = 'id';
  }
  MatchPassword(AC: AbstractControl) {
    let password, confirmPassword;
    password = AC.get('password').value; // to get value in input tag
    confirmPassword = AC.get('password_confirmation').value; // to get value in input tag
    if (password !== confirmPassword) {
      AC.get('password_confirmation').setErrors({MatchPassword: true});
    } else {
      return null;
    }
  }
  isEmailUnique(control: AbstractControl) {
    const q = new Promise((resolve, reject) => {
      setTimeout(() => {
        this.http.get(environment.hostname + '/api/check-exist-email/' + control.value).
        map(res => res.json()).subscribe(data => {
          if (!data.success) {
            resolve({ 'isEmailUnique': true });
          } else {
            resolve(null);
          }
        }, () => { resolve({ 'isEmailUnique': true }); });
      }, 10);
    });
    return q;
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      if (this.id) {
        let url;
        url = environment.hostname + '/api/admin/users/' + this.id;
        this.tokenService.requestWithToken(url, 'GET').subscribe(res => {
          let data;
          data = res.data;
          setTimeout( () =>  {
            this.userForm = this.formBuilder.group({
              email: new FormControl(data.email, [Validators.required, Validators.email]),
              name: new FormControl(data.full_name, [Validators.required]),
              birthday: new FormControl((data.birthday != null) ? data.birthday.split(' ')[0] : '',
                [Validators.required]),
              phone: new FormControl(data.phone, [Validators.required]),
            });
          }, 2000);
          // this.orders = data.orders;
          data.roles.forEach(item => {
            this.checkboxModel.find(check => check.id === item.id).checked = true;
          });
        });
        this.loadDataOrder();
      //   url = environment.hostname + '/O'
      // this.tokenService.getDataWithToken()
      } else {
        this.id = 0;
      }
    });
  }
  changePass(model) {
    let modelUser;
    modelUser = this.userForm.value;
    let url, data;
    data = {
      'email': modelUser.email,
      'full_name': modelUser.name,
      'phone': modelUser.phone,
      'birthday': modelUser.birthday,
      'is_admin': this.checkboxModel.find(check => check.id === 2).checked ? 1 : 0,
      'password': model.password,
      'password_confirmation': model.password_confirmation
    };
    console.log(data);
    url = environment.hostname + '/api/admin/users/' + this.id;
    this.tokenService.requestWithToken(url, 'PUT', data).subscribe(res => {
      alert('Update successful');
    }, err => {
      alert('Update fail');
    });
  }
  resetPassword(model) {
    let modelUser;
    modelUser = this.userForm.value;
    let url, data;
    data = {
      'email': modelUser.email,
      'full_name': modelUser.name,
      'phone': modelUser.phone,
      'birthday': modelUser.birthday,
      'is_admin': this.checkboxModel.find(check => check.id === 2).checked ? 1 : 0,
      'password': '123456',
      'password_confirmation': '123456'
    };
    console.log(data);
    url = environment.hostname + '/api/admin/users/' + this.id;
    this.tokenService.requestWithToken(url, 'PUT', data).subscribe(res => {
      alert('Update successful');
    }, err => {
      alert('Update fail');
    });
  }
  save(model) {
    if (!this.id) {
      let url, data;
      url = environment.hostname + '/api/admin/users';
      data = {
        'email': model.email,
        'full_name': model.name,
        'password': '123456',
        'password_confirmation': '123456',
        'phone': model.phone,
        'birthday': model.birthday,
        'is_admin': this.checkboxModel.find(check => check.id === 2).checked ? 1 : 0
      };
      this.tokenService.requestWithToken(url, 'POST', data).subscribe(res => {
        alert('Create successful');
      }, err => {
        alert('Create fail');
      });
    } else {
      let url, data;
      data = {
        'email': model.email,
        'full_name': model.name,
        'phone': model.phone,
        'birthday': model.birthday,
        'is_admin': this.checkboxModel.find(check => check.id === 2).checked ? 1 : 0
      };
      console.log(data);
      url = environment.hostname + '/api/admin/users/' + this.id;
      this.tokenService.requestWithToken(url, 'PUT', data).subscribe(res => {
        alert('Update successful');
      }, err => {
        alert('Update fail');
      });
    }
  }
  public loadDataOrder() {
    let url;
    url = environment.hostname + '/api/admin/getOrderFollowUser/' + this.id + '?page='
      + (this.activePage)  + '&size=' + this.rowsOnPage + '&sort=' + this.sortOrder + this.sortBy;
    this.tokenService.requestWithToken(url, 'GET').subscribe(res => {
      this.orders = res;
    });
  }
  sort(key) {
    this.sortOrder = this.sortOrder === '' ? '-' : '';
    this.sortBy = key;
    this.loadDataOrder();
  }
  pageChanged(event) {
    this.activePage = event;
    this.loadDataOrder();
  }
  total_price(data) {
    let total;
    total = 0;
    data.items.forEach(item => {
      total += item.price_real;
    });
    return total.toLocaleString('vi');
  }
}
