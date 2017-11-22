import { Routes, RouterModule } from '@angular/router';
import {StatisticListComponent} from './components/List/list.component';
import {StatisticsComponent} from './statistics.component';


// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: StatisticsComponent,
    children: [
      { path: 'list', component: StatisticListComponent },
    ],
  },
];

export const routing = RouterModule.forChild(routes);
