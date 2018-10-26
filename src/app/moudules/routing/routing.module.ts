import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExcelPageComponent } from '../../component/excel-page/excel-page.component';

const routes: Routes = [
  { path: 'excel', component: ExcelPageComponent },
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports:[RouterModule.forRoot(routes) ]
})
export class RoutingModule { }
