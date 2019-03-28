import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
      path: 'decoder',
      loadChildren: 'src/app/decoder/decoder.module#DecoderModule'
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
export class AppRoutingModule { }
