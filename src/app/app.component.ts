import { Component } from "@angular/core";
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html"
})
export class AppComponent {

    constructor(public translate: TranslateService) {

        translate.addLangs(['en', 'nl']);
        translate.setDefaultLang('en');
        translate.use('en');

    }

}
