import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'decoder',
        loadChildren: () => import('src/app/decoder/decoder.module').then(m => m.DecoderModule)
    },
    {
        path: '',
        redirectTo: '/decoder/jwt',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
