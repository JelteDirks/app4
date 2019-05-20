import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ContactPage} from './contact.page';

const routes: Routes = [
    {path: '', component: ContactPage},
    {path: ':contactID', loadChildren: './detail/detail.module#DetailPageModule'}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContactRoutingModule {
}
