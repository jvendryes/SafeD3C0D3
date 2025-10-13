import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Base64DecodePipe } from '../../base64-decode-pipe';

@Component({
  selector: 'sdc-base64',
  imports: [FormsModule, Base64DecodePipe],
  templateUrl: './base64.html',
  styleUrl: './base64.scss'
})
export class Base64 {
  public rawBase64: string = '';
}
