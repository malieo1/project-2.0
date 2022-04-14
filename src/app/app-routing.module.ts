import { FormajoutgroupComponent } from './formajoutgroup/formajoutgroup.component';
import { StructureComponent } from './structure/structure.component';
import { GroupComponent } from './group/group.component';
import { FormajoutempComponent } from './formajoutemp/formajoutemp.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { FormajoutstructureComponent } from './formajoutstructure/formajoutstructure.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'groupes', component: GroupComponent },
  { path: 'structure', component: StructureComponent},
  { path: 'Ajout', component: FormajoutempComponent },
  { path : 'ajoutG' , component : FormajoutgroupComponent },
  { path : 'bm', component : FormajoutstructureComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
