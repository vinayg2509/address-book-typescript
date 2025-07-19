import * as readline from "readline-sync"

import {ContactPerson} from "./ContactPerson"
export class AddressBook{

    private contacts:ContactPerson[]=[]

    addAccount(contact:ContactPerson):void
    {
        this.contacts.push(contact)
    }
    
    getAllContacts(): void 
    {
    console.log("📇 Contact List:");
    this.contacts.forEach((contact, i) => console.log(`${i + 1}. ${contact.toString()}`));
    }

    //*UC2-Add-New-Contact-->Adding contact by taking I/P from console
    getContactFromUser():ContactPerson
   {
    const firstName=readline.question("First name: ")
    const lastName=readline.question("Second name: ")
    const address=readline.question("Address: ")
    const city=readline.question("City: ")
    const state=readline.question("State: ")
    const zipcode=parseInt(readline.question("Zipcode: "))
    const phoneNumber=parseInt(readline.question("Phone Number: "))
    const email=readline.question("Email: ")
    return new ContactPerson(firstName,lastName,address,city,state,zipcode,phoneNumber,email)
   }

  //*UC3-edit-contact-->Editing contact by first name
  editContact(firstName:string,updateDetails:Partial<ContactPerson>):boolean
  {
    const contact = this.contacts.find(c => c.firstName === firstName);

    if(contact)
    {
       Object.assign(contact,updateDetails)
       console.log("\nDo you want to edit this contact");
       const choice=readline.question("Type 'yes' to edit ").toLowerCase()
    if(choice==='yes')
    {
      const newLastName=readline.question("Second name: ")
      const newAddress=readline.question("Address: ")
      const newCity=readline.question("City: ")
      const newState=readline.question("State: ")
      const newiZpcode=parseInt(readline.question("Zipcode: "))
      const newPhoneNumber=parseInt(readline.question("Phone Number: "))
      const newEmail=readline.question("Email: ")

      Object.assign(contact,{
        lastName:newLastName,
        address:newAddress,
        city:newCity,
        state:newState,
        zipcode:newiZpcode,
        phoneNumber:newPhoneNumber,
        email:newEmail,
      });
    }
      console.log("Contact updated succesfully");
      return true
    }
    console.log("Contact not found");
    return false
  }
    //*UC4-delete-contact-->Delete contact by first name
    deleteContact(firstName:string):boolean
    {
        const index = this.contacts.findIndex(c => c.firstName === firstName);
        if(index!==-1)
        {
          this.contacts.splice(index,-1)
          console.log("Contact deleted succesfully");
          return true;
        }
          console.log("Contact not found");
          return false
    }

    //*UC5-add-multiple-contacts-->Add multiple contact to address book
    addMultipleContact():void
    {
        do{
            const contact=this.getContactFromUser()
            this.addAccount(contact)
            const addMore=readline.question("\nDo you want to add more contact :").toLowerCase()
            if(addMore!=="yes")
            {
              break;
            }
            
        }while(true)

    }
}

