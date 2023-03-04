import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { IconButton, ListItem, ListIcon } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { BsEmojiSmile } from 'react-icons/bs';
import { deleteContact } from 'redux/contacts/operations';
const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <ListItem fontSize="2xl">
      <ListIcon
        pointerEvents="none"
        children={<BsEmojiSmile fill="green" size={24} />}
        mr={4}
      />
      {name}: {number}
      <IconButton
        ml={4}
        variant="outline"
        aria-label="delete label"
        icon={<DeleteIcon size={32} color="brown" />}
        size="md"
        colorScheme="gray"
        onClick={() => dispatch(deleteContact(id))}
      />
    </ListItem>
  );
};

Contact.protoTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contact;
