import {Component, OnInit} from '@angular/core';
import {Base64DecodePipe} from "../../base64-decode.pipe";

@Component({
  selector: 'sdc-jwt',
  templateUrl: './jwt.component.html',
  styleUrls: ['./jwt.component.scss']
})
export class JwtComponent implements OnInit {

  public rawJwt: string = "";
  public jwt: Object = {};
  public validJwt: boolean = false;

  constructor() {
  }

  parseJwt(jwt: any) {
    if(jwt.target.value.length > 0) {
      let jwtHeader, jwtPayload: string;
      let jwtSplit = jwt.target.value.split('.');
      let base64DecodePipe = new Base64DecodePipe();

      jwtHeader = base64DecodePipe.transform(jwtSplit[0]);
      jwtPayload = base64DecodePipe.transform(jwtSplit[1]);

      try {
        this.jwt['header'] = JSON.stringify(JSON.parse(jwtHeader), null, 2);
        this.jwt['payload'] = JSON.stringify(JSON.parse(jwtPayload), null, 2);
      } catch (e) {
        this.jwt['header'] = jwtHeader;
        this.jwt['payload'] = jwtPayload;
      }

      if (Object.keys(this.jwt).length > 0) {
        this.validJwt = true;
      } else {
        this.validJwt = false;
      }
    } else {
      this.validJwt = false;
    }
  }

  ngOnInit() {
  }

}
