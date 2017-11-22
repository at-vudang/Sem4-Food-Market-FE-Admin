import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { HttpModule } from '@angular/http';
import { DataTablesService } from '../tables/components/dataTables/dataTables.service';
import { DataTableModule } from 'angular2-datatable';
import {PagerModule} from 'ng2-smart-table/components/pager/pager.module';
import {TablesModule} from '../tables/tables.module';
import {StatisticListComponent} from './components/List/list.component';
import {StatisticsComponent} from './statistics.component';
import {routing} from './statistics.routing';
import {NgxPaginationModule} from 'ngx-pagination';

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
    NgxPaginationModule
  ],
  declarations: [
    StatisticsComponent,
    StatisticListComponent,
    ],
  providers: [
    DataTablesService, DatePipe
  ],
})
export class StatisticsModule {
}
