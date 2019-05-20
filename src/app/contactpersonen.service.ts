import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ContactpersonenService {

    contactpersonen: Contactpersoon[] = [] = [
        {
            id: '1',
            name: 'Ron Bakkers',
            phone: '068395765629',
            email: 'ron@bsbverzekeringen.nl',
            imageURL: 'https://www.bsbverzekeringen.nl/wp-content/uploads/2018/10/Ron-1-1.jpg'
        },
        {
            id: '2',
            name: 'Erik Bischops',
            phone: '0692835729',
            email: 'erik@bsbverzekeringen.nl',
            imageURL: 'https://www.bsbverzekeringen.nl/wp-content/uploads/2018/10/Eric-1-1.jpg'
        },
        {
            id: '3',
            name: 'Mike Aretz',
            phone: '06284966204',
            email: 'mike@bsbverzekeringen.nl',
            imageURL: 'https://www.bsbverzekeringen.nl/wp-content/uploads/2018/10/Mike1-1.jpg'
        }
    ];

    constructor() {
    }

    getContactpersoonByID(id: string): Contactpersoon {
        return {...this.contactpersonen.find(c => c.id === id)};
    }

    getContactpersonen(): Contactpersoon[] {
        return [...this.contactpersonen];
    }

    setContactpersoonByID(id: string, contactpersoon: Contactpersoon): number {
        this.contactpersonen = this.contactpersonen.map(c => c.id === id ? contactpersoon : c);
        return this.contactpersonen.find(c => c.id === id) ? 0 : 1;
    }
}

export interface Contactpersoon {
    id: string;
    name: string;
    phone: string;
    email: string;
    imageURL: string;
}
