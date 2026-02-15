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
const AddressBook_1 = require("./model/AddressBook");
const AddressBookManager_1 = require("./model/AddressBookManager");
const readline = __importStar(require("readline-sync"));
class AddressBookMain {
    constructor() {
        this.addressBook = new AddressBook_1.AddressBook();
        this.addressBookManager = new AddressBookManager_1.AddressBookManager();
    }
    welcomeToAddressBook() {
        console.log("👋 Welcome to the Address Book Program");
    }
    run() {
        this.welcomeToAddressBook();
        while (true) {
            console.log("\n📁 MAIN MENU");
            console.log("1. Create Address Book");
            console.log("2. Select Existing Address Book");
            console.log("3. Exit");
            const choice = parseInt(readline.question("Enter your choice: "));
            switch (choice) {
                case 1:
                    this.addressBookManager.addAddressBook();
                    break;
                case 2:
                    const selectedBook = this.addressBookManager.selectAddressBook();
                    if (selectedBook) {
                        this.addressBookManager.manageAddressBook(selectedBook);
                    }
                    break;
                case 3:
                    console.log("👋 Exiting Address Book Program.");
                    return;
                default:
                    console.log("❗ Invalid choice. Try again.");
            }
        }
    }
}
const addressApp = new AddressBookMain();
addressApp.run();
