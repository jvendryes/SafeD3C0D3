import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DecoderRoutingModule } from './decoder-routing.module';
import { JwtComponent } from './jwt/jwt.component';
import { Base64Component } from './base64/base64.component';
import { Base64DecodePipe } from '../base64-decode.pipe';

@NgModule({
    imports: [CommonModule, FormsModule, DecoderRoutingModule],
    declarations: [JwtComponent, Base64Component, Base64DecodePipe]
})
export class DecoderModule {}
