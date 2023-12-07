import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from "./libraries/material/material.module";


@NgModule({
  declarations: [

  ],
  exports : [
    FlexLayoutModule,
    MaterialModule

  ],
  imports : [
    FlexLayoutModule,
    MaterialModule
  ]
})

export class SharedModule {}
