import { NgModule } from "@angular/core";
import { PainelColaboradorComponent } from "./painel-colaborador/pages/painel-colaborador.component";
import { CustomFormularioModule } from "../shared/template/form/custom-formulario.module";
import { PainelColaboradorResumoComponent } from "./painel-colaborador/pages/resumo/painel-colaborador-resumo.component";
import { SharedModule } from "../shared/shared.module";


@NgModule({
    declarations: [
        PainelColaboradorComponent,
        PainelColaboradorResumoComponent
    ],
    providers: [],
    imports: [
        CustomFormularioModule,
        SharedModule
    ]
})
export class PainelColaboradorModule { }
