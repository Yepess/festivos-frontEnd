import { Routes } from '@angular/router';
import { FestivoComponent } from './features/componentes/festivos/festivos.component';
import { CrearFestivoComponent } from './features/componentes/crear-festivo/crear-festivo.component';
import { EditarFestivoComponent } from './features/componentes/editar-festivo/editar-festivo.component';
import { TipoComponent } from './features/componentes/tipo/tipo.component';
import { CrearTipoComponent } from './features/componentes/crear-tipo/crear-tipo.component';
import { EditarTipoComponent } from './features/componentes/editar-tipo/editar-tipo.component';
import { ListaFestivosComponent } from './features/componentes/lista-festivos/lista-festivos.component';

export const routes: Routes = [
  { path: '', redirectTo: '/festivos', pathMatch: 'full' },
  { path: 'festivos', component: FestivoComponent },
  { path: 'lista-festivos', component: ListaFestivosComponent },
  { path: 'crear-festivo', component: CrearFestivoComponent },
  { path: 'editar-festivo/:id', component: EditarFestivoComponent },
  { path: 'tipos', component: TipoComponent },
  { path: 'crear-tipo', component: CrearTipoComponent },
  { path: 'editar-tipo/:id', component: EditarTipoComponent }
];