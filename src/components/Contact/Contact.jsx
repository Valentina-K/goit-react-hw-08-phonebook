import PropTypes from 'prop-types';
//import { Item } from './Contact.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <span>
        {name}: {number}
      </span>
      <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </li>
  );
};

Contact.protoTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contact;
