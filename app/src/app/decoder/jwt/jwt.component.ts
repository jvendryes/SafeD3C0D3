import { Component, OnInit } from '@angular/core';
import { Base64DecodePipe } from '../../base64-decode.pipe';

interface JwtInterface {
    header?: string;
    payload?: string;
}

@Component({
    selector: 'sdc-jwt',
    templateUrl: './jwt.component.html',
    styleUrls: ['./jwt.component.scss']
})
export class JwtComponent implements OnInit {
    public jwt: JwtInterface;
    public showParsedInput: boolean;

    constructor() {}
    // Parse the input as JSON then return a new JSON object with spaces for formatting
    formatJson(decodedString: string, spaces: number): string {
        let formattedJson: string;

        try {
            formattedJson = JSON.stringify(JSON.parse(decodedString), null, spaces);
        } catch (e) {
            return "The decoded input couldn't be processed as JSON";
        }

        return formattedJson;
    }

    // Parse the input, treat it as a JWT
    parseJwt(event: Event): void {
        let eventTarget = event.target as HTMLInputElement;
        let jwtParsed: string[];
        let jwtHeader: string;
        let jwtPayload: string;
        const base64DecodePipe: Base64DecodePipe = new Base64DecodePipe();

        if (eventTarget.value.length > 0) {
            jwtParsed = eventTarget.value.split('.');
            jwtHeader = base64DecodePipe.transform(jwtParsed[0]);
            jwtPayload = base64DecodePipe.transform(jwtParsed[1]);

            this.jwt.header = this.formatJson(jwtHeader, 2);
            this.jwt.payload = this.formatJson(jwtPayload, 2);

            if (Object.keys(this.jwt).length > 0) {
                this.showParsedInput = true;
            }
        } else {
            this.showParsedInput = false;
        }
    }

    ngOnInit() {
        this.jwt = {};
        this.showParsedInput = false;
    }
}
