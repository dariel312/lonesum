import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import { ProfileVM } from "../services/profile.models";

@Component({
    selector: "app-profile-gallery",
    styleUrls: ["profile-gallery.component.css"],
    templateUrl: "./profile-gallery.component.html"
})
export class ProfileGalleryComponent implements OnInit {
    @ViewChild('container', { static: false }) private container : ElementRef;
    profileItemSize = 0;
    list: ProfileVM[] = null;

    profiles: ProfileVM[] = [
        {
            name: "test",
            coverImgUrl: "~/assets/profile_test.jpg",
        }, {
            name: "Gina",
            coverImgUrl: "~/assets/profile_test.jpg",
        }, {
            name: "fox",
            coverImgUrl: "~/assets/profile_test.jpg",
        }, {
            name: "liam",
            coverImgUrl: "~/assets/profile_test.jpg",
        },
        {
            name: "merina",
            coverImgUrl: "~/assets/profile_test.jpg",
        }];


    constructor(private page: Page) { }

    ngOnInit(): void {
        this.page.actionBarHidden = true;
        this.getData();
    }

    onLoadedView() {
     
        setTimeout(() => {
            // set grid size because Nativescript?
            this.profileItemSize =   this.page.getActualSize().width / 4;    
        }, 10)
    }

   

    getData() {
        setTimeout(() => {
            let list = [];

            for (let i = 0; i < 30; i++) {
                list.push(...this.profiles);
            }
    
            this.list = list;
        },200);
    }

    clickProfile(profile) {
        alert("TEST");
    }
}
