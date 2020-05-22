import { Injectable } from '@angular/core';
import { TranslateLoader } from '@ngx-translate/core';
import { from as fromPromise, Observable } from 'rxjs';
import { knownFolders } from "tns-core-modules/file-system";
import { map } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class NativeScriptTranslateLoaderService extends TranslateLoader {

    prefix = "/assets/i18n/";
    suffix = ".json";

    constructor(private http: HttpClient) {
        super();
    }

    getTranslation(lang: string): Observable<any> {
        return this.http.get(`${this.prefix}${lang}${this.suffix}`);
    }

}
