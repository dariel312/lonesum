import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { ProfileGalleryComponent } from "./profile-gallery/profile-gallery.component";
import { BottomNavbarComponent } from "./bottom-navbar/bottom-navbar.component";
import { PagerModule } from "nativescript-pager/angular";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptUIListViewModule,
        AppRoutingModule,
        PagerModule
    ],
    declarations: [
        AppComponent,
        ItemsComponent,
        ItemDetailComponent,
        ProfileGalleryComponent,
        BottomNavbarComponent
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
