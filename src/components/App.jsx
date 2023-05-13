import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm'
import { ContactList } from './ContactList/ContactList'
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }

  onHandleSubmit = formData => {
    const { name } = formData;
    const newContact = {
      id: nanoid(),
      ...formData,
    };
    if (this.state.contacts.find(el => name === el.name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  onChangeFilter = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  visibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  
  deleteContact = contactId => {
    this.setState(({ contacts }) => {
      return {
        contacts: contacts.filter(el => el.id !== contactId),
      };
    });
  };

  render() {
    const {onHandleSubmit, onChangeFilter, deleteContact, state: { filter }} = this
    const visible = this.visibleContacts();
    return (
      <div style={{padding: "5px 20px"}}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={onHandleSubmit}/>

        <h2>Contacts</h2>
        <Filter onFilter={onChangeFilter} value={filter}/>
        <ContactList deleteContact={deleteContact} contacts={visible} />
      </div>
    );
  };
}
