import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailMotoComponent } from './components/detail-moto/detail-moto.component';
import { HomeComponent } from './components/home/home.component';
import { DetailMarqueComponent } from './components/marque/detail-marque/detail-marque.component';
import { MarqueComponent } from './components/marque/marque.component';
import { DetailTypeComponent } from './components/type/detail-type/detail-type.component';
import { TypeComponent } from './components/type/type.component';

const routes: Routes = [
  { path:"" , component: HomeComponent },
  { path:"type" , component: TypeComponent },
  { path:"marque" , component: MarqueComponent },

  { path:"type/:type" , component: DetailTypeComponent },
  { path:"marque/:marque" , component: DetailMarqueComponent },
  { path:":id" , component: DetailMotoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
