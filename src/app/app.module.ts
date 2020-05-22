import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
// Uncomment and add to NgModule imports if you need to use two-way binding
import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { NativeScriptTranslateLoaderService } from "./native-script-translate-loader.service";
import { HttpClient } from "@angular/common/http";
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { NativeScriptLoader } from '@danvick/ngx-translate-nativescript-loader';
// AoT requires an exported function for factories
// export function createTranslateLoader(http: HttpClient) {
//     return new NativeScriptTranslateLoaderService(http);
// }

export function createTranslateLoader() {
    return new NativeScriptLoader("./assets/i18n/", ".json");
}

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptHttpClientModule,
        NativeScriptFormsModule,
        NativeScriptModule,
        AppRoutingModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader
              }
          })
    ],
    declarations: [
        AppComponent,
        ItemsComponent,
        ItemDetailComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
