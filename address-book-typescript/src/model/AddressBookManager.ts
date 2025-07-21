import { AddressBook } from "./AddressBook";
import * as readline from "readline-sync";

export class AddressBookManager {
    private addressBooks: Map<string, AddressBook> = new Map();

    addAddressBook(): void {
        do {
            const addressBookName = readline.question("Enter address book name: ").trim();

            if (!addressBookName) {
                console.log("❌ Name cannot be empty.");
            } else if (this.addressBooks.has(addressBookName)) {
                console.log(`❌ Address Book "${addressBookName}" already present.`);
            } else {
                this.addressBooks.set(addressBookName, new AddressBook());
                console.log(`✅ Address Book "${addressBookName}" created.`);
            }

            const choice = readline.question("Do you want to add more address books? (yes/no): ").toLowerCase();
            if (choice !== "yes") break;
        } while (true);
    }

    listAddressBooks(): void {
        if (this.addressBooks.size === 0) {
            console.log("🚫 No address books available.");
        } else {
            console.log("📘 Available Address Books:");
            this.addressBooks.forEach((_, name) => console.log(`- ${name}`));
        }
    }

    selectAddressBook(): AddressBook | undefined {
        if (this.addressBooks.size === 0) {
            console.log("🚫 No address books available.");
            return;
        }

        this.listAddressBooks();
        const name = readline.question("Enter address book name to select: ").trim();
        const book = this.addressBooks.get(name);

        if (!book) {
            console.log(`❌ Address Book "${name}" not found.`);
            return;
        }

        console.log(`✅ "${name}" Address Book selected.`);
        return book;
    }

    manageAddressBook(selectedBook: AddressBook): void {
        while (true) {
            console.log("\n📒 1. Add Contacts");
            console.log("📋 2. View Contacts");
            console.log("❌ 3. Exit");

            const choice = parseInt(readline.question("Enter your choice: "));

            switch (choice) {
                case 1:
                    selectedBook.addMultipleContact();
                    break;
                case 2:
                    selectedBook.getAllContacts();
                    break;
                case 3:
                    return;
                default:
                    console.log("❗ Invalid choice");
            }
        }
    }
}
