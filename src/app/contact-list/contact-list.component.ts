import { contacts } from './../contact';
import { userContact } from './../userContact';
import { Component, OnInit, Input } from '@angular/core';
import { format } from 'path';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: userContact[];
  newContact: any = {};
  
  constructor() { }

  ngOnInit() {
  // initialize your contacts here
    this.newContact=contacts;
  }

  addContact(newContact): any {
    console.log('Add contact has been called');
    newContact['name']=this.newContact.name;
    newContact['email']=this.newContact.email;
    newContact['phoneNumber']=this.newContact.phoneNumber;
    newContact['image']=this.newContact.image;
    contacts.push(newContact);
  }
}
