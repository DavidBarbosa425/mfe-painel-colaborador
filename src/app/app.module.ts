import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { PainelColaboradorModule } from './features/painel-colaborador.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    PainelColaboradorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}