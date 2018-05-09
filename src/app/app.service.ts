import { Injectable, Inject } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { environment } from './../environments/environment';

Injectable();
export class AppService {
    private baseUrl = 'https://api.infusionsoft.com/crm/rest/v1/';
    private tagId = '103';
    constructor(@Inject(Http) private http: Http) {
    }

    public setTag(ids): any {
        return this.http.post(`${this.baseUrl}/tags/${this.tagId}/contacts?access_token=dxafsbyhvtqnmj5ugh4ku58z`,
            ids, { headers: this.getHeaders() })
            .subscribe(
                (val) => {
                    console.log('POST call successful value returned in body',
                        val);
                },
                response => {
                    console.log('POST call in error', response);
                },
                () => {
                    console.log('The POST observable is now completed.');
                });
    }


    private getHeaders() {
        // I included these headers because otherwise FireFox
        // will request text/html instead of application/json
        const headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }
}
