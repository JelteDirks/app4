import {RouterModule, Routes} from '@angular/router';
import {ContactPage} from './contact.page';
import {NgModule} from '@angular/core';

const routes: Routes = [
    {
        path: '',
        component: ContactPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContactRoutingModule {
}
