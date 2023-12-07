import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PainelColaboradorComponent } from './features/painel-colaborador/pages/painel-colaborador.component';

const MFE1_ROUTES: Routes = [
  {
    path: '',
    component: PainelColaboradorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(MFE1_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}