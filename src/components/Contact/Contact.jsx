import PropTypes from 'prop-types';
//import { Item } from './Contact.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
const Contact = ({ name, phone, id }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <span>
        {name}: {phone}
      </span>
      <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </li>
  );
};

Contact.protoTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default Contact;
