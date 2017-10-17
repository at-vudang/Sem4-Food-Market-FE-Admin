import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { HttpModule } from '@angular/http';
import { routing } from './users.routing';
import { UsersComponent } from './users.component';
import { CustomerListComponent } from './components/Customer/customerList.component';
import { DataTablesService } from '../tables/components/dataTables/dataTables.service';
import { DataTableModule } from 'angular2-datatable';
import { AdminListComponent } from './components/Admin/adminList.component';
import {PagerModule} from 'ng2-smart-table/components/pager/pager.module';
import {TablesModule} from '../tables/tables.module';
import {AdminDetailComponent} from './components/Admin/adminDetail.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
const DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: 'http://localhost:8089/upload/upload',
  maxFilesize: 1,
  acceptedFiles: 'image/*',
  addRemoveLinks: true,
  thumbnailWidth: 300,
  thumbnailHeight: 300,
  thumbnailMethod: 'contain'
};
@NgModule({
  imports: [
    NgaModule,
    HttpModule,
    FormsModule,
    DataTableModule,
    CommonModule,
    PagerModule,
    routing,
    TablesModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    DropzoneModule.forRoot(DROPZONE_CONFIG),
  ],
  declarations: [
    UsersComponent,
    CustomerListComponent,
    AdminListComponent,
    AdminDetailComponent,
    ],
  providers: [
    DataTablesService
  ],
})
export class UsersModule {
}
