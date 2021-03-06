import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { TableemployeeComponent } from './tableemployee/tableemployee.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FormajoutempComponent } from './formajoutemp/formajoutemp.component';
import { TablegroupComponent } from './tablegroup/tablegroup.component';
import { TablestructureComponent } from './tablestructure/tablestructure.component';
import { GroupComponent } from './group/group.component';
import { StructureComponent } from './structure/structure.component';
import { FormajoutgroupComponent } from './formajoutgroup/formajoutgroup.component';

import {HttpClientModule} from '@angular/common/http';
import { FormastructureComponent } from './formastructure/formastructure.component';
import { AffectationgroupComponent } from './affectationgroup/affectationgroup.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DashboardComponent,
    SidenavComponent,
    TableemployeeComponent,
    FormajoutempComponent,
    TablegroupComponent,
    TablestructureComponent,
    GroupComponent,
    StructureComponent,
    FormajoutgroupComponent,
    FormastructureComponent,
    AffectationgroupComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // * MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
