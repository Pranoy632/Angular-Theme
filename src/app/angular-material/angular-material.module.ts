import { NgModule } from '@angular/core';
import { MdInputModule, MdSidenavModule} from '@angular/material';

import { AngularMaterialComponent } from './angular-material.component';
import { AngularMaterialRoutingModule } from './angular-material-routing.module';

@NgModule({
  imports: [
      AngularMaterialRoutingModule,
      MdInputModule,
      MdSidenavModule
],

  declarations: [ AngularMaterialComponent ]
})
export class AngularMaterialModule { }
