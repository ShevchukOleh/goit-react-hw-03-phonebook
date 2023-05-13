import PropTypes from 'prop-types';
import {List, Button, ListItem } from './ContactList.styled';

export const ContactList = ({contacts, deleteContact}) => {
    return (
        <List>
            {contacts.map(contact => (<ListItem key={contact.id} >{contact.name}: {contact.number}
                <Button type="button" onClick={() => deleteContact(contact.id)}>Delete</Button></ListItem>))}
        </List>
    );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};