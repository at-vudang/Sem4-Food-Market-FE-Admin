import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { CustomerListComponent } from './components/Customer/customerList.component';
import { AdminListComponent } from './components/Admin/adminList.component';
import {AdminDetailComponent} from './components/Admin/adminDetail.component';
import {ProfileComponent} from './components/Profile/profile.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      { path: 'list', component: AdminListComponent },
      { path: 'detail/:id', component: AdminDetailComponent },
      { path: 'new', component: AdminDetailComponent },
      { path: 'profile', component: ProfileComponent },
    ],
  },
];

export const routing = RouterModule.forChild(routes);
