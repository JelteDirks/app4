import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactpersonenService, Contactpersoon} from '../../contactpersonen.service';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.page.html',
    styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

    contact: Contactpersoon = null;

    constructor(private activatedRoute: ActivatedRoute,
                private contactpersonenService: ContactpersonenService,
                private router: Router) {
    }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(paramMap => {
            this.contact = this.contactpersonenService.getContactpersoonByID(paramMap.get('contactID'));
            if (this.contact === null) {
                this.router.navigateByUrl('/contact');
            }
        });
    }

}
