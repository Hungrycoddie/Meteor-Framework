import { ContactsCollection } from "./ContactsCollection";

Meteor.methods({
    'contacts.insert'({ name, email, imageUrl }) {
        if (!name) {
            throw new Meteor.Error("Name Is  Required.");
        }
        return ContactsCollection.insert({ name, email, imageUrl });
    }
})