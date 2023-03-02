import { useState } from 'react';
import { customAlphabet } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
} from '@chakra-ui/react';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

const nanoid = customAlphabet('1234567890id-', 5);

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const nameInput = nanoid();
  const phoneInput = nanoid();

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (!contacts.some(contact => contact.name === name)) {
      dispatch(addContact({ name, number }));
    } else {
      alert(`${name} is already in contacts`);
    }
    reset();
  };

  return (
    <FormControl onSubmit={handleSubmit}>
      <div>
        <FormLabel htmlFor={nameInput}>Name</FormLabel>
        <Input
          type="text"
          name="name"
          value={name}
          id={nameInput}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </div>
      <div>
        <FormLabel htmlFor={phoneInput}>Number</FormLabel>
        <Input
          type="tel"
          name="phone"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id={phoneInput}
          onChange={handleChange}
        />
      </div>
      <Button type="submit">Add contact</Button>
    </FormControl>
  );
};

export default ContactForm;
