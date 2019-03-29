import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JwtComponent } from './jwt/jwt.component';
import { Base64Component } from './base64/base64.component';

const routes: Routes = [
    {
        path: 'jwt',
        component: JwtComponent
    },
    {
        path: 'base64',
        component: Base64Component
    },
    {
        path: '',
        redirectTo: '/decoder/jwt',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DecoderRoutingModule {}
