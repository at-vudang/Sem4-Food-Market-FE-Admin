import {Component, OnInit} from '@angular/core';
import { NgUploaderOptions } from 'ngx-uploader';
import './ckeditor.loader';
import 'ckeditor';
import {DropzoneComponent, DropzoneConfig, DropzoneConfigInterface} from 'ngx-dropzone-wrapper';
import {CategoryService} from '../../../../theme/services/category.service';
import {UnitService} from '../../../../theme/services/unit.service';
import {Http} from '@angular/http';
import {environment} from '../../../../../environments/environment';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {TokenService} from '../../../../theme/services/token.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ItemService} from '../../../../theme/services/item.service';

@Component({
  selector: 'app-product-input',
  templateUrl: './inputProduct.html',
  styleUrls: ['./inputProduct.scss'],
})
export class InputProductComponent implements OnInit {
  public ckeditorContent = '<p>Hello CKEditor</p>';
  public config = {
    uiColor: '#F0F3F4',
    height: '300',
  };
  inputItemForm: FormGroup;
  // public configDropZone = {};
  id: number;
  isRemember = false;
  defaultPicture = 'assets/img/theme/no-photo.png';
  public profile: any;
  picture: 'assets/img/app/profile/Nasta.png';
  uploaderOptions: NgUploaderOptions = {
    // url: 'http://website.com/upload'
    url: '',
  };
  categories: any;
  units: any;
  fileUploaderOptions: NgUploaderOptions = {
    // url: 'http://website.com/upload'
    url: '',
  };
  categoryChoise: any;
  imageItems: any;
  constructor(private categoryService: CategoryService,
              private unitService: UnitService,
              private http: Http,
              private formBuilder: FormBuilder,
              private tokenService: TokenService,
              private route: ActivatedRoute,
              private router: Router,
              private itemService: ItemService,
              public  configDropZone: DropzoneConfig) {
    this.configDropZone.headers = {
      'Accept': 'application/json',
      'Authorization': this.tokenService.getTokenType() + ' ' + this.tokenService.getAccessToken()
    };
    this.profile = {
      picture: 'assets/img/app/profile/Nasta.png'
    };
    this.inputItemForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      category: new FormControl(0, [Validators.required]),
      price: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required,
        Validators.minLength(0)]),
      description: new FormControl('', [Validators.required]),
      expiredAt: new FormControl('', [Validators.required]),
    });
    categoryService.getCategory().subscribe(data => {
      console.log(data);
      this.categories = data;
    });
    this.categoryChoise = 0;
    this.imageItems = [];
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.imageItems = [];
      this.id = +params['id'];
      if (this.id) {
        this.itemService.getItemById(this.id).subscribe(data => {
          this.categoryChoise = data.category;
          // this.imageItems = data.imageItems;
          console.log(data);
          setTimeout( () =>  {
            this.inputItemForm = this.formBuilder.group({
              name: new FormControl(data.name, [Validators.required]),
              category: new FormControl(data.category_id, [Validators.required]),
              price: new FormControl(data.price, [Validators.required]),
              quantity: new FormControl(data.total, [Validators.required,
                Validators.minLength(0)]),
              description: new FormControl(data.descript, [Validators.required]),
              expiredAt: new FormControl(data.expired_day, [Validators.required]),
            });
            let i;
            i = 0;
            this.configDropZone.init = function () {
                if (i++ > 1) {
                  return false;
                }
                let thisDropzone;
                thisDropzone = this;
                //// Create the mock file:
                const mockFile = {
                  name: 'Image detail',
                };
                console.log('init');
                thisDropzone.emit('addedfile', mockFile);
                thisDropzone.emit('thumbnail', mockFile, data.image);
                thisDropzone.emit('complete', mockFile);
            };
          }, 3000);
        });
      } else {
        this.id = 0;
      }
    });
    // this.inputItemForm.controls['category'].valueChanges.subscribe(value => {
    //   console.log(value);
    // });
  }
  onRemoveFile(event) {
    if (event.status === 'error') {
      return false;
    }
    for (let count = 0; count < this.imageItems.length; count++) {
      if (this.imageItems[count].image.indexOf(event.name) > -1 ) {
        this.tokenService.requestWithToken(environment.hostname
          + '/api/admin/remove-image/items?file_name=' + this.imageItems[count].image, 'DELETE')
          .subscribe(data => {
            this.imageItems.splice(count, 1);
            alert('Delete Success!');
          }, err => {
            alert('Delete Fail!');
          });
      }
    }
  }
  onUploadError(event) {
    console.log(event);
  }
  onUploadSuccess(event) {
    console.log(event);
    this.imageItems.push({'image' : event[1]});
  }

  save(model) {
    let data;
    console.log(this.id);
    if (!this.id) {
      data = {
        'name': model.name,
        'price': model.price,
        'status': true,
        'total': model.quantity,
        'descript': model.description,
        'expired_day': model.expiredAt,
        'category_id': model.category,
        'image': this.imageItems[0].image
      };
      this.tokenService.requestWithToken(environment.hostname + '/api/admin/items', 'POST', data)
        .subscribe(data2 => {
          alert('Create Success!');
          this.router.navigate(['/pages/products/list']);
        }, err => {
          alert('Create Fail!');
        });
    } else {
      data = {
        'name': model.name,
        'price': model.price,
        'status': true,
        'total': model.quantity,
        'descript': model.description,
        'expired_day': model.expiredAt,
        'category_id': model.category,
        'image': this.imageItems[0].image
      };
      this.tokenService.requestWithToken(environment.hostname + '/api/admin/items/' + this.id, 'PUT', data)
        .subscribe(data2 => {
          alert('Update Success!');
          this.router.navigate(['/pages/products/list']);
        }, err => {
          alert('Update Fail!');
        });
    }
  }
}
