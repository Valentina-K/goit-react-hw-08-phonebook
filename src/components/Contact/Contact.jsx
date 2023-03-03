import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { IconButton } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { deleteContact } from 'redux/contacts/operations';
const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <span>
        {name}: {number}
      </span>
      <IconButton
        variant="outline"
        aria-label="delete label"
        icon={<DeleteIcon size={32} color="brown" />}
        size="lg"
        colorScheme="gray"
        onClick={() => dispatch(deleteContact(id))}
      />
    </li>
  );
};

Contact.protoTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contact;
