import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import { Router } from "@angular/router";


@Component({
    selector: "app-bottom-navbar",
    styleUrls: ["bottom-navbar.component.css"],
    templateUrl: "./bottom-navbar.component.html"
})
export class BottomNavbarComponent implements OnInit {

    constructor(private page: Page, private router: Router) { }

    ngOnInit(): void {
        this.page.actionBarHidden = true;
    }

   
   onClick(routePath: string) {
    this.router.navigateByUrl(routePath);
   }

    
}
