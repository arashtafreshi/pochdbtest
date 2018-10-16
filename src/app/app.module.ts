import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DbuiComponent } from './dbui/dbui.component';
import { ExcelComponent } from './component/excel/excel.component';

// PrimeNG
import {TableModule} from 'primeng/table';
import { ProjectsGridComponent } from './component/projects-grid/projects-grid.component';
import { CategoriesComponent } from './component/categories/categories.component';
import {TreeModule} from 'primeng/tree';

@NgModule({
  declarations: [
    AppComponent,
    DbuiComponent,
    ExcelComponent,
    ProjectsGridComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TableModule,
    TreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
