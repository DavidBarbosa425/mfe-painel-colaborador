import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from "./libraries/material/material.module";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [

  ],
  exports : [
    CommonModule,
    FlexLayoutModule,
    MaterialModule

  ],
  imports : [
    CommonModule,
    FlexLayoutModule,
    MaterialModule
  ]
})

export class SharedModule {}
