import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { selectFilteredContacts } from '../../redux/selectors';
import {
  ContactsWrapper,
  ContactsTitle,
  ContactsList,
  ContactElement,
  DeleteBtn,
} from './ContactList.styled';

const ContactList = ({ children }) => {
  const contacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ContactsWrapper>
      <ContactsTitle>Contacts</ContactsTitle>
      {children}
      <ContactsList>
        {contacts.map(contact => (
          <ContactElement key={contact.id}>
            {contact.name}: {contact.number}
            <DeleteBtn id={contact.id} onClick={() => handleDelete(contact.id)}>
              Delete
            </DeleteBtn>
          </ContactElement>
        ))}
      </ContactsList>
    </ContactsWrapper>
  );
};

ContactList.propTypes = {
  children: PropTypes.array.isRequired,
};
export default ContactList;
