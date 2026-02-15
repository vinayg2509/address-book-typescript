"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressBookManager = void 0;
const AddressBook_1 = require("./AddressBook");
const readline = __importStar(require("readline-sync"));
class AddressBookManager {
    constructor() {
        this.addressBooks = new Map();
    }
    addAddressBook() {
        do {
            const addressBookName = readline.question("Enter address book name: ").trim();
            if (!addressBookName) {
                console.log("❌ Name cannot be empty.");
            }
            else if (this.addressBooks.has(addressBookName)) {
                console.log(`❌ Address Book "${addressBookName}" already present.`);
            }
            else {
                this.addressBooks.set(addressBookName, new AddressBook_1.AddressBook());
                console.log(`✅ Address Book "${addressBookName}" created.`);
            }
            const choice = readline.question("Do you want to add more address books? (yes/no): ").toLowerCase();
            if (choice !== "yes")
                break;
        } while (true);
    }
    listAddressBooks() {
        if (this.addressBooks.size === 0) {
            console.log("🚫 No address books available.");
        }
        else {
            console.log("📘 Available Address Books:");
            this.addressBooks.forEach((_, name) => console.log(`- ${name}`));
        }
    }
    selectAddressBook() {
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
    manageAddressBook(selectedBook) {
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
exports.AddressBookManager = AddressBookManager;
