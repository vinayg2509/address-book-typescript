"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        // const personContact=this.addressBook.getContactFromUser()
        // this.addressBook.addAccount(personContact)
        // this.addressBook.getAllContacts()
        // const nameToEdit=readline.question("Enter first name to edit :")
        // this.addressBook.editContact(nameToEdit,{})
        // const nameToDelete=readline.question("Enter first name to delete :")
        // this.addressBook.deleteContact(nameToDelete)
        this.addressBook.addMultipleContact();
        this.addressBook.getAllContacts();
    }
}
const addressApp = new AddressBookMain();
addressApp.run();
