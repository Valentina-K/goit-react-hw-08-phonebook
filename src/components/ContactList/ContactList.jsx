import React from 'react';
import { useSelector } from 'react-redux';
import Contact from 'components/Contact/Contact';
import { List } from '@chakra-ui/react';
import { selectContactsList } from 'redux/contacts/selectors';

const ContactList = () => {
  const contactsList = useSelector(selectContactsList);
  return (
    <List spacing={3}>
      {contactsList.map(contact => (
        <Contact
          key={contact.id}
          name={contact.name}
          number={contact.number}
          id={contact.id}
        />
      ))}
    </List>
  );
};

export default ContactList;
