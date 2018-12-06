import {Component, OnInit, Pipe} from '@angular/core';
import {Base64DecodePipe} from "../../base64-decode.pipe";

@Component({
  selector: 'sdc-jwt',
  templateUrl: './jwt.component.html',
  styleUrls: ['./jwt.component.scss']
})
export class JwtComponent implements OnInit {

  public jwt: Object = {};
  public showParsedInput: boolean = false;
  public inputError: boolean = false;
  public showInputError: boolean = false;

  constructor() {
  }

  // Parse the input as JSON then return a new JSON object with spaces for formatting
  formatJson(decodedString: string, spaces: number): string {
    let formattedJson: string;

    try {
      formattedJson = JSON.stringify(JSON.parse(decodedString), null, spaces);
      // this.inputError = false;
    } catch (e) {
      // this.inputError = true;
      return "The decoded input couldn't be processed as JSON";
    }

    return formattedJson;
  }

  // Parse the input, treat it as a JWT
  // TODO: Is there a better type than 'any' like 'KeyboardEvent'?
  parseJwt(event: any): void {
    let jwtParsed: string[];
    let jwtHeader, jwtPayload: string;
    let base64DecodePipe: Base64DecodePipe = new Base64DecodePipe();

    if(event.target.value.length > 0) {
      jwtParsed = event.target.value.split('.');
      jwtHeader = base64DecodePipe.transform(jwtParsed[0]);
      jwtPayload = base64DecodePipe.transform(jwtParsed[1]);

      this.jwt['header'] = this.formatJson(jwtHeader, 2);
      this.jwt['payload'] = this.formatJson(jwtPayload, 2);

      if (Object.keys(this.jwt).length > 0) {
        this.showParsedInput = true;
        // if (this.inputError){
        //   this.showInputError = true;
        // }
      }
    } else {
      this.showParsedInput = false;
      // this.showInputError = false;
    }
  }

  ngOnInit() {
  }

}
