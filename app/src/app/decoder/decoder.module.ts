import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DecoderRoutingModule } from './decoder-routing.module';
import { JwtComponent } from './jwt/jwt.component';
import { Base64Component } from './base64/base64.component';

@NgModule({
  imports: [
    CommonModule,
    DecoderRoutingModule
  ],
  declarations: [JwtComponent, Base64Component]
})
export class DecoderModule { }
