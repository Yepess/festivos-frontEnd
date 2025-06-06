import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FestivoComponent } from './features/componentes/festivos/festivos.component';
import { CrearFestivoComponent } from './features/componentes/crear-festivo/crear-festivo.component';
import { EditarFestivoComponent } from './features/componentes/editar-festivo/editar-festivo.component';
import { TipoComponent } from './features/componentes/tipo/tipo.component';
import { CrearTipoComponent } from './features/componentes/crear-tipo/crear-tipo.component';
import { EditarTipoComponent } from './features/componentes/editar-tipo/editar-tipo.component';
import { ListaFestivosComponent } from './features/componentes/lista-festivos/lista-festivos.component';

import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    FestivoComponent,
    CrearFestivoComponent,
    EditarFestivoComponent,
    TipoComponent,
    CrearTipoComponent,
    EditarTipoComponent,
    ListaFestivosComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
