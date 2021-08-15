import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { RedbullComponent } from './redbull/redbull.component';
import { LoginComponent } from '@redbull/ui-login';
import { RedbullService } from '@redbull/core-data';

const routes: Route[] = [
  {path: '', component: LoginComponent },
  {path: 'redbulls', component: RedbullComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule],
})
export class RoutingModule {}
