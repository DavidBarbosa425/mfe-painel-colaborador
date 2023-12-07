import { NgModule } from "@angular/core";
import { PainelColaboradorComponent } from "./painel-colaborador/pages/painel-colaborador.component";
import { CustomFormularioModule } from "../shared/custom-formulario.module";
import { PainelColaboradorResumoComponent } from "./painel-colaborador/pages/resumo/painel-colaborador-resumo.component";


@NgModule({
    declarations: [
        PainelColaboradorComponent,
        PainelColaboradorResumoComponent
    ],
    providers: [],
    imports: [
        CustomFormularioModule
    ]
})
export class PainelColaboradorModule { }
