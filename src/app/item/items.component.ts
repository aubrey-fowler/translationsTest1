import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {

    items: Array<Item>;

    constructor(private itemService: ItemService, private translate: TranslateService) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }

    switchLang(lang: string) {
        this.translate.use(lang);
    }

    useLanguage(language: string) {
        this.translate.use(language);
    }

    add(lang: string) {

        //this.translate.store
    }

}
