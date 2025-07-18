"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ContactPerson_1 = require("./model/ContactPerson");
const AddressBook_1 = require("./model/AddressBook");
class AddressBookMain {
    constructor() {
        this.addressBook = new AddressBook_1.AddressBook();
    }
    welcomeToAddressBook() {
        console.log("👋 Welcome to the Address Book Program");
    }
    run() {
        this.welcomeToAddressBook();
        const contact1 = new ContactPerson_1.ContactPerson("Vinay", "G", "Hosmane Main Road", "Bhadravathi", "KA", 577301, 12345678, "Vinay@gmail.com");
        this.addressBook.addAccount(contact1);
        this.addressBook.getAllContacts();
    }
}
const addressApp = new AddressBookMain();
addressApp.run();
