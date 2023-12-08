import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { PainelColaboradorModule } from './features/painel-colaborador.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    PainelColaboradorModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}