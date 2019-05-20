import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {ContactPage} from './contact.page';
import {ContactRoutingModule} from './contact-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ContactRoutingModule
    ],
    declarations: [ContactPage]
})
export class ContactPageModule {
}
