import {Component, OnInit} from '@angular/core';
import {ContactpersonenService, Contactpersoon} from '../contactpersonen.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.page.html',
    styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

    contactpersonen: Contactpersoon[] = [];

    constructor(private contactpersonenService: ContactpersonenService) {
    }

    ngOnInit() {
        this.contactpersonen = this.contactpersonenService.contactpersonen;
    }

}
