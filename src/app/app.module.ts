import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DbuiComponent } from './dbui/dbui.component';
import { ExcelComponent } from './component/excel/excel.component';
import { TopToolbarComponent } from './component/top-toolbar/top-toolbar.component';

// PrimeNG
import { TableModule } from 'primeng/table';
import { ProjectsGridComponent } from './component/projects-grid/projects-grid.component';
import { CategoriesComponent } from './component/categories/categories.component';
import { TreeModule } from 'primeng/tree';
import { MenubarModule } from 'primeng/menubar';
import {MenuModule} from 'primeng/menu';
import { RoutingModule } from './moudules/routing/routing.module';
import { ExcelPageComponent } from './component/excel-page/excel-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DbuiComponent,
    ExcelComponent,
    ProjectsGridComponent,
    CategoriesComponent,
    TopToolbarComponent,
    ExcelPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TableModule,
    TreeModule,
    MenubarModule,
    MenuModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
