import { Routes } from '@angular/router';
import { Jwt } from './decoder/jwt/jwt';
import { Base64 } from './decoder/base64/base64';

export const routes: Routes = [
    {
        path: 'decoder/jwt',
        component: Jwt
    },
    {
        path: 'decoder/base64',
        component: Base64
    },
    {
        path: '',
        redirectTo: 'decoder/jwt',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: ''
    }
];
